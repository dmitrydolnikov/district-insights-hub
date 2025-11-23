# District Insights Hub (Concept Prototype)

This is an independent civic-tech prototype created for demonstration purposes using synthetic and publicly sourced data.

It is **not affiliated with, endorsed by, or sponsored by any elected official, government office, or public agency**.

All metrics shown are fictional and for illustrative purposes only.

---

## Local Installation and Setup

### Prerequisites

- Node.js (v18 or higher recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm (comes with Node.js)
#### Windows users:
Install Node.js (LTS version) for Windows
Download from official source: https://nodejs.org/en/download/prebuilt-installer

### Installation Steps
Choose:
* Windows Installer (.msi)
* LTS version (20.x or 18.x is fine)

During installation:

✔ Important: Make sure these boxes are checked:
* Add to PATH
* Install npm package manager

**Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd district-insights-hub
   ```
 **Install dependencies**
   ```sh
   npm install
   ```
**Start the development server**
   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in your terminal).

**Build for production** (optional)
   ```sh
   npm run build
   ```
**Preview production build** (optional)
   ```sh
   npm run preview
   ```

**Test GitHub Pages build locally** (optional)
   ```sh
   # On Unix/Mac/Linux:
   GITHUB_PAGES=true npm run build
   npm run preview
   
   # On Windows PowerShell:
   $env:GITHUB_PAGES="true"; npm run build
   npm run preview
   ```

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Recharts** - Charting library for data visualization

---

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push to main branch:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
     - Build your project when you push to `main` or `master` branch
     - Deploy the built files to GitHub Pages
   - You can also manually trigger deployment from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

3. **Your site will be available at:**
   - `https://<your-username>.github.io/district-insights-hub/`
   - Or `https://<your-org>.github.io/district-insights-hub/` if using an organization

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```sh
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - You can use the `gh-pages` package or manually push the `dist` folder to a `gh-pages` branch
   - Or use GitHub CLI: `gh pages deploy dist`

### Important Notes

- The base path is configured as `/district-insights-hub/` for project sites
- If deploying to a user/organization site (root domain), update `vite.config.ts` to set `base: "/"`
- The first deployment may take a few minutes. Subsequent deployments are faster
- Check the **Actions** tab in your repository to monitor deployment status