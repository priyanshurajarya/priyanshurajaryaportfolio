# Priyanshu Raj Arya — Portfolio

A single-page portfolio styled like a code editor: the nav bar looks like open
file tabs (`summary.md`, `skills.json`, `projects/`), and switching tabs is
handled by plain JavaScript — no page reloads, no frameworks.

## Files
- `index.html` — all your content lives here
- `style.css` — all colors, fonts, spacing, layout
- `script.js` — tab switching + a one-time typing animation on the hero name

## Everything you need to edit
Search `index.html` for the comment `EDIT ME` — every spot that needs your
real content is marked. In order of appearance:

1. **`<title>` and meta description** (top of `<head>`)
2. **Hero name / role line** — `#summary`
3. **Bio paragraph** — write 2–3 sentences in your own voice
4. **Quick facts grid** — education, college, location, focus area
5. **Resume link** — point it at a hosted PDF, or delete the `<a class="resume-link">` line
6. **Skills tab** — swap the skill names, and adjust each bar's
   `style="width:__%"` to match your own confidence level
7. **Projects tab** — duplicate an `<article class="project">` block per
   project; fill in title, description, tags, and links
8. **Footer contact links** — your real email, GitHub, LinkedIn

To change the color palette, edit the variables at the top of `style.css`
under `:root { ... }` — every color on the page is driven from those ~8 lines.

## Running it locally
Just open `index.html` in a browser — no build step, no server required.

## Deploying to GitHub Pages
1. Create a new GitHub repo, e.g. `priyanshu-portfolio`.
2. Push these three files (`index.html`, `style.css`, `script.js`) to the
   repo's root (or to a `docs/` folder if you prefer).
3. On GitHub: **Settings → Pages → Source** → select the branch (usually
   `main`) and the folder (`/root` or `/docs`).
4. Save. GitHub gives you a URL like
   `https://yourusername.github.io/priyanshu-portfolio/` within a minute or two.
5. Every time you push a change to that branch, the live site updates
   automatically.
