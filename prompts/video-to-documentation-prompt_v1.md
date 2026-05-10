**[INPUT SETTINGS]**

* **SOURCE:** [[source]] (Upload your video file here OR paste the YouTube URL)
* **DOC_TYPE:** [[type_of_doc]] (e.g., User Manual, Step-by-Step Tutorial, SOP)
* **EXTENSION:** [[extension]] (e.g., .docx, .pdf, .html)
* **TONE:** Professional, clear, and encouraging.

**[ROLE]**
Act as a Senior Technical Writer and Software Education Specialist. You are an expert at converting video workflows into professional written documentation.

**[GOAL]**
Analyze the provided `[SOURCE]` video and transform it into a high-quality `[DOC_TYPE]` saved as a `[EXTENSION]` file. The final output must be ready for me to download or view immediately.

**[PROCESS - DO THIS STEP BY STEP]**

**1. MULTIMODAL ANALYSIS**

* **Visuals:** Scan the video for UI elements (buttons, menus, fields). Identify exactly what the user clicks and types.
* **Audio:** Transcribe the narration to understand the "why" and "context" behind the actions.
* **Structure:** Break the video down into logical Chapters/Sections based on the workflow (e.g., "Login," "Configuration," "Exporting").

**2. DRAFTING THE CONTENT**
Write the content using the following structure:

* **Title:** Action-oriented title.
* **Overview:** A short paragraph explaining the goal of this workflow.
* **Prerequisites:** Bullet points of what is needed before starting.
* **The Steps (The Core):**
* Use numbered lists for sequential actions.
* **Bold** all UI elements (e.g., "Click **Save**").
* **Screenshot Placeholders:** Since you cannot always extract high-res images, insert a placeholder in this exact format: `> [IMAGE @ 01:23: Description of screen]` so I can snap it later.
* **Tip/Warning Boxes:** If the user mentions a common mistake or pro-tip in the video, format it as a distinct note.



**3. FILE GENERATION (CRITICAL)**

* **If [EXTENSION] is .HTML:** Generate a single HTML file with embedded CSS for a clean, modern "Knowledge Base" look. Use a sticky table of contents and responsive design. Render it so I can download it or view it as an Artifact.
* **If [EXTENSION] is .DOCX or .PDF:** **DO NOT** just output text. You must write and **EXECUTE** a Python script (using `python-docx` or `fpdf`) to generate the actual binary file. Structure the document with real Headers (Level 1, 2), Bullet points, and styling. Provide the link to download the generated file.

**[EXECUTE NOW]**

---

### Why this prompt works better for you

1. **The "Execute" Command:** By explicitly telling the AI (specifically in the `.DOCX` / `.PDF` section) to *execute a Python script*, you force the AI to use its internal computer. It will quietly write code in the background, run it, and pop out a "Download File" link.
2. **Screenshot Placeholders:** The biggest pain point with AI video analysis is that it can't "snip" a high-quality image and paste it into a Word doc easily.
* This prompt forces a **Time-stamped Placeholder** (e.g., `> [IMAGE @ 02:15]`).
* **Pro Tip:** When you open the Word doc, you can just scrub your video to `02:15`, take a screenshot, and paste it right over that line.


3. **Visual Parsing:** The prompt asks the AI to bold UI elements (like **"Submit"**). This mimics tools like `guide.com` which highlight where to click.