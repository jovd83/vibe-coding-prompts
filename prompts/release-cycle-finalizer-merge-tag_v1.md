# Release Cycle Finalizer (Merge & Tag)

> Safely closes the release loop by merging the temporary "Major Release" branch back into the main codebase.

**Version:** 1 | **Date:** 2026-01-08 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
@workspace Act as a Release Manager. We are finalizing the release cycle and need to merge the new major version back into the main codebase.

**1. Identify Branches:**
* Detect the current release branch we are on (e.g., `release/v...`).
* Identify the original primary branch (usually `main` or `master`).

**2. Merge Strategy:**
* Switch to the primary branch.
* pull the latest changes from remote to ensure the primary branch is up to date.
* Merge the release branch into the primary branch.
    * *Safety Check:* If there are merge conflicts, stop and list the conflicting files. Do not resolve them automatically.

**3. Finalize:**
* Once merged, create a final git tag on this commit using the new version number found in `README.md` (e.g., `v3.0.0`).
* Ask if I want to delete the release branch now that it is merged.

Please generate the specific git commands to execute this workflow.
```

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
