# 📋 Task Manager App

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**A modern, responsive task management application built with React, TypeScript, and Bootstrap**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

- ✅ **Add, Edit & Delete Tasks** - Manage your tasks with ease
- 🏷️ **Category Organization** - Organize tasks by Work, Study, Personal, or Fitness
- 📊 **Task Statistics** - View total, pending, and completed task counts
- 🌓 **Dark/Light Mode** - Toggle between themes for comfortable viewing
- 🔍 **Filter Tasks** - Filter tasks by category or view all
- 💾 **Local Storage** - All tasks are saved locally in your browser
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🎬 Demo

### Light Mode
![Task Manager Light Mode](./docs/light-mode-demo.gif)

### Dark Mode
![Task Manager Dark Mode](./docs/dark-mode-demo.gif)

### Mobile View
![Task Manager Mobile](./docs/mobile-demo.gif)

### Task Management Flow
![Task Management](./docs/task-flow-demo.gif)

> **📸 Creating GIFs:** 
> - Use [Kap](https://getkap.co/) (Mac) or [LICEcap](https://www.cockos.com/licecap/) (Windows/Mac) to record your screen
> - Save GIFs in a `docs/` folder in your repository
> - Or use [GIPHY](https://giphy.com/) for animated GIFs and use their embed URLs

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MhussainD4772/Task-Manager-App.git
   cd Task-Manager-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📖 Usage

### Adding a Task

1. Enter a task title in the "Add Task" form
2. Select a category (Work, Study, Personal, or Fitness)
3. Click "Add Task" button
4. Your task will appear in the task list

### Managing Tasks

- **Complete a Task**: Click the checkbox next to the task
- **Delete a Task**: Click the trash icon on the right
- **Filter Tasks**: Use the filter dropdown to view tasks by category
- **Clear Completed**: Click "Clear Completed" to remove all completed tasks

### Theme Toggle

- Click the theme toggle switch in the navbar to switch between light and dark modes
- Your preference is saved automatically

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Bootstrap 5.3.8 + Custom CSS
- **Icons**: Bootstrap Icons 1.13.1
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: LocalStorage API

## 📁 Project Structure

```
Task-Manager-App/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AddTaskForm.tsx    # Form to add new tasks
│   │   ├── Navbar.tsx         # Navigation bar with theme toggle
│   │   ├── TaskFilter.tsx     # Filter tasks by category
│   │   └── TaskList.tsx       # Display list of tasks
│   ├── models/
│   │   └── Task.ts            # Task interface/type definition
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and custom CSS
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Key Features Explained

### Task Management
- Each task has a unique ID, title, category, and completion status
- Tasks persist in browser's localStorage
- Real-time updates across all components

### Category System
- **Work** 💼 - Professional tasks
- **Study** 📚 - Educational tasks
- **Personal** 👤 - Personal tasks
- **Fitness** 💪 - Health and fitness tasks

### Responsive Design
- Mobile-first approach
- Breakpoints optimized for all screen sizes
- Touch-friendly interface on mobile devices

## 🚧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**MhussainD4772**

- GitHub: [@MhussainD4772](https://github.com/MhussainD4772)
- Project Link: [https://github.com/MhussainD4772/Task-Manager-App](https://github.com/MhussainD4772/Task-Manager-App)

## 🙏 Acknowledgments

- [React](https://react.dev/) - The web framework used
- [Vite](https://vitejs.dev/) - The build tool
- [Bootstrap](https://getbootstrap.com/) - The CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - The icon library

---

<div align="center">

**⭐ Star this repo if you find it helpful! ⭐**

Made with ❤️ using React and TypeScript

</div>
