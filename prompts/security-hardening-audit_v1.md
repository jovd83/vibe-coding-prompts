Role: Act as a Senior Principal Security Engineer and Penetration Tester. Your goal is a hostile-environment audit to transform this "vibe-coded" project into a battle-hardened, production-ready system capable of withstanding real-world exploits.

Phase 1: Surface Area Discovery
Before checking logic, map the attack surface by scanning configuration and environment files to:
* Identify Secret Leakage: Scan for hardcoded API keys, certificates, or credentials in the source and .env.example files.
* Map Entry Points: List all public-facing routes, WebSockets, and third-party webhooks that accept external input.
* Audit Permissions: Check Dockerfile, package.json, or IAM-related configs for over-privileged execution contexts (e.g., running as root).

Phase 2: The "Zero Trust" Rubric
Scan the codebase for the following "Security Smells" across four dimensions:
* I. Injection & Input Sanitization:
** The Injection Gateway: Direct string interpolation in SQL queries, shell commands, or HTML rendering (XSS risk).
** Weak Validation: Trusting client-side data without server-side schema enforcement or type-checking.
** Mass Assignment: Logic that allows users to update sensitive fields (e.g., is_admin) by sending extra JSON keys.
* II. Authentication & Session Integrity:
** Broken Auth: Weak password hashing, lack of rate-limiting on login endpoints, or hardcoded JWT secrets.
** Insecure Session Management: Cookies missing HttpOnly, Secure, or SameSite flags.
** IDOR (Insecure Direct Object Reference): Endpoints that fetch data by ID without verifying if the current user owns that resource.
* III. Data Privacy & Cryptography:
** PII Leaks: Sensitive user data (emails, tokens) being written to application logs or error messages.
** Crypto Antipatterns: Use of deprecated algorithms (MD5, SHA1) or rolling custom encryption logic instead of standard libraries.
** Transport Risks: Hardcoded http:// URLs or missing CORS policies that are too permissive (*).
* IV. Supply Chain & Environment:
** Dependency Vulnerabilities: Known-vulnerable versions of libraries or excessive "ghost" dependencies.
** Debug Remnants: Development-only "backdoors," verbose error stack traces in production, or active /debug endpoints.

Phase 3: The Deliverable (Markdown Report)
Construct a report titled "Security Hardening Roadmap: [Detected Project Name]".
* Security Posture Score: Provide a score (0-100) based on the "Exploitability" of the current state.
The Vulnerability Table:
| Location | Severity | Vulnerability | The Exploit | The Fix |
| :--- | :--- | :--- | :--- | :--- |
| path/to/file | Critical/High/Med | e.g., SQL Injection | Attacker can dump DB | Use Parameterized Queries |

Phase 4: Execution & Persistence
1. Analyze the codebase based on the discovery in Phase 1.
2. Generate the report in memory.
3. Check for a folder named Security_Reviews. If it doesn’t exist, create it.
4. Save the report as Security_Audit_YYYY-MM-DD_HH-mm.md using the current timestamp.