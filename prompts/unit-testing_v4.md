# Unit testing

> examine existing unit tests, add missing, execute and calculate coverage

**Version:** 4 | **Date:** 2025-12-23 | **Author:** jochim
**Tags:** None

---

## Prompt Content
```text
> "Act as a **Lead SDET** obsessed with Quality Assurance. I need you to execute a "Fix-and-Verify" cycle to boost my project's test coverage to at least **80%**.
>
> **The Context**
> * **Framework:** Vitest (Tests are co-located, e.g., `lib/utils.ts` -> `lib/utils.test.ts`).
> * **Goal:** Achieve >80% Code Coverage.
> * **Constraint:** You must **re-run** the tests after generating new ones to confirm they pass.
>
> **Phase 1: Baseline Audit**
> 1.  **Dependency Check:** Check `package.json` for `@vitest/coverage-v8`. If missing, install it (or tell me the command).
> 2.  **Initial Run:** Execute `npx vitest run --coverage`.
> 3.  **Analyze:** Identify files with logic (excluding UI components if using RTL is too heavy) that have **< 80% coverage**.
>
> **Phase 2: Test Generation (The Fix)**
> *For the top 3 files with low/zero coverage:*
> 1.  **Create/Update** the `*.test.ts` file co-located with the source.
> 2.  **Requirements:**
>     * **Mocking:** You must mock `prisma` or external API calls. Do not hit the real DB.
>     * **Unhappy Paths:** Include at least one test case for invalid inputs or errors.
>     * **Vibe Check:** If the logic is untestable (e.g., massive functions), refactor the source code slightly to make it testable, then write the test.
>
> **Phase 3: Verification (The Loop)**
> 1.  **Re-Execute:** Run `npx vitest run --coverage` again.
> 2.  **Compare:** Compare the new coverage % against the Phase 1 baseline.
>
> **Phase 4: Final Reporting**
> Generate a Markdown report file in `Technical review/` named `Test_Coverage_Report_[Timestamp].md`.
>
> The report must contain:
> 1.  **Executive Summary:** Final Coverage % (and the delta/improvement from Phase 1).
> 2.  **Test Execution Matrix:**
>     | Test File | Status (✅/❌) | Coverage % |
>     | :--- | :--- | :--- |
>     | `lib/utils.test.ts` | ✅ PASS | 92% |
> 3.  **Remaining Gaps:** Which files are still below 80% and why?
>
> **Start by running the initial coverage check.**"

```

## Metadata
*   **Collection:** Vibe coding
*   **Source:** None
