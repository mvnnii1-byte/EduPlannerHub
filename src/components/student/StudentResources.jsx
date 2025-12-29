import { useResources } from '../../contexts/ResourcesContext'
import { FileText, Link as LinkIcon, Download, ExternalLink, Search, Filter } from 'lucide-react'
import { useState } from 'react'

function StudentResources() {
  const { resources } = useResources()
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const subjects = []

  const filteredResources = resources.filter(resource => {
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSubject && matchesSearch
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <FileText className="w-6 h-6 ml-2" />
          الموارد التعليمية
        </h2>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في الموارد..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">جميع المواد</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resources List */}
      <div className="space-y-4">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                {resource.type === 'link' ? (
                  <LinkIcon className="w-6 h-6 ml-3 text-blue-600 flex-shrink-0 mt-1" />
                ) : (
                  <FileText className="w-6 h-6 ml-3 text-red-600 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {resource.subject}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                    <span>من: {resource.teacher}</span>
                    <span>{resource.date}</span>
                    {resource.size && <span>{resource.size}</span>}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                {resource.type === 'link' ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 p-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <button className="text-primary-600 hover:text-primary-700 p-2">
                    <Download className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">لا توجد موارد متاحة</p>
        </div>
      )}
    </div>
  )
}

export default StudentResources
