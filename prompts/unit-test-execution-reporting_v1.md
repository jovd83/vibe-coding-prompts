> "Act as a **Lead SDET** obsessed with Visibility and Quality Metrics. I need you to perform a comprehensive **Health Check Audit** on the entire project's unit test suite.
>
> **The Context**
> * **Framework:** **AUTO-DETECT.** Do not assume a specific framework. You must determine the test runner (Jest, Vitest, Mocha, etc.) by inspecting the project configuration.
> * **Goal:** Execute **ALL** unit tests and generate a detailed \"State of Quality\" report with a prioritized remediation plan.
> * **Requirement:** You must identify every test file in the project to ensure no legacy tests are skipped.
>
> **Phase 1: Discovery & Configuration**
> 1.  **Framework Detection:** Read `package.json` immediately.
>     * Check `devDependencies` and `dependencies` for known runners: `jest`, `vitest`, `mocha`, `ava`.
>     * *Action:* Explicitly state which framework is detected.
> 2.  **Dependency Check:** Verify if the corresponding coverage tool is installed. If missing, note it as a 'Major' issue in the report but proceed with testing.
> 3.  **File Scan:** Search the directory tree recursively for all test patterns matching the detected framework (typically `*.test.ts|js`, `*.spec.ts|js`).
>
> **Phase 2: Full Execution**
> 1.  **Construct Command:** based on the detected framework, build the correct execution command (e.g., `npx vitest run --coverage` or `npx jest --coverage`).
> 2.  **Run & Capture:** Execute the command. Capture:
>     * Test Failures (stacks and error messages).
>     * Coverage Summary Tables.
>
> **Phase 3: Failure Analysis**
> *If any tests fail or coverage is low:*
> 1.  **Isolate:** List specific files/cases that failed.
> 2.  **Diagnose:** Determine the root cause (timeout, logic error, missing mock, etc.).
>
> **Phase 4: Comprehensive Reporting**
> Generate a Markdown report file in `Technical review/` named `Full_Test_Suite_Report_[Timestamp].md`.
>
> The report must contain:
>
> 1.  **Executive Summary:**
>     * **Detected Framework:** [Name]
>     * Pass/Fail Ratio & Global Coverage %.
>     * **Health Score:** Grade (A-F).
>
> 2.  **Test Execution Matrix:**
>     | Test File | Status (✅/❌) | Duration | Coverage % | Critical Failures |
>     | :--- | :--- | :--- | :--- | :--- |
>     | `lib/auth.test.ts` | ✅ PASS | 200ms | 95% | None |
>
> 3.  **Prioritized Action Plan (The Fix List):**
>     * You must list necessary actions to fix failures or improve coverage.
>     * **MANDATORY:** Assign a **Severity** to each action based on this scale:
>         * **🔴 BLOCKER:** Tests crashing, build failures, or 0% coverage on critical core logic (e.g., Auth, Payments).
>         * **🟠 CRITICAL:** High-priority logic failing, or coverage < 50% on important features.
>         * **🟡 MAJOR:** Standard test failures, missing mocks, or coverage 50%-80%.
>         * **🔵 MINOR:** Code style, naming conventions, or coverage slightly below threshold (e.g., 79%).
>
>     * *Format:*
>     | Severity | File/Module | Action Required | Estimate |
>     | :--- | :--- | :--- | :--- |
>     | 🔴 BLOCKER | `lib/payment.ts` | Fix crashing test `chargeUser`. Mock DB connection. | 30m |
>     | 🟡 MAJOR | `utils/date.ts` | Increase coverage from 40% to 80%. | 1h |
>
> **Start by reading package.json to detect the framework.**"