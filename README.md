# Pomodoro Timer

A modern, customizable Pomodoro timer built with React and TypeScript, featuring custom session management and a clean, responsive interface.

## 🚀 Features

- **Classic Pomodoro Sessions**: Pre-configured Focus, Short Break, and Long Break timers
- **Custom Sessions**: Create and manage personalized timer sessions for different activities
- **Session Management**: Add, delete, and switch between multiple custom sessions
- **Persistent Storage**: Session data persists across browser sessions using localStorage
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **TypeScript Support**: Full type safety and better developer experience

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📱 Usage

## [Link](https://pomodoro-timer-flame-psi.vercel.app/) to preview

### Default Sessions

The app comes with three pre-configured sessions:

- **Focus**: 25-minute work sessions
- **Short Break**: 5-minute breaks
- **Long Break**: 15-minute extended breaks

### Custom Sessions

- Create custom timer sessions for specific activities
- Name your sessions (e.g., "Deep Work", "Meditation", "Exercise")
- Set custom durations for each session
- Delete custom sessions when no longer needed

### Session Management

- Switch between sessions by clicking on session buttons
- Default sessions (Focus, Short Break, Long Break) cannot be deleted
- Custom sessions display a delete button (×) for easy removal
- All session data is automatically saved to browser storage

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Timer.tsx               # Main timer component
│   ├── Time.tsx                # Time component for timer
│   ├── Session.tsx             # Session management component
│   └── SessionCreateModal.tsx  # Session modal creation component
├── index.css        # Global styles and CSS variables
└── App.tsx               # Root application component
```

## 🎨 Design Features

- **CSS Custom Properties**: Dynamic theming with CSS variables
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Accessible UI**: Proper ARIA labels and semantic HTML
- **Modern Styling**: Clean, minimalist design with subtle shadows and rounded corners

## 🧪 Key Components

### Session Component

Handles individual session display and management:

- Renders session buttons with conditional styling
- Manages session deletion for custom sessions
- Integrates with parent state management

### Timer Component (Referenced)

Core timer functionality with session integration:

- Countdown timer with start/pause/reset controls
- Session switching capabilities
- Progress visualization

## 💡 Technical Highlights

- **Type Safety**: Full TypeScript implementation with custom type definitions
- **State Management**: Efficient React state handling with proper prop drilling
- **Local Storage Integration**: Persistent data storage with JSON serialization
- **Conditional Rendering**: Smart UI updates based on session type
- **Event Handling**: Proper event delegation and type casting

## 🚀 Potential Enhancements

- [ ] Audio notifications for session completion
- [ ] Progress tracking and statistics
- [ ] Multiple timer instances
- [ ] Keyboard shortcuts
- [ ] Dark/light theme toggle
- [ ] Export/import session configurations

## 📝 Code Quality

This project demonstrates:

- Clean, readable React components
- Proper TypeScript usage and type definitions
- Responsive design principles
- Modern JavaScript/ES6+ features
- Component composition and reusability
- State management best practices

## 🤝 Contributing

This is a personal project created for portfolio purposes. Feel free to fork and modify for your own use!

## 📄 License

MIT License - feel free to use this code for your own projects.

---

_Built with ❤️ as a demonstration of modern React development practices_
