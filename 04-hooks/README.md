# React Hooks Practice Project

This project is a React Hooks learning playground built using React, Vite, and Tailwind CSS.  
It demonstrates core React hooks with small, real-world examples and a responsive UI.

## Features

- useState
  - Counter example
  - Object state handling
  - Dependent dropdowns (Country → State → City)

- useReducer
  - Todo List example
  - Add and remove todos using reducer actions
  - Demonstrates predictable state management for complex logic

- useEffect
  - API data fetching
  - Loading state handling
  - Dynamic API switching (Users / Posts / Comments)

- React Router
  - Nested routing using createBrowserRouter
  - Shared layout with Navbar and Outlet

- Tailwind CSS
  - Responsive, mobile-first design
  - Clean and reusable UI components

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── Home.jsx
│ ├── UseState.jsx
│ ├── UseReducer.jsx // Todo List (Add / Remove)
│ ├── UseEffect.jsx
├── App.jsx
├── main.jsx
├── index.css

## Learning Goals

- Understand how React hooks work
- Learn when to use useState vs useReducer
- Manage complex state using reducer pattern
- Handle side effects correctly using useEffect
- Build responsive layouts with Tailwind CSS

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS

## Future Plans

- useMemo
- useCallback
- useContext
- Custom Hooks
- Form validation examples

## Run Locally

npm install  
npm run dev

## Notes

This project is designed to grow as more hooks are added in the future.
