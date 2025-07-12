# My React Todo App

This project is a simple, yet robust, Todo application built with React. It serves as a practical demonstration and personal learning exercise focused on mastering **React Hooks, Context API, and useReducer for state management.**

## 🌟 Key Learnings & Project Focus

This application was intentionally designed to deeply explore and implement modern React state management patterns. The core objectives for building this project were:

1.  **React Hooks (`useState`, `useEffect`, Custom Hooks):**
    * **`useState`**: Utilized extensively for local component state (e.g., managing individual input values, toggle states for editing).
    * **`useEffect`**: Employed for side effects, particularly for persisting todo data to `localStorage` (loading on mount, saving on state changes).
    * **Custom Hooks (`useInputState`, `useToggle`):** Demonstrated how to extract and reuse stateful logic across multiple components, promoting cleaner and more modular code.

2.  **React Context API (`createContext`, `useContext`):**
    * **Prop Drilling Solution**: Addressed the problem of "prop drilling" by providing global access to the `todos` state and the `dispatch` function (from `useReducer`).
    * **`TodosContext`**: A dedicated context for the `todos` array, allowing components like `TodoList` to consume the list directly without receiving it as a prop.
    * **`DispatchContext`**: A separate context for the `dispatch` function, enabling components like `Todo` and `TodoForm` to trigger state updates without needing the `dispatch` function to be passed down through many layers. This also leverages the stability of `dispatch` for performance.

3.  **`useReducer` for Complex State Logic:**
    * **Centralized Logic**: Implemented `useReducer` to manage the complex state transitions of the todo list (adding, removing, toggling completion, editing).
    * **Predictable State Updates**: The `todos.reducer.js` file centralizes all state update logic, making the state changes more predictable and testable compared to multiple `useState` calls.
    * **Separation of Concerns**: Clearly separates "what happened" (actions) from "how state changes" (reducer logic).

4.  **Performance Optimization with `React.memo`:**
    * Applied `React.memo` to the `Todo` component to prevent unnecessary re-renders of individual todo items when only one item's data changes, showcasing an important optimization technique in React for list rendering.

## ✨ Features

* **Add Todos:** Easily add new tasks to your list.
* **Delete Todos:** Remove completed or unwanted tasks.
* **Toggle Completion:** Mark tasks as completed or incomplete.
* **Edit Todos:** Modify existing task descriptions.
* **Persistent Storage:** Todos are saved in your browser's local storage, so they persist even after closing the tab.
* **Responsive Design:** Built with Material-UI components for a clean and responsive user interface.

## 🚀 Technologies Used

* **React** (Functional Components, Hooks, Context API, `useReducer`, `React.memo`)
* **Material-UI (MUI)**: For pre-built, accessible, and customizable UI components.
* **UUID**: For generating unique IDs for todo items.
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

## 💻 Installation and Setup

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-github-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
    The application will open in your browser at `http://localhost:3000`.

## 🌐 Deployment

This project is deployed using GitHub Pages.

1.  Ensure you have `gh-pages` installed: `npm install gh-pages --save-dev`
2.  Add the `homepage` field and `predeploy`/`deploy` scripts to your `package.json`:
    ```json
    // ...
    "homepage": "whosedreamisthis.github.io/todo-list",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    },
    // ...
    ```
3.  Deploy the application:
    ```bash
    npm run deploy
    # OR
    yarn deploy
    ```
4.  Configure GitHub Pages in your repository settings to serve from the `gh-pages` branch.

The live application should be available at: `https://whosedreamisthis.github.io/todo-list/`

## 🙏 Contributing

Feel free to fork this repository, make changes, and submit pull requests. Any contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
