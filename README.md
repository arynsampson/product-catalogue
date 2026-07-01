# React Product Catalog

A modern product catalog application built with React that demonstrates core React concepts including state management, component architecture, derived state, and API integration. The main goal for this application was to learn apply basic React concepts.

## Features

* Browse products from the DummyJSON API
* Search products by name
* Filter products by category
* Add and remove favorite products
* View favorite products on a dedicated page
* View individual product details
* Loading, error, and empty states
* Dashboard displaying derived statistics such as:

  * Total products
  * Filtered products
  * Favorite products

## Technologies Used

* React
* Tailwind CSS
* JavaScript (ES6+)
* DummyJSON API

## Concepts Demonstrated

* Component-based architecture
* State management with `useState`
* Side effects and data fetching with `useEffect`
* Props and component communication
* Lifting state up
* Single source of truth
* Derived state
* Conditional rendering
* List rendering and keys
* React Router for navigation
* Loading and error handling
* Responsive layouts with Tailwind CSS

## Key Architectural Decisions

During development, I focused on applying React best practices rather than simply making the application work.

Some of the decisions included:

* Keeping only the minimum required source state.
* Computing derived values instead of storing duplicate state.
* Placing shared state in the nearest common parent component.
* Separating presentation from state management where appropriate.
* Using React Router to separate application pages cleanly.

## Challenges

Some of the challenges during development included:

* Deciding where shared state should live.
* Combining search, category filtering, and favorites without duplicating state.
* Managing loading, error, and empty UI states during asynchronous API requests.
* Keeping components focused on a single responsibility.

## What I Learned

This project strengthened my understanding of:

* React component architecture
* State ownership and data flow
* Derived state versus source state
* Component re-rendering
* Building scalable component structures
* Planning applications before implementation

## Future Improvements

Potential improvements include:

* Product sorting
* Reponsiveness
* Persistent favorites using localStorage
* Pagination or infinite scrolling
* Unit and integration testing
* Migration to TypeScript

## Running the Project

```bash
npm install
npm run dev
```

## API

This project uses the DummyJSON Products API:

https://dummyjson.com/products
