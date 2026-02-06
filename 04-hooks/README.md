# React Hooks Practice Project

This project is a React Hooks learning playground built using **React, Vite, React Router, and Tailwind CSS**.  
It demonstrates core React hooks with **practical, real-world examples** and a clean, responsive UI.  
The focus of this project is to understand **when, why, and how** to use each hook correctly.

## Features

- useState
  - Counter example
  - Object state handling
  - Dependent dropdowns (Country → State → City)
  - Controlled form inputs

- useReducer
  - Todo List example
  - Add and remove todos using reducer actions
  - Demonstrates predictable state management for complex logic

- useEffect
  - API data fetching with loading and error handling
  - Dynamic API switching (Users / Posts / Comments)
  - Auto-save draft example using localStorage
  - Cleanup with timers and event listeners
  - Window resize listener example

- useContext
  - Global theme management (Light / Dark mode)
  - Access theme across multiple components
  - Avoids prop drilling

- useRef
  - Timer example (start / stop / reset)
  - DOM manipulation
  - Scroll-to-element example

- Performance Optimization
  - useMemo to avoid expensive recalculations
  - useCallback with React.memo to prevent unnecessary re-renders

- React Router
  - Nested routing using createBrowserRouter
  - Shared layout with Navbar and Outlet
  - Clean navigation between hook examples

- Tailwind CSS
  - Responsive, mobile-first design
  - Global theming support
  - Clean and reusable UI components

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── Home.jsx
│ ├── State/
│ │ ├── UseState.jsx
│ │ ├── UseReducer.jsx
│ ├── SideEffect/
│ │ ├── Example1.jsx // API Fetch
│ │ ├── Example2.jsx // Auto Save
│ │ ├── Example3.jsx // Resize Listener
│ ├── Dom_ref/
│ │ ├── UseRef.jsx
│ ├── Performance/
│ │ ├── UseMemo.jsx
│ │ ├── UseCallback.jsx
├── context/
│ ├── ThemeContext.jsx
│ ├── useTheme.js
├── App.jsx
├── main.jsx
├── index.css

## Learning Goals

- Understand how React hooks work internally
- Learn when to use useState vs useReducer
- Manage complex state using the reducer pattern
- Handle side effects safely with proper cleanup
- Optimize performance using memoization
- Avoid prop drilling using Context API
- Build responsive layouts using Tailwind CSS

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS

## Run Locally

npm install  
npm run dev

## Notes

This project is designed to grow incrementally as more hooks and patterns are learned.  
Each example focuses on **clarity, best practices, and real-world usage** rather than shortcuts.
