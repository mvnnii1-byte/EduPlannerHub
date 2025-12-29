import { useState } from 'react'
import { ClipboardList, Clock, Award, Play, CheckCircle } from 'lucide-react'

function TrialExams({ userType = 'student' }) {
  const [selectedSubject, setSelectedSubject] = useState('all')

  const subjects = []

  const exams = []

  const filteredExams = selectedSubject === 'all' 
    ? exams 
    : exams.filter(exam => exam.subject === selectedSubject)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'سهل': return 'bg-success-100 text-success-700'
      case 'متوسط': return 'bg-orange-100 text-orange-700'
      case 'صعب': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'متاح': return 'bg-primary-100 text-primary-700'
      case 'مكتمل': return 'bg-success-100 text-success-700'
      case 'نشط': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ClipboardList className="w-6 h-6 ml-2 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">الامتحانات التجريبية</h2>
        </div>
        
        {userType === 'teacher' && (
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
            إنشاء امتحان جديد
          </button>
        )}
      </div>

      {/* Filter */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">جميع المواد</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Exams Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredExams.map(exam => (
          <div key={exam.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500">{exam.subject}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{exam.title}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                {exam.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{exam.duration} دقيقة</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <ClipboardList className="w-4 h-4" />
                <span>{exam.questions} سؤال</span>
              </div>
            </div>

            {userType === 'teacher' && (
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">عدد المحاولات:</span>
                  <span className="font-semibold">{exam.attempts}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">المعدل:</span>
                  <span className="font-semibold text-primary-600">{exam.averageScore}%</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                {exam.difficulty}
              </span>
              {userType === 'student' ? (
                <button className="flex items-center space-x-1 space-x-reverse bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  <Play className="w-4 h-4" />
                  <span>بدء الامتحان</span>
                </button>
              ) : (
                <button className="flex items-center space-x-1 space-x-reverse text-primary-600 hover:text-primary-700 font-medium">
                  <Award className="w-4 h-4" />
                  <span>عرض النتائج</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {userType === 'student' && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>ملاحظة:</strong> يتم تصحيح الامتحانات تلقائياً بعد الانتهاء. يمكنك مراجعة الإجابات والنتائج فوراً.
          </p>
        </div>
      )}
    </div>
  )
}

export default TrialExams
