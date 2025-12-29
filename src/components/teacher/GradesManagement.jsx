import { useState } from 'react'
import { Award, Search, FileText, Save } from 'lucide-react'

function GradesManagement() {
  const [selectedStudent, setSelectedStudent] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')

  const students = []

  const subjects = []

  const assignments = []

  const filteredAssignments = assignments.filter(assignment => {
    const matchesStudent = selectedStudent === 'all' || assignment.student === selectedStudent
    const matchesSubject = selectedSubject === 'all' || assignment.subject === selectedSubject
    return matchesStudent && matchesSubject
  })

  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({ grade: '', feedback: '' })

  const startEdit = (assignment) => {
    setEditingId(assignment.id)
    setEditForm({ grade: assignment.grade, feedback: assignment.feedback })
  }

  const saveEdit = (id) => {
    // In a real app, this would save to backend
    setEditingId(null)
    setEditForm({ grade: '', feedback: '' })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Award className="w-6 h-6 ml-2" />
          تقييم الطلاب
        </h2>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent"
          >
            <option value="all">جميع الطلاب</option>
            {students.map(student => (
              <option key={student.id} value={student.name}>{student.name}</option>
            ))}
          </select>
          
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent"
          >
            <option value="all">جميع المواد</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map(assignment => (
          <div key={assignment.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{assignment.student}</h3>
                <p className="text-sm text-gray-600">{assignment.subject} - {assignment.assignment}</p>
                <p className="text-xs text-gray-500 mt-1">{assignment.date}</p>
              </div>
              {editingId !== assignment.id ? (
                <div className="text-left">
                  <div className={`text-3xl font-bold mb-1 ${
                    assignment.grade >= 90 ? 'text-success-600' :
                    assignment.grade >= 80 ? 'text-primary-600' :
                    assignment.grade >= 70 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {assignment.grade}%
                  </div>
                  <button
                    onClick={() => startEdit(assignment)}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    تعديل
                  </button>
                </div>
              ) : (
                <div className="text-left">
                  <input
                    type="number"
                    value={editForm.grade}
                    onChange={(e) => setEditForm(prev => ({ ...prev, grade: e.target.value }))}
                    min="0"
                    max="100"
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-2xl font-bold text-center"
                  />
                  <button
                    onClick={() => saveEdit(assignment.id)}
                    className="text-sm text-success-600 hover:text-success-700 mt-1 block"
                  >
                    حفظ
                  </button>
                </div>
              )}
            </div>

            {editingId === assignment.id ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">التعليقات</label>
                <textarea
                  value={editForm.feedback}
                  onChange={(e) => setEditForm(prev => ({ ...prev, feedback: e.target.value }))}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500"
                  placeholder="اكتب تعليقاتك هنا..."
                />
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{assignment.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">لا توجد واجبات لتقييمها</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-success-50 to-success-100 p-6 rounded-xl">
          <div className="text-3xl font-bold text-success-700 mb-2">
            {filteredAssignments.length}
          </div>
          <div className="text-sm text-success-600">إجمالي التقييمات</div>
        </div>
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
          <div className="text-3xl font-bold text-primary-700 mb-2">
            {filteredAssignments.length > 0 
              ? Math.round(filteredAssignments.reduce((sum, a) => sum + a.grade, 0) / filteredAssignments.length)
              : 0}%
          </div>
          <div className="text-sm text-primary-600">المعدل العام</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <div className="text-3xl font-bold text-purple-700 mb-2">
            {students.length}
          </div>
          <div className="text-sm text-purple-600">عدد الطلاب</div>
        </div>
      </div>
    </div>
  )
}

export default GradesManagement
