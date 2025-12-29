import { useState } from 'react'
import StudentProfile from '../components/student/StudentProfile'
import StudentDashboard from '../components/student/StudentDashboard'
import UploadSection from '../components/student/UploadSection'
import GradesView from '../components/student/GradesView'
import StudentResources from '../components/student/StudentResources'
import QuestionBanks from '../components/shared/QuestionBanks'
import TrialExams from '../components/shared/TrialExams'
import Notes from '../components/shared/Notes'
import Calendar from '../components/shared/Calendar'
import Calculator from '../components/shared/Calculator'
import { FileText, Upload, Award, BookOpen, BarChart3, ClipboardList, StickyNote, Calendar as CalendarIcon, FolderOpen, Calculator as CalculatorIcon } from 'lucide-react'

function StudentPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: BarChart3 },
    { id: 'profile', label: 'الملف الشخصي', icon: FileText },
    { id: 'resources', label: 'الموارد التعليمية', icon: FolderOpen },
    { id: 'uploads', label: 'الرفع', icon: Upload },
    { id: 'grades', label: 'الدرجات', icon: Award },
    { id: 'notes', label: 'الملاحظات', icon: StickyNote },
    { id: 'calendar', label: 'التقويم', icon: CalendarIcon },
    { id: 'calculator', label: 'آلة حاسبة', icon: CalculatorIcon },
    { id: 'questions', label: 'بنك الأسئلة', icon: BookOpen },
    { id: 'exams', label: 'الامتحانات التجريبية', icon: ClipboardList },
  ]

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">صفحة الطالب</h1>
        <p className="text-gray-600">إدارة مهامك التعليمية ومتابعة تقدمك</p>
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
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
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
        {activeTab === 'dashboard' && <StudentDashboard />}
        {activeTab === 'profile' && <StudentProfile />}
        {activeTab === 'resources' && <StudentResources />}
        {activeTab === 'uploads' && <UploadSection />}
        {activeTab === 'grades' && <GradesView />}
        {activeTab === 'notes' && <Notes userType="student" />}
        {activeTab === 'calendar' && <Calendar userType="student" />}
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'questions' && <QuestionBanks userType="student" />}
        {activeTab === 'exams' && <TrialExams userType="student" />}
      </div>
    </div>
  )
}

export default StudentPage
