# Devlogic Redesign Prompts Playbook

Follow these prompts in order to guide the redesign process of the Devlogic Website step-by-step. 

---

### Step 1: run `/critique`
Copy and paste this prompt first to evaluate the site and choose a premium visual identity:

```text
Please run the /critique command on our codebase. Evaluate the visual pacing, grid structures, and interactive sections. Let's decide on a clean visual theme (e.g., editorial minimalist vs high-end developer studio) and create an implementation plan for a visual overhaul.
```

---

### Step 2: run `/bolder` (or `/simplify`)
Based on the critique, choose to make it bolder or simpler. Copy and paste this prompt next:

```text
Now, use the redesign-existing-projects and design-taste-frontend skills to run /bolder (or /simplify if you want it cleaner). Overhaul the symmetrical card grids in ServicesSection.tsx and FeaturedWorkSection.tsx. Make the layout feel organic, staggered, and premium, completely removing the AI-template look.
```

---

### Step 3: run `/delight`
Inject micro-animations and physics-based interactions. Copy and paste this prompt:

```text
Let's use the design-taste-frontend and emil-design-eng skills to run /delight. Add premium micro-interactions, smooth hover transitions on active cards, and hardware-accelerated transforms to the interactive widgets (estimator modal, client portal chat, and AI simulation console).
```

---

### Step 4: run `/polish`
Run the final polish pass to fix details. Copy and paste this prompt:

```text
Let's run the /polish command to execute a final visual alignment pass. Check margins, padding consistency, uniform borders, font weights, and verify that the build compiles successfully.
```
