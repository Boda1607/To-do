# 📝 To-Do 

This is a modern, responsive, and feature-rich To-Do web application designed to help you manage your tasks efficiently. It comes with PWA (Progressive Web App) capabilities, allowing for an app-like experience and offline functionality.

## ✨ Features

* **Task Management:**

    * Add new tasks with names, descriptions, deadlines, and assigned categories.

    * Mark tasks as complete/incomplete.

    * Edit existing tasks.

    * Delete tasks.

    * Search tasks by name, category, or description.

    * Sort tasks by creation date, due date, or alphabetically.

* **Category Management:**

    * Create custom categories with unique names, emojis, and colors.

    * Edit category details (name, emoji, color).

    * Delete categories.

    * Reorder categories using drag-and-drop.

* **Interactive Charts:**

    * Visualize your productivity with multiple charts:

        * Monthly Completed Tasks (Bar Chart)

        * Task Completion Status (Pie Chart)

        * Task Category Distribution (Doughnut Chart)

        * Weekly Active Tasks (Line Chart)

        * Monthly Completed vs Non-Completed Tasks (Area Chart)

* **Theming:**

    * Automatic theme detection based on system preferences (light/dark mode).

    * Manual toggle button to switch between light and dark themes.

* **Progressive Web App (PWA):**

    * Installable to your home screen for quick access.

    * Offline support, allowing the app to function even without an internet connection.

    * Optimized for mobile and desktop viewing.

* **Intuitive UI:**

    * Clean, modern design with a user-friendly navigation bar.

    * Animated "Add Task" button with pulse effects.

    * Smooth transitions and interactive elements.

## 📁 Project Structure


.
├── index.html             # Main application HTML with core UI and inline JavaScript logic.
├── style.css              # Contains all the styling for the application, including theme variables and responsiveness.
├── script.js              # Additional JavaScript for theme toggling and general app functionality.
├── service-worker.js      # Handles PWA features like caching for offline access.
├── manifest-light.json    # Web manifest for light mode PWA configuration.
├── manifest-dark.json     # Web manifest for dark mode PWA configuration.
├── icon-light.png         # Application icon for light theme.
├── icon-dark.png          # Application icon for dark theme.
└── favicon.ico            # Favicon for the browser tab.


## 🚀 Getting Started

To run this To-Do App locally, simply open the `index.html` file in your web browser. There's no server-side setup required!

1.  **Clone the repository:**

    ```
    git clone [https://github.com/Boda1607/To-do.git](https://github.com/Boda1607/To-do.git)
    cd todo-app

    ```

2.  **Open `index.html`:**
    Navigate to the `To-do` directory and open `index.html` directly in your preferred web browser.

The application will load, and you can start managing your tasks immediately.

### PWA Installation

* **Desktop:** In most modern browsers (Chrome, Edge, Firefox), you'll see an "install" icon in the address bar (often a plus sign or a computer with an arrow). Click this to install the app to your desktop.

* **Mobile:** On Android devices, you might get a prompt to "Add to Home screen." On iOS, use the "Share" menu in Safari and select "Add to Home Screen."

## 💡 Usage

* **Navigation:** Use the bottom navigation bar to switch between Tasks, Categories, Charts, and Profile sections.

* **Adding Tasks:** Click the `+` button in the navigation bar to open the "Add To-Do" modal. Fill in the details and click "Add Task."

* **Managing Tasks:** On the "Tasks" page, click the checkmark to toggle completion, the pen icon to edit, or the trash can to delete a task. Use the search bar to filter and the "Sort" dropdown to reorder.

* **Managing Categories:** On the "Categories" page, you can add new categories, edit existing ones, delete them, or drag-and-drop to reorder their appearance.

* **Charts:** The "Charts" section provides visual summaries of your task data.

* **Theme Toggle:** On the "Profile" page, click "Toggle Light/Dark Mode" to switch themes manually.

## 🛠️ Technologies Used

* **HTML5:** For the application structure.

* **CSS3:** For styling, including responsive design and animations.

* **JavaScript (ES6+):** For all interactive logic and DOM manipulation.

* **Chart.js:** For generating interactive data visualizations.

* **Font Awesome:** For icons used throughout the UI.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).


## 🙋‍♂️ Author

AbdElRahman Hesham
Made with ❤️.

Website: [abdelrahmanz.netlify.app](https://abdelrahmanz.netlify.app)

