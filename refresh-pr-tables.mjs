// Rewrites the merged and in-review PR tables in README.md from the GitHub search API.
// Run with: node refresh-pr-tables.mjs README.md   (GITHUB_TOKEN optional, raises rate limits)

import { readFile, writeFile } from "node:fs/promises";

const AUTHOR = "codeNinja62";
// Your own projects and course cohorts are not "open source" contributions.
const EXCLUDED_OWNERS = new Set([AUTHOR, "interlock-ai", "Exp-Communicate-Using-Markdown-Cohort-1"]);

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "profile-pr-refresh",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function searchPrs(state) {
  const items = [];
  for (let page = 1; ; page++) {
    const q = encodeURIComponent(`author:${AUTHOR} type:pr is:${state}`);
    const res = await fetch(
      `https://api.github.com/search/issues?q=${q}&sort=updated&per_page=100&page=${page}`,
      { headers },
    );
    if (!res.ok) throw new Error(`search ${state} failed: ${res.status} ${await res.text()}`);
    const body = await res.json();
    items.push(...body.items);
    if (items.length >= body.total_count || body.items.length === 0) break;
  }
  return items
    .map((pr) => {
      const [, owner, repo] = pr.repository_url.match(/repos\/([^/]+)\/([^/]+)$/);
      return {
        owner,
        repo,
        title: pr.title.replace(/\|/g, "\|"),
        url: pr.html_url,
        date: (pr.closed_at ?? pr.created_at).slice(0, 10),
      };
    })
    .filter((pr) => !EXCLUDED_OWNERS.has(pr.owner))
    .sort((a, b) => b.date.localeCompare(a.date));
}

function table(prs, dateLabel) {
  const rows = prs.map(
    (pr) =>
      `| [${pr.owner}/${pr.repo}](https://github.com/${pr.owner}/${pr.repo}) | [${pr.title}](${pr.url}) | ${pr.date} |`,
  );
  return ["| Project | Change | " + dateLabel + " |", "| --- | --- | --- |", ...rows].join("\n");
}

function replaceBetween(text, start, end, content) {
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  if (from === -1 || to === -1 || to < from) throw new Error(`markers ${start} / ${end} not found in order`);
  return text.slice(0, from + start.length) + "\n" + content + "\n" + text.slice(to);
}

const [readmePath = "README.md"] = process.argv.slice(2);
const [merged, open] = await Promise.all([searchPrs("merged"), searchPrs("open")]);

let readme = await readFile(readmePath, "utf8");
readme = replaceBetween(readme, "<!-- MERGED:START -->", "<!-- MERGED:END -->", table(merged, "Merged"));
readme = replaceBetween(readme, "<!-- OPEN:START -->", "<!-- OPEN:END -->", table(open, "Opened"));
await writeFile(readmePath, readme);
console.log(`merged: ${merged.length}, open: ${open.length}`);
