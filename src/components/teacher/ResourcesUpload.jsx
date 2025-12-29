import { useState } from 'react'
import { Upload, FileText, Link as LinkIcon, X, Download, ExternalLink } from 'lucide-react'
import { useResources } from '../../contexts/ResourcesContext'

function ResourcesUpload() {
  const { resources, addResource } = useResources()

  const [showUploadForm, setShowUploadForm] = useState(false)
  const [newResource, setNewResource] = useState({
    type: 'pdf',
    title: '',
    description: '',
    url: '',
  })

  const handleFileUpload = (files) => {
    const fileList = Array.from(files)
    fileList.forEach(file => {
      addResource({
        type: 'pdf',
        title: file.name,
        description: 'مورد تعليمي جديد',
        subject: '', // Default, should be selected
        teacher: '', // Should come from profile
        size: formatFileSize(file.size),
        url: null,
      })
    })
    setShowUploadForm(false)
  }

  const handleAddLink = () => {
    if (newResource.title && newResource.url) {
      addResource({
        type: 'link',
        title: newResource.title,
        description: newResource.description,
        subject: '', // Default, should be selected
        teacher: '', // Should come from profile
        url: newResource.url,
      })
      setNewResource({ type: 'pdf', title: '', description: '', url: '' })
      setShowUploadForm(false)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">الموارد التعليمية</h2>
        <button
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="bg-success-600 text-white px-6 py-2 rounded-lg hover:bg-success-700 transition-colors font-medium flex items-center space-x-2 space-x-reverse"
        >
          <Upload className="w-5 h-5" />
          <span>إضافة مورد جديد</span>
        </button>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">إضافة مورد جديد</h3>
            <button
              onClick={() => setShowUploadForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع المورد</label>
              <select
                value={newResource.type}
                onChange={(e) => setNewResource(prev => ({ ...prev, type: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              >
                <option value="pdf">ملف PDF</option>
                <option value="link">رابط</option>
                <option value="note">ملاحظات نصية</option>
              </select>
            </div>

            {newResource.type === 'link' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) => setNewResource(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="عنوان المورد"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرابط</label>
                  <input
                    type="url"
                    value={newResource.url}
                    onChange={(e) => setNewResource(prev => ({ ...prev, url: e.target.value }))}
                    placeholder="https://..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الوصف (اختياري)</label>
                  <textarea
                    value={newResource.description}
                    onChange={(e) => setNewResource(prev => ({ ...prev, description: e.target.value }))}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
                  />
                </div>
                <button
                  onClick={handleAddLink}
                  className="bg-success-600 text-white px-6 py-2 rounded-lg hover:bg-success-700"
                >
                  إضافة الرابط
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رفع ملف</label>
                  <label className="block">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                    />
                    <div className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-success-400 transition-colors bg-white">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-600">اضغط لاختيار الملفات أو اسحبها هنا</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX</p>
                    </div>
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Resources List */}
      <div className="space-y-4">
        {resources.map(resource => (
          <div key={resource.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                {resource.type === 'link' ? (
                  <LinkIcon className="w-6 h-6 ml-3 text-blue-600 flex-shrink-0 mt-1" />
                ) : (
                  <FileText className="w-6 h-6 ml-3 text-red-600 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{resource.title}</h3>
                  <p className="text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                    <span>{resource.date}</span>
                    {resource.size && <span>{resource.size}</span>}
                    {resource.type === 'link' && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 ml-1" />
                        فتح الرابط
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                {resource.type === 'pdf' && (
                  <button className="text-primary-600 hover:text-primary-700 p-2">
                    <Download className="w-5 h-5" />
                  </button>
                )}
                {/* Note: Resource deletion would require context update */}
                <button
                  className="text-red-500 hover:text-red-700 p-2"
                  title="حذف المورد (قريباً)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resources.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">لا توجد موارد بعد</p>
        </div>
      )}
    </div>
  )
}

export default ResourcesUpload
