import { useState } from 'react'
import TeacherProfile from '../components/teacher/TeacherProfile'
import TeacherDashboard from '../components/teacher/TeacherDashboard'
import ResourcesUpload from '../components/teacher/ResourcesUpload'
import StudentManagement from '../components/teacher/StudentManagement'
import GradesManagement from '../components/teacher/GradesManagement'
import QuestionBanks from '../components/shared/QuestionBanks'
import TrialExams from '../components/shared/TrialExams'
import Notes from '../components/shared/Notes'
import Calendar from '../components/shared/Calendar'
import { User, BarChart3, Upload, Users, Award, BookOpen, ClipboardList, StickyNote, Calendar as CalendarIcon } from 'lucide-react'

function TeacherPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: BarChart3 },
    { id: 'profile', label: 'الملف الشخصي', icon: User },
    { id: 'resources', label: 'الموارد التعليمية', icon: Upload },
    { id: 'students', label: 'إدارة الطلاب', icon: Users },
    { id: 'grades', label: 'تقييم الطلاب', icon: Award },
    { id: 'notes', label: 'الملاحظات', icon: StickyNote },
    { id: 'calendar', label: 'التقويم', icon: CalendarIcon },
    { id: 'questions', label: 'بنك الأسئلة', icon: BookOpen },
    { id: 'exams', label: 'الامتحانات', icon: ClipboardList },
  ]

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">صفحة المعلم</h1>
        <p className="text-gray-600">إدارة الفصول والموارد التعليمية وتقييم الطلاب</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-success-600 border-b-2 border-success-600 bg-success-50'
                    : 'text-gray-600 hover:text-success-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'dashboard' && <TeacherDashboard />}
        {activeTab === 'profile' && <TeacherProfile />}
        {activeTab === 'resources' && <ResourcesUpload />}
        {activeTab === 'students' && <StudentManagement />}
        {activeTab === 'grades' && <GradesManagement />}
        {activeTab === 'notes' && <Notes userType="teacher" />}
        {activeTab === 'calendar' && <Calendar userType="teacher" />}
        {activeTab === 'questions' && <QuestionBanks userType="teacher" />}
        {activeTab === 'exams' && <TrialExams userType="teacher" />}
      </div>
    </div>
  )
}

export default TeacherPage
