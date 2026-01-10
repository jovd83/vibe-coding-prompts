# Smart Major Release Orchestrator - Split from master

> This prompt acts as an autonomous Release Manager for "Vibe Coding" projects. It automates the transition from one major version to the next:
1. Determine Version Numbers
2. Git Operations (Freeze & Branch)
3. Apply Updates (On the new branch)

**Version:** 2 | **Date:** 2026-01-08 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
@workspace Act as a Release Manager and perform a Major Version Release.

**1. Determine Version Numbers:**
* Read the current version number inside `README.md`.
* Calculate the **Next Major Version** by strictly following Semantic Versioning (Major.Minor.Patch):
    * Increment the MAJOR number by 1.
    * Reset MINOR and PATCH to 0.
    * *Examples:* 2.3.1 becomes 3.0.0; 4.0.0 becomes 5.0.0.
* The release codename is: [[RELEASE_CODENAME]].

**2. Git Operations (Freeze & Branch):**
* **Freeze:** Create a git tag on the *current* commit (before edits) named `legacy-freeze-v{Current_Version}`.
* **Branch:** Create and checkout a new branch named `release/v{New_Major_Version}-[[RELEASE_CODENAME]]`.

**3. Apply Updates (On the new branch):**
* **README.md:** Replace the old version number with the {New_Major_Version}.
* **CHANGELOG.md:** Add a new top-level header: `## {New_Major_Version} - [[RELEASE_CODENAME]]`.

Please output the calculated version numbers to confirm logic, apply the file edits, and generate the git commands.
```

## Variables
| Name | Description |
|------|-------------|
| RELEASE_CODENAME |  |

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
