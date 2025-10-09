# 🚀 Spacestagram

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![NASA API](https://img.shields.io/badge/NASA-APOD%20API-0B3D91?logo=nasa&logoColor=white)](https://api.nasa.gov/)
[![Deploy](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github)](https://mudassirmirza.github.io/Spacestagram/)
[![Built with Create React App](https://img.shields.io/badge/Create%20React%20App-2025-blue?logo=react)](https://create-react-app.dev/)

**Live Demo:** [mudassirmirza.github.io/Spacestagram](https://mudassirmirza.github.io/Spacestagram)

Spacestagram is a React web app that displays NASA’s Astronomy Picture of the Day (APOD) with an elegant, responsive interface.

Scroll infinitely through breathtaking space photography, zoom into images, and learn about the universe — one picture at a time.

---

## ✨ Features

- **NASA API Integration:** Fetches real-time Astronomy Picture of the Day data.
- **Infinite Scrolling:** Seamlessly loads more images using a custom hook.
- **Responsive Design:** Optimized for desktop, tablet, and mobile screens.
- **Image Zoom:** Tap or click to enlarge any photo.
- **Modern React Architecture:** Built with functional components, hooks, and reusable UI logic.

---

## 🛠️ Tech Stack

| Category   | Tools                                     |
| ---------- | ----------------------------------------- |
| Frontend   | React (Functional Components, Hooks)      |
| Styling    | CSS3 / Flexbox / Responsive Media Queries |
| API        | NASA Astronomy Picture of the Day (APOD)  |
| Build Tool | Create React App                          |
| Hosting    | GitHub Pages                              |

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/mudassirmirza/Spacestagram.git
   cd Spacestagram
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser
4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🧩 Project Structure

    src/
    ├── components/
    │ ├── ImageCard.js # Displays  each APOD image
    │ ├── ImageGrid.js # Renders a grid of images
    │ └── Loader.js # Handles infinite scroll loading state
    ├── hooks/
    │ ├── useInfiniteScroll.js # Custom hook for lazy loading
    │ └── useFetchApod.js # Custom hook for NASA API calls
    ├── App.js
    └── index.js

---

## 🚀 Future Improvements

- Add "like" and "save" functionality

- Support for date filtering or search by topic

- Dark/light mode toggle

- Offline caching for previously loaded images

---

## 👨‍💻 Author

**Mudassir Mirza**

Full Stack Developer
