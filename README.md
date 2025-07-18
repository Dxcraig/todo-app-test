# React+Vite Todo App

Welcome to the React Vite Todo App! This is a simple web application built using React and Vite that allows users to manage their tasks. You can create new tasks, mark tasks as completed, and delete tasks. The app utilizes local storage to persist task data, ensuring that your tasks remain even after you close the browser.

## Features

### Create New Tasks: 
Add new tasks to your to-do list by typing in the task description and pressing the "Add" button.

### Mark Completed Tasks: 
Once you've completed a task, simply click the checkbox next to the task to mark it as completed. The task will be visually distinguished to show its completion status.

### Delete Tasks: 
If you no longer need a task, you can remove it from the list by clicking the "Delete" button next to the task.

### Local Storage: 
The app uses local storage to store your tasks. This means that even if you close the browser or refresh the page, your tasks will be saved and available the next time you visit the app.

## Getting Started

To get started with the Todo App, follow these steps:

### Clone the Repository: 
Start by cloning this GitHub repository to your local machine

### Navigate to the Directory: 
Move into the project directory

### Install Dependencies: 
Use your preferred package manager (npm or yarn) to install the project dependencies

### Run the Development Server: 
Start the Vite development server
```
npm run dev
```

### Open in Browser: 
Once the development server is running, open your web browser and navigate to http://localhost:3000 to access the Todo App.

## Testing

This project uses Vitest and React Testing Library for testing. To run the tests, use the following commands:

### Run Tests Once:
```
npm test
```

### Run Tests in Watch Mode:
```
npm run test:watch
```

### Generate Test Coverage Report:
```
npm run test:coverage
```
After running the coverage command, you can view the detailed report in the `coverage` directory.

## Deployment

This project is configured for automatic deployments:

- **Production**: Automatically deploys to GitHub Pages when changes are pushed to the master branch
- **Preview**: Generates preview deployments for pull requests using Netlify or Vercel

See the [Deployment Guide](./docs/DEPLOYMENT.md) for more details on setting up preview deployments.

## Contributing
Contributions are welcome! If you find a bug or have an idea for an improvement, feel free to open an issue or submit a pull request.
Please make sure to follow the existing code style and conventions.

When contributing:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure they pass
5. Submit a pull request

## License
This project is licensed under the MIT License. Feel free to use and modify the code as needed.

Thank you for using the React Vite Todo App. If you have any questions or need assistance, don't hesitate to contact us or open an issue. Happy task managing!

