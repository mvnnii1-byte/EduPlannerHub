import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, BookOpen, Users, Shield } from 'lucide-react'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 space-x-reverse">
            <GraduationCap className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-800">EduPlannerHub</h1>
          </div>
          
          <div className="flex items-center space-x-6 space-x-reverse">
            <Link
              to="/"
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-primary-100 text-primary-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>الرئيسية</span>
            </Link>
            
            <Link
              to="/student"
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/student'
                  ? 'bg-primary-100 text-primary-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>صفحة الطالب</span>
            </Link>
            
            <Link
              to="/teacher"
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/teacher'
                  ? 'bg-primary-100 text-primary-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>صفحة المعلم</span>
            </Link>

            <Link
              to="/admin"
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/admin'
                  ? 'bg-red-100 text-red-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>الإدارة</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
