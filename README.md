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

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Push to `main` branch - deployment happens automatically

Your site will be available at `https://<your-username>.github.io/district-insights-hub/`