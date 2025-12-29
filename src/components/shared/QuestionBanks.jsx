import { useState } from 'react'
import { BookOpen, Search, Filter, FileText, Download } from 'lucide-react'

function QuestionBanks({ userType = 'student' }) {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const subjects = []
  const difficulties = ['سهل', 'متوسط', 'صعب']

  const questionBanks = []

  const filteredBanks = questionBanks.filter(bank => {
    const matchesSubject = selectedSubject === 'all' || bank.subject === selectedSubject
    const matchesDifficulty = selectedDifficulty === 'all' || bank.difficulty === selectedDifficulty
    const matchesSearch = bank.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bank.subject.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSubject && matchesDifficulty && matchesSearch
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'سهل': return 'bg-success-100 text-success-700'
      case 'متوسط': return 'bg-orange-100 text-orange-700'
      case 'صعب': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 ml-2 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">بنك الأسئلة</h2>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في بنك الأسئلة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
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
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">جميع المستويات</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Question Banks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanks.map(bank => (
          <div key={bank.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500">{bank.subject}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{bank.title}</h3>
              </div>
              <FileText className="w-8 h-8 text-primary-400" />
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">عدد الأسئلة:</span>
                <span className="font-semibold">{bank.questionsCount}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">آخر تحديث:</span>
                <span className="font-semibold">{bank.lastUpdated}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(bank.difficulty)}`}>
                {bank.difficulty}
              </span>
              <button className="flex items-center space-x-1 space-x-reverse text-primary-600 hover:text-primary-700 font-medium">
                <Download className="w-4 h-4" />
                <span>عرض الأسئلة</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBanks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">لا توجد نتائج مطابقة للبحث</p>
        </div>
      )}
    </div>
  )
}

export default QuestionBanks
