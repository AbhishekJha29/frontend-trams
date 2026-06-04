# Modern Agency Landing Page

A visually stunning, high-performance agency landing page built with **React 19**, **Vite**, and **Tailwind CSS**. This project features smooth animations, pixel-perfect layouts, and a modern aesthetic designed to showcase brand progress and collaborative partnerships.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Syne & Space Grotesk (Custom fonts)

## ✨ Key Features

- **Responsive Design:** Optimized for all screen sizes, from mobile to ultra-wide displays.
- **Smooth Animations:** Entrance animations and scroll-triggered transitions using Framer Motion.
- **Dynamic UI Components:**
  - **Modern Navbar:** Fixed header with smooth navigation.
  - **Hero Section:** Impactful first impression with custom decorative elements.
  - **About Section:** Multi-row layout with unique "curved line" decorations and radial gradients.
  - **Services Section:** Interactive hover-states and custom SVG iconography.
  - **Testimonials:** "Social proof" section with scattered avatar overlays and a featured client card.
  - **Footer:** Integrated newsletter signup and organized link grid.
- **Custom Aesthetics:** Unique color palette (`brand-yellow`, `brand-green`, `brand-pink`, `brand-bg`) and stylized shapes for a premium look.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd new-folder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── AboutSection.jsx # Detailed about section with animations
│   ├── Hero.jsx         # Main splash screen
│   ├── Navbar.jsx       # Navigation header
│   ├── ServicesSection.jsx # Services list and testimonials
│   └── footer.jsx       # Footer and Newsletter components
├── assets/              # Static images and icons
├── App.jsx              # Main application entry point
├── main.jsx             # React DOM rendering
└── index.css            # Global styles and Tailwind directives
```

## 🎨 Customization

Colors and themes can be customized in the `tailwind.config.js` or through the modern Tailwind v4 `@theme` directives in `src/index.css`.

## 📄 License

This project is private and intended for demonstration purposes.
