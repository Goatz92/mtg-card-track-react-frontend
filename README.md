# Magic: The Gathering Collection Tracker (Frontend)

A React + Vite application for browsing and managing a personal Magic: The Gathering card collection. Users can search for cards via the Scryfall API, fetch random cards, register/login via JWT, and maintain a private collection.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo
![App Screenshot](public/demo-screenshot.png)

## Features
- Search for cards by name
- View a random card
- User registration and login (JWT)
- Persistent session via localStorage and Axios interceptors
- View and manage personal collection
- Light and dark theme support
- Responsive design with React Bootstrap

## Prerequisites
- Node.js >= 16
- npm or yarn
- Backend API running locally (see `mtg-collection-js-backend`)

## Getting Started
1. Clone this repo:
   ```bash
   git clone https://github.com/Goatz92/mtg-card-track-react-frontend.git
   cd mtg-card-track-react-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```
3. Create a `.env` file at project root:
   ```ini
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:5173 in your browser.

## Environment Variables
- `VITE_API_URL` — Base URL for backend API (e.g. `http://localhost:5000/api`)

## Available Scripts
- `npm run dev` — Start development server
- `npm run build` — Create production build
- `npm run preview` — Preview production build locally

## Tech Stack
- React 18
- Vite
- Axios
- React Bootstrap
- React Context API

## Architecture
- **AuthContext**: Centralized auth state and methods (login, logout)
- **services/api.js**: Axios client for backend
- **components**: Reusable UI (SearchBar, CardList, Card)
- **App.jsx**: Main UI and business logic

## Folder Structure
```plaintext
mtg-card-track-react-frontend/
├ public/
│  └─ vite.svg, demo-screenshot.png, index.html
├ src/
│  ├ components/  # Card, CardList, SearchBar
│  ├ context/     # AuthContext
│  ├ services/    # api.js
│  ├ App.jsx      # Root component
│  └ main.jsx     # Entry point
├ .env
├ package.json
└ vite.config.js
```

## Contributing
Contributions welcome! Please open issues or submit PRs for improvements.
