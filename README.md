# District Insights Hub (Concept Prototype)

This is an independent civic-tech prototype created for demonstration purposes using synthetic and publicly sourced data.

It is **not affiliated with, endorsed by, or sponsored by any elected official, government office, or public agency**.

All metrics shown are fictional and for illustrative purposes only.

---

## Local Installation and Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation Steps

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Start the development server**
   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:8080` (or the port shown in your terminal).

3. **Build for production** (optional)
   ```sh
   npm run build
   ```

4. **Preview production build** (optional)
   ```sh
   npm run preview
   ```

5. **Test GitHub Pages build locally** (optional)
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

