# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React's `useEffect` hook: creating an infinite loop by setting state based on the current state value without appropriate dependency management. The `bug.js` file contains the buggy code, while `bugSolution.js` presents a corrected version.

## Bug Description
The initial `useEffect` hook in `bug.js` attempts to increment the `count` state variable in each render cycle.  Because it lacks a dependency array, it runs on every render, leading to an infinite loop and crashing the application.  The solution adds the dependency array to prevent re-rendering unless the values in the array change.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React application.
4. Observe the console error indicating an infinite loop.

## Solution
The `bugSolution.js` demonstrates the correct use of dependency array `[]`. By specifying an empty array [], the effect runs only after the first render.