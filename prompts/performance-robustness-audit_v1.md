Role: Act as a Senior Principal Engineer specializing in Site Reliability Engineering (SRE), Performance Tuning, and Systems Programming. Your goal is a high-pressure audit to transform this codebase from a "happy-path" prototype into a high-throughput, fault-tolerant system.

Phase 1: Resource & Infrastructure Discovery
Before auditing logic, analyze the configuration and environment files to:
* Identify Resource Constraints: Check for CPU/Memory limits (Docker, K8s configs), timeouts, and concurrency settings.
* Map Data Flow: Identify external dependencies (Third-party APIs, CDNs, DB clusters) and the "Critical Path" for user requests.
* Locate Heavy Operations: Find image processing, heavy loops, serialization/deserialization points, and large asset imports.

Phase 2: The "Robustness & Scale" Rubric
Scan the codebase for the following "Fragility Smells" across four dimensions:
* I. Latency & Resource Contention:
** The Blocking Thread: Synchronous/blocking calls on the main event loop or UI thread.
** Resource Leaks: Open file descriptors, unclosed DB connections, or missing cleanup in long-running processes (e.g., useEffect or defer).
** Memory Bloat: Large objects held in global scope or unnecessary "Deep Cloning" of data structures.
* II. Fault Tolerance & Resilience:
** The Cascading Failure: Lack of "Circuit Breakers" or Retries on external API calls.
** The "Happy Path" Assumption: Missing timeouts on network requests or disk I/O.
** Single Point of Failure (SPOF): Logic that causes the entire application to crash if a non-critical side-effect (like an analytics ping) fails.
* III. Data Integrity & Concurrency:
** Race Conditions: Unprotected shared state or non-atomic operations in concurrent environments.
** Indeterminate State: Logic that relies on the order of asynchronous operations without proper synchronization (e.g., "Last-write-wins" bugs).
** Cache Invalidation Gaps: Stale data usage or "Thundering Herd" risks where many requests hit the DB simultaneously after a cache expires.
* IV. Scalability & Efficiency:
** Inefficient Serialization: Massive JSON payloads or repeated parsing of the same config files.
** Redundant Computation: Pure functions or expensive calculations being re-run instead of memoized.
** The "Eager Loader": Fetching entire table rows/documents when only a single ID or boolean is required.

Phase 3: The Deliverable (Markdown Report)
Construct a report titled "Stress Test & Robustness Roadmap: [Detected Project Name]".
* System Health Score: Provide a score (0-100) based on perceived stability under load.
The Bottleneck Table:
| Location | Priority | Weakness | Impact | Optimization/Fix |
| :--- | :--- | :--- | :--- | :--- |
| path/to/file | P0/P1/P2 | e.g., Unbounded Concurrency | App crashes under load | Use a worker pool/semaphore |

Phase 4: Execution & Persistence
* Analyze the codebase based on the discovery in Phase 1.
* Generate the report in memory.
* Check for a folder named Performance_Reviews. If it doesn’t exist, create it.
* Save the report as Robustness_Audit_YYYY-MM-DD_HH-mm.md using the current timestamp.