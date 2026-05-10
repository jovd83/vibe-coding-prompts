Generate a comprehensive Harness Engineering Analysis report for my agent ecosystem.

### What to analyze

Read the full skill registry at:
  C:\Users\jochi\.agents\skills\skill-dispatcher\registry\SKILL_REGISTRY.md

This file is the single source of truth for all active skills, their capabilities,
accepted intents, input/output artifacts, risk levels, and stack tags.

### Theoretical framework

The report must be grounded in the Harness Engineering 101 framework
(https://aidailybrief.beehiiv.com/p/harness-engineering-101).

Core thesis: **a coding agent = AI model + a harness**.

Include these concepts in the Theoretical Foundation section:

1. **The three eras** (table format):
   - 2023–2024: Prompt Engineering — "How do I talk to the model?"
   - 2025: Context Engineering — "What does the model know?"
   - 2026: Harness Engineering — "What can the model do?"

2. **The biological analogies** (table format):
   - 🧠 Brain (The Model) — reasoning and intelligence
   - 👁️ Eyes (Observation) — web search, knowledge graphs, MCPs, API docs
   - 👐 Hands (Execution) — bash, file writing, sandboxed code execution
   - 💾 Memory (Persistence) — memory files, shared state, conventions

3. **The three architectural layers** (Etna Labs):
   - Information Layer — memory, context management, tools and skills
   - Execution Layer — orchestration, coordination, guardrails, infrastructure
   - Feedback Layer — evaluation, verification, tracing, observability ("the nervous system")

4. **Important**: The biological analogies and the architectural layers are
   complementary but NOT identical. "Eyes" (observation) maps to the Information
   Layer. The Feedback Layer is the "Nervous System" — it senses whether output
   was correct, not what the world looks like. Call this out explicitly.

5. **The General Harness Loop**:
   User Input → Context Engineering → Model (Brain) → Tools (Hands) → Loop until done → Result

6. **The Great Convergence**: All AI products converge on the same architecture.
   Differentiators are distribution, trusted workflow positioning, proprietary
   context, and shortest path from observation to improvement.

7. **Evidence**: Blitzy scored 66.5% on SWE-Bench Pro vs GPT-5.4's 57.7% —
   driven by harness quality (deep knowledge graph = better "eyes"), not model
   quality. Cite Anthropic's "context anxiety" example: harness assumptions go
   stale as models improve.

### Classification rules

Classify EVERY skill from the registry into exactly one of three layers.
For each skill, provide a one-sentence reasoning explaining WHY it belongs there.
Use these litmus tests:

**Information Layer (💾 The Memory + The Eyes)**:
- Does this skill provide context BEFORE execution begins?
- Does it retrieve, persist, or refine knowledge rather than produce deliverables?
- Litmus: removing it degrades QUALITY, not capability.

**Execution Layer (👐 The Hands)**:
- Does this skill produce user-facing artifacts (code, documents, media)?
- Does it write files, scaffold projects, or run tests?
- Litmus: removing it removes a CAPABILITY entirely.

**Feedback Layer (🧬 The Nervous System)**:
- Does this skill evaluate, audit, or review work produced by others?
- Is its primary output a finding, score, or recommendation rather than a deliverable?
- Litmus: removing it removes a QUALITY GATE.

For border cases (skills that span layers), classify by PRIMARY function and list
the secondary behavior in the "Dual-Layer Skills" analysis.

### Report structure

Use this exact structure:

1. **Theoretical Foundation** (as described above)
2. **The Ecosystem** (total skill count, dispatcher role)
3. **Classification Rationale** — organized as:
   - 🧠 The Brain (not a skill — explain why)
   - 💾 Information Layer (The Memory + The Eyes) — with reasoning table
   - 👐 Execution Layer (The Hands) — grouped into subcategories:
     - Engineering & SDLC
     - UI & Design
     - Automation & Testing
     - Content & Docs
     - System Meta
   - 🧬 Feedback Layer (The Nervous System) — grouped into subcategories:
     - Strategic Analysis
     - Governance & Security
     - Quality Reviews
     - Contract & Reporting
4. **Emergent Patterns** — analyze and quantify:
   - Feedback-to-Execution ratio
   - Meta-Cognition Loop (self-improvement skills)
   - Dual-Layer Skills (table: skill / primary layer / secondary behavior)
   - Information Layer thickness (% of total skills)
   - Uncovered execution domains (hands without nerves)
5. **Architectural Diagram** — single Mermaid flowchart TB containing ALL skills as
   individual rectangles, organized in grid rosters within nested subgraphs.
6. **Structural Assessment** — Strengths, Risks, and Framework Alignment.

### Diagram requirements

The diagram MUST:
- Use `flowchart TB` (not `graph`)
- Place ALL skills on ONE diagram (no splitting)
- Use grid rosters (2x2, 3x3) with `---` for horizontal and `~~~` for vertical layout
- Use Safe IDs for subgraphs: `subgraph ID ["Display Label"]`
- Use individual `style` directives (NOT comma-separated)
- Use these exact color classes:

  classDef brain fill:#faf5ff,stroke:#7b1fa2,stroke-width:2px,color:#4a148c;
  classDef info fill:#fffdeb,stroke:#fbc02d,stroke-width:2px,color:#f57f17;
  classDef exec fill:#f5faff,stroke:#1976d2,stroke-width:2px,color:#0d47a1;
  classDef check fill:#fff5f5,stroke:#c2185b,stroke-width:2px,color:#880e4f;

- Use these exact block fills:
  style BRAIN fill:#faf5ff,stroke:#7b1fa2,stroke-width:2px
  style MEMORY fill:#fffdeb,stroke:#fbc02d,stroke-width:2px
  style HANDS fill:#f5faff,stroke:#1976d2,stroke-width:2px
  style NERVES fill:#fff5f5,stroke:#c2185b,stroke-width:2px

- All nested subgraphs: style X fill:#ffffff,stroke-dasharray: 5 5

- Use these block labels:
  BRAIN  → "🧠 AI Model / LLM (The brain)"
  MEMORY → "💾 Information Layer (The memory + the eyes)"
  HANDS  → "👐 Execution Layer (The hands)"
  NERVES → "🧬 Feedback Layer (The nervous system)"

- Render the diagram to SVG using the pretty-mermaid skill with tokyo-night theme:
  node scripts/render.mjs --input harness_diagram.mmd --output harness_diagram.svg --theme tokyo-night

### Telemetry

After completing the report, log the following dispatch events:
- --skill diagram-generator --intent document_system_visually --reason "Harness Engineering Analysis update"
- --skill skill-dispatcher --intent review_automation_quality --reason "Full Skill Registry Audit for Harness Mapping"

### Output

Save the report as an artifact named `harness_engineering_analysis.md`.
Embed the rendered SVG at the top of the report.
```
