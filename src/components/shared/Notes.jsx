import { useState } from 'react'
import { StickyNote, Plus, Edit2, Trash2, Save, X } from 'lucide-react'

function Notes({ userType = 'student' }) {
  const [notes, setNotes] = useState([])

  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: '', content: '', color: 'yellow' })

  const colors = [
    { name: 'yellow', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { name: 'blue', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'green', bg: 'bg-green-50', border: 'border-green-200' },
    { name: 'pink', bg: 'bg-pink-50', border: 'border-pink-200' },
    { name: 'purple', bg: 'bg-purple-50', border: 'border-purple-200' },
  ]

  const handleSave = () => {
    if (editingId) {
      setNotes(notes.map(note => 
        note.id === editingId 
          ? { ...note, ...formData, date: new Date().toLocaleDateString('ar-SA') }
          : note
      ))
      setEditingId(null)
    } else {
      setNotes([{
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('ar-SA'),
      }, ...notes])
    }
    setFormData({ title: '', content: '', color: 'yellow' })
    setShowForm(false)
  }

  const handleEdit = (note) => {
    setEditingId(note.id)
    setFormData({ title: note.title, content: note.content, color: note.color })
    setShowForm(true)
  }

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const colorClass = (colorName) => {
    const color = colors.find(c => c.name === colorName) || colors[0]
    return `${color.bg} ${color.border}`
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <StickyNote className="w-6 h-6 ml-2" />
          الملاحظات
        </h2>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingId(null)
            setFormData({ title: '', content: '', color: 'yellow' })
          }}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 space-x-reverse"
        >
          <Plus className="w-4 h-4" />
          <span>إضافة ملاحظة</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {editingId ? 'تعديل الملاحظة' : 'ملاحظة جديدة'}
            </h3>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ title: '', content: '', color: 'yellow' })
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                العنوان
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500"
                placeholder="عنوان الملاحظة"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المحتوى
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500"
                placeholder="اكتب ملاحظاتك هنا..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اللون
              </label>
              <div className="flex space-x-2 space-x-reverse">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setFormData({ ...formData, color: color.name })}
                    className={`w-10 h-10 rounded-lg border-2 ${
                      formData.color === color.name
                        ? 'border-gray-900 scale-110'
                        : color.border
                    } ${color.bg}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <Save className="w-4 h-4" />
                <span>حفظ</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <div
            key={note.id}
            className={`border-2 rounded-lg p-4 ${colorClass(note.color)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg">{note.title}</h3>
              <div className="flex space-x-1 space-x-reverse">
                <button
                  onClick={() => handleEdit(note)}
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{note.content}</p>
            <p className="text-xs text-gray-500">{note.date}</p>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <div className="text-center py-12">
          <StickyNote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">لا توجد ملاحظات بعد</p>
        </div>
      )}
    </div>
  )
}

export default Notes

