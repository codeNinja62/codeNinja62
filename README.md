# Sameer Ahmed

Final-year CS student at NUST, Pakistan (graduating March 2027). I write systems code in C, C++, Go and TypeScript, and I'm building a track record in open source: Node.js and Appium so far.

Everything below links to code you can read and run.

## Selected projects

**[Interlock](https://github.com/interlock-ai/interlock)** · TypeScript · my final-year project, in active development
Early conflict detection for parallel AI coding agents. A local daemon speculatively merges in-flight branches in shadow worktrees and catches conflicts git can't see: merges that apply cleanly but break the typecheck, build or tests. It warns agents through an MCP server and never writes to your repos. While building its file watcher I found a regression in Node's recursive `fs.watch` on Linux, opened [nodejs/node#66791](https://github.com/nodejs/node/issues/66791) and sent the fix in [#66792](https://github.com/nodejs/node/pull/66792).

**[SentinelFS](https://github.com/codeNinja62/SentinelFS-Artifact)** · C, libfuse3 · [write-up](https://www.researchgate.net/publication/400550761_SentinelFS_An_Iterative_Design_Study_in_the_Performance_Security_and_Efficiency_of_User-Space_Ransomware_Detection)
A FUSE filesystem that inspects writes with libmagic and Shannon entropy to catch encryption as it happens. A 100 MB write takes 1.01 s, which the write-up measures as 11.4× native ext4 rather than hiding. Resident memory is 6.9 MB. It also documents a header-spoofing evasion of magic-byte checks.

**[SparseFlow](https://github.com/codeNinja62/simASP)** · C++17
A 5-stage pipelined simulator for a RISC-V subset, with custom `LNZ` and `VLOAD` instructions, a direct-mapped cache, a 1-bit branch predictor and a cycle-by-cycle trace. 2.85–2.95× faster than a single-cycle baseline on 1,000-element sparse sums.

**[LexScript](https://github.com/codeNinja62/LexScript)** · Go
A compiler that turns contract logic, written as a finite state machine, into formatted Markdown or PDF. Output text comes from fixed templates, so the same input always produces the same document. Ships with a CLI and a VS Code extension.

**[Scrolliosis](https://github.com/codeNinja62/Scrolliosis)** · Kotlin, Jetpack Compose
An Android app that puts distracting apps behind a quiz written from your own notes. Built on an Accessibility Service, with release CI.

## Open source

Merged:

<!-- MERGED:START -->
| Project | Change | Merged |
| --- | --- | --- |
| [DanMcInerney/pymetasploit3](https://github.com/DanMcInerney/pymetasploit3) | [Refactor authentication, payload handling, and fix session/console bugs](https://github.com/DanMcInerney/pymetasploit3/pull/109) | 2025-07-15 |
<!-- MERGED:END -->

In review:

<!-- OPEN:START -->
| Project | Change | Opened |
| --- | --- | --- |
| [appium/appium-chromium-driver](https://github.com/appium/appium-chromium-driver) | [fix(chrome): detect the Chrome that ChromeDriver will launch on Windows](https://github.com/appium/appium-chromium-driver/pull/474) | 2026-10-17 |
| [appium/appium-wincore-driver](https://github.com/appium/appium-wincore-driver) | [fix(server): report a closed session window as "no such window"](https://github.com/appium/appium-wincore-driver/pull/107) | 2026-10-17 |
| [appium/appium-wincore-driver](https://github.com/appium/appium-wincore-driver) | [fix(app): handle omitted and invalid setWindowRect fields](https://github.com/appium/appium-wincore-driver/pull/108) | 2026-10-17 |
| [nodejs/node](https://github.com/nodejs/node) | [fs: report errors from recursive watch events](https://github.com/nodejs/node/pull/66792) | 2026-10-16 |
<!-- OPEN:END -->

<sub>These tables refresh daily from the GitHub API, so nothing in them is hand-edited.</sub>

## How I work

<!-- Keep this section only if it is true. -->
I use AI coding tools. I read, run and can explain every line I submit, and I follow each project's AI policy.

## Contact

[sameer.cs@proton.me](mailto:sameer.cs@proton.me) · [LinkedIn](https://linkedin.com/in/sameerexplorer) · [sameer.pk](https://sameer.pk)
