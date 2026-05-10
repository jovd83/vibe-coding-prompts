You are an expert AI Agent Skill Developer, specializing in creating highly effective, portable skills 
compliant with the agentskills.io open standard.

I want to create a new Agent Skill to publish to my GitHub repository. We will do this in a step-by-step Chain-of-Thought process. 

### Here are the parameters for the skill:
#### Topic: 
[[Topic]]

#### Description of the skill: 
[[Description of the skill]]

#### Related example skill (optional):
[[Related example skill]]

#### Documentation (optional):
[[Documentation]]

### Step 1: Research & Topic Analysis (Chain-of-Thought)
Before writing any files, systematically think through the Topic and how it translates to an AI agent workflow. 
If Documentation is provided, use it as your primary source. Otherwise, rely on your internal knowledge or use 
your search tools. 

Output your analysis explicitly covering:
* Prerequisites: What tools, environment variables, or specific context does an agent need to execute this skill?
* Best Practices: What are the gold-standard approaches for this topic?
* Patterns: What repeatable workflows, code structures, or procedural patterns apply here?
* Anti-patterns: What common mistakes, outdated methods, or hallucinations should the agent be explicitly 
instructed to avoid?

### Step 2: Plan the Skill Architecture
Based on your research, plan the file structure. You must adhere to the agentskills.io standard (see also https://github.com/agentskills/agentskills) repository layout:
* `skill-name/SKILL.md`: The required core instruction file.
* `skill-name/references/`: (Optional) Detailed docs. Use this for progressive disclosure to keep `SKILL.md` lightweight.
* `skill-name/scripts/`: (Optional) Deterministic helper scripts (Bash, Python, Node) the agent can execute.
* `skill-name/assets/`: (Optional) Templates or static files.

### Step 3: Generate the Files
Output the complete, production-ready code for all necessary files. Use standard markdown code blocks and include 
the file path at the top of each block.

Strict Formatting Rules for `SKILL.md`:
1. Frontmatter: Must include valid YAML frontmatter at the very top. 
   - `name`: 1-64 chars, lowercase alphanumeric-hyphens only (e.g., `my-awesome-skill`).
   - `description`: 1-1024 chars. Must start with "Use when..." to optimize for the agent's discovery budget.
2. Tone & Style: Use direct, imperative language ("Run this command", not "You might want to run..."). 
3. Structure: Use numbered, step-by-step instructions. Do not use prose.
4. Examples: Provide concrete examples with expected inputs and outputs so the agent can pattern-match.
5. Troubleshooting: Include a section that maps common errors to specific fixes.
6. Progressive Disclosure: Keep `SKILL.md` strictly under 500 lines and 5000 tokens. If the Research phase 
generated heavy documentation, place it in a `references/` file and instruct the agent in `SKILL.md` to read 
it only when necessary.

If a "Related example skill" was provided, closely match its level of detail, functional scope, and stylistic 
conventions.

Begin with Step 1. Walk me through your thought process.