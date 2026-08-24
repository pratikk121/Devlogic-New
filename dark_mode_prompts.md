# Dark Mode Redesign Prompts

Use the **`design-taste-frontend`**, **`redesign-existing-projects`**, and **`impeccable`** skills to execute the following steps in sequence:

---

## Step 1: Implement Theme State & Toggle Button
Add a theme state hook and a toggle switch in the navbar to handle theme switching:
*   **Target:** `src/components/Navbar.tsx` & `src/App.tsx`
*   **Prompt:** 
    > Add a theme state toggle function in `App.tsx` that adds/removes the `"dark"` class on `document.documentElement` and stores the choice (`"dark"` or `"light"`) in `localStorage` (defaulting to `"light"`). Pass this state down to `Navbar.tsx` and render a modern, accessible theme switcher button (using Lucide `Sun` and `Moon` icons) in the desktop utility row and mobile drawer. Ensure the button supports keyboard focus ring indicators.

---

## Step 2: Configure Global Dark Mode Styles
Configure base background, text, and border variable tokens inside Tailwind and CSS:
*   **Target:** `src/index.css`
*   **Prompt:** 
    > Define custom dark-theme overrides for CSS variables. Make the background deep dark slate (`#090d16`) and configure cards/borders to use matching subtle dark slate borders (`#131e35`). Ensure core scrollbars and layout outlines update when the `dark` selector is active on the HTML tag.

---

## Step 3: Dark Mode Component Overhauls
Audit and refactor components to support responsive dark mode states:
*   **Target:** All files in `src/components/` (specifically `Hero.tsx`, `ServicesSection.tsx`, `FeaturedWorkSection.tsx`, `AiAutomationSection.tsx`, `ProjectEstimatorModal.tsx`, `ClientPortalModal.tsx`)
*   **Prompt:** 
    > Add `dark:` variant classes to all UI cards, headers, section backgrounds, text labels, and overlay dialog cards. Ensure dark mode transitions are smooth (`transition-colors duration-250`), contrasts match WCAG specifications, and the interactive simulator logs and architecture modals feature a rich, high-end "midnight dashboard" look.
