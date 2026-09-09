# gIGNITE — IEEE SPS Kerala Chapter

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red.svg?logo=sanity)](https://www.sanity.io/)
[![IEEE SPS Kerala Chapter](https://img.shields.io/badge/IEEE%20SPS-Kerala%20Chapter-006699.svg)](https://sps.ieee.org/)

**gIGNITE** is the flagship AI innovation initiative and hackathon platform organized by the **IEEE Signal Processing Society (SPS) Kerala Chapter**. This platform serves as the central hub for team registrations, theme exploration, event timeline, stage breakdowns, and live updates.

---

## 🚀 Features

- **⚡ High Performance & Sleek UI**: Built with React 19 and Vite for blazingly fast load times and modern aesthetic styling.
- **🌊 Smooth Scrolling**: Smooth inertia scrolling powered by Lenis.
- **🎯 5 AI Innovation Tracks**: Centralized showcase for hackathon tracks & domain-specific problem statements.
- **📌 Interactive Event Structure**: Detailed breakdown of Stage 1 (Ideation) & Stage 2 (Hackathon / Build) with evaluation rubrics.
- **📝 Team Registration Modal**: Seamless multi-step registration flow connected to Sanity CMS backend.
- **🏆 Prizes & Recognition**: Interactive display of award categories and incentives.
- **👥 Organizing Team & Contacts**: Direct contact details for event leads and coordinators.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **CMS / Backend**: [Sanity.io (`@sanity/client`)](https://www.sanity.io/)
- **Mapping**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **Linting**: [Oxlint](https://oxc.rs/)

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IEEE-SPS-Kerala-Chapter/gIGNITE.git
   cd gIGNITE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or `.env.local`):
   ```env
   VITE_SANITY_PROJECT_ID=your_sanity_project_id
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_TOKEN=your_sanity_api_token
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Builds the optimized production bundle |
| `npm run preview` | Previews the local production build |
| `npm run lint` | Runs Oxlint code diagnostics |

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have suggestions:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 🏛️ Organized By

Hosted and managed by **IEEE SPS Kerala Chapter**.
