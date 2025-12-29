import { useState } from 'react'
import { Upload, FileText, BookOpen, ClipboardList, X } from 'lucide-react'

function UploadSection() {
  const [uploads, setUploads] = useState({
    research: [],
    homework: [],
    evaluations: [],
  })

  const handleFileUpload = (type, files) => {
    const fileList = Array.from(files)
    setUploads(prev => ({
      ...prev,
      [type]: [...prev[type], ...fileList.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        date: new Date().toLocaleDateString('ar-SA'),
        file: file,
      }))],
    }))
  }

  const removeFile = (type, id) => {
    setUploads(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id),
    }))
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  const UploadCard = ({ type, title, icon: Icon, description }) => (
    <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300 hover:border-primary-400 transition-colors">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 ml-2 text-primary-600" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <label className="block">
        <input
          type="file"
          multiple
          onChange={(e) => handleFileUpload(type, e.target.files)}
          className="hidden"
        />
        <div className="cursor-pointer bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center">
          <Upload className="w-4 h-4 ml-2" />
          <span>اختر ملفات للرفع</span>
        </div>
      </label>

      {uploads[type].length > 0 && (
        <div className="mt-4 space-y-2">
          {uploads[type].map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center flex-1 min-w-0">
                <FileText className="w-5 h-5 ml-2 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(item.size)} • {item.date}</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(type, item.id)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">رفع الملفات</h2>
      
      <div className="space-y-6">
        <UploadCard
          type="research"
          title="البحوث العلمية"
          icon={BookOpen}
          description="قم برفع بحوثك العلمية والمشاريع البحثية هنا"
        />
        
        <UploadCard
          type="homework"
          title="الواجبات والأنشطة"
          icon={FileText}
          description="ارفع واجباتك المنزلية والأنشطة المطلوبة"
        />
        
        <UploadCard
          type="evaluations"
          title="التقييمات الأسبوعية"
          icon={ClipboardList}
          description="ارفع تقييماتك الأسبوعية والامتحانات القصيرة"
        />
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>ملاحظة:</strong> يمكنك رفع ملفات بصيغ PDF, DOC, DOCX, أو الصور. الحد الأقصى لحجم الملف هو 10 ميجابايت.
        </p>
      </div>
    </div>
  )
}

export default UploadSection
