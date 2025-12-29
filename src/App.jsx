import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ResourcesProvider } from './contexts/ResourcesContext'
import Navigation from './components/Navigation'
import StudentPage from './pages/StudentPage'
import TeacherPage from './pages/TeacherPage'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ResourcesProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ResourcesProvider>
  )
}

export default App
