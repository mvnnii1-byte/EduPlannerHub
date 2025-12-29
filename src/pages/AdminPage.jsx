import { useState } from 'react'
import { Shield, Building2, Users, GraduationCap, Plus, Edit2, Trash2, Search, BarChart3, Settings, FileText, UserPlus, TrendingUp, Award, Calendar, Bell, Download, Filter } from 'lucide-react'

function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const [schools, setSchools] = useState([])

  const [teachers, setTeachers] = useState([])

  const [students, setStudents] = useState([])

  const allSubjects = []

  const stats = {
    totalSchools: schools.length,
    totalTeachers: teachers.length,
    totalStudents: schools.reduce((sum, s) => sum + (s.studentsCount || 0), 0),
    totalClasses: schools.reduce((sum, s) => sum + (s.classesCount || 0), 0),
    activeTeachers: teachers.filter(t => t.status === 'نشط').length,
    averagePerformance: teachers.length > 0 ? Math.round(teachers.reduce((sum, t) => sum + (t.averageGrade || 0), 0) / teachers.length) : 0,
  }

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: BarChart3 },
    { id: 'schools', label: 'المدارس', icon: Building2 },
    { id: 'teachers', label: 'المعلمين', icon: Users },
    { id: 'students', label: 'الطلاب', icon: GraduationCap },
    { id: 'analytics', label: 'التحليلات', icon: TrendingUp },
    { id: 'reports', label: 'التقارير', icon: FileText },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ]

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.school.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || teacher.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.school.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
          <Shield className="w-10 h-10 ml-3 text-red-600" />
          لوحة الإدارة الشاملة
        </h1>
        <p className="text-gray-600">إدارة كاملة للنظام التعليمي - المدارس والمعلمين والطلاب</p>
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
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
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
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">نظرة عامة على النظام</h2>
            
            {/* Main Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalSchools}</div>
                <div className="text-sm text-gray-600">إجمالي المدارس</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-green-600" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.totalTeachers}</div>
                <div className="text-sm text-gray-600">إجمالي المعلمين</div>
                <div className="text-xs text-gray-500 mt-1">{stats.activeTeachers} نشط</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.totalStudents}</div>
                <div className="text-sm text-gray-600">إجمالي الطلاب</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <Award className="w-8 h-8 text-orange-600" />
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{stats.averagePerformance}%</div>
                <div className="text-sm text-gray-600">متوسط الأداء</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg">
                <UserPlus className="w-8 h-8 mb-3" />
                <div className="text-xl font-bold mb-1">إضافة مستخدم جديد</div>
                <div className="text-sm opacity-90">إضافة طالب أو معلم أو مدير</div>
              </button>
              
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                <FileText className="w-8 h-8 mb-3" />
                <div className="text-xl font-bold mb-1">إنشاء تقرير</div>
                <div className="text-sm opacity-90">تقرير شامل عن الأداء</div>
              </button>
              
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                <Download className="w-8 h-8 mb-3" />
                <div className="text-xl font-bold mb-1">تصدير البيانات</div>
                <div className="text-sm opacity-90">تصدير جميع البيانات</div>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">النشاط الأخير</h3>
              <div className="space-y-3">
                {teachers.length === 0 && schools.length === 0 && students.length === 0 && (
                  <p className="text-gray-500 text-center py-8">لا يوجد نشاط حديث</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schools' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">إدارة المدارس</h2>
              <div className="flex space-x-2 space-x-reverse">
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 space-x-reverse">
                  <Plus className="w-5 h-5" />
                  <span>إضافة مدرسة</span>
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map(school => (
                <div key={school.id} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{school.name}</h3>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {school.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-1 space-x-reverse">
                      <button className="text-blue-600 hover:text-blue-700 p-1">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">النوع:</span>
                      <span className="font-semibold text-gray-900">{school.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">المحافظة:</span>
                      <span className="font-semibold text-gray-900">{school.governorate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">المدير:</span>
                      <span className="font-semibold text-gray-900">{school.principal}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{school.studentsCount}</div>
                        <div className="text-xs text-gray-500">طلاب</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-success-600">{school.teachersCount}</div>
                        <div className="text-xs text-gray-500">معلمين</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{school.classesCount}</div>
                        <div className="text-xs text-gray-500">فصول</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teachers' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">إدارة المعلمين</h2>
              <div className="flex space-x-2 space-x-reverse">
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 space-x-reverse">
                  <Plus className="w-5 h-5" />
                  <span>إضافة معلم</span>
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ابحث بالاسم أو المادة أو المدرسة..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">جميع الحالات</option>
                  <option value="نشط">نشط</option>
                  <option value="معطل">معطل</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الرقم القومي</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المادة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المدرسة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الخبرة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عدد الطلاب</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المعدل</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTeachers.map(teacher => (
                    <tr key={teacher.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-xs text-gray-500">{teacher.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.nationalId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs">
                          {teacher.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.school}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.experience} سنة
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {teacher.studentsCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-bold ${
                          teacher.averageGrade >= 90 ? 'text-green-600' :
                          teacher.averageGrade >= 80 ? 'text-blue-600' :
                          'text-orange-600'
                        }`}>
                          {teacher.averageGrade}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {teacher.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 ml-4">
                          تعديل
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">إدارة الطلاب</h2>
              <div className="flex space-x-2 space-x-reverse">
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 space-x-reverse">
                  <UserPlus className="w-5 h-5" />
                  <span>إضافة طالب</span>
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث بالاسم أو الصف أو المدرسة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الرقم القومي</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الصف</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المدرسة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المعدل</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الدور</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map(student => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.nationalId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.school}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-bold ${
                          student.average >= 90 ? 'text-green-600' :
                          student.average >= 80 ? 'text-blue-600' :
                          'text-orange-600'
                        }`}>
                          {student.average}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.role && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                            {student.role}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 ml-4">
                          عرض
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">التحليلات والإحصائيات</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">توزيع الطلاب حسب الصفوف</h3>
                <div className="space-y-3">
                  {['الصف الأول الابتدائي', 'الصف الثاني الابتدائي', 'الصف الثالث الابتدائي', 'الصف الرابع الابتدائي', 'الصف الخامس الابتدائي', 'الصف السادس الابتدائي', 'أولى إعدادي', 'ثانية إعدادي', 'ثالثة إعدادي', 'أولى ثانوي', 'ثانية ثانوي', 'ثالثة ثانوي'].map((grade, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">{grade}</span>
                        <span className="text-sm font-semibold text-gray-900">{150 + idx * 25}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${60 + idx * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">توزيع المعلمين حسب المواد</h3>
                <div className="space-y-3">
                  {allSubjects.slice(0, 8).map((subject, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{subject}</span>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${40 + idx * 5}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-8 text-left">{5 + idx}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">أداء المدارس</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {schools.map((school, idx) => (
                  <div key={school.id} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{school.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">متوسط الأداء:</span>
                        <span className="font-bold text-purple-600">{85 + idx * 2}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">معدل النجاح:</span>
                        <span className="font-bold text-green-600">{92 + idx}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">التقارير</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 cursor-pointer hover:shadow-lg transition-all">
                <FileText className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">تقرير شامل</h3>
                <p className="text-gray-600 mb-4">تقرير شامل عن جميع المدارس والمعلمين والطلاب</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  إنشاء التقرير
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 cursor-pointer hover:shadow-lg transition-all">
                <BarChart3 className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">تقرير الأداء</h3>
                <p className="text-gray-600 mb-4">تحليل أداء الطلاب والمعلمين</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  إنشاء التقرير
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 cursor-pointer hover:shadow-lg transition-all">
                <Users className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">تقرير المعلمين</h3>
                <p className="text-gray-600 mb-4">تقرير تفصيلي عن جميع المعلمين</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  إنشاء التقرير
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 cursor-pointer hover:shadow-lg transition-all">
                <GraduationCap className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">تقرير الطلاب</h3>
                <p className="text-gray-600 mb-4">تقرير شامل عن جميع الطلاب</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                  إنشاء التقرير
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">إعدادات النظام</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">المواد الدراسية</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {allSubjects.map((subject, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                      <span className="text-sm text-gray-900">{subject}</span>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  إضافة مادة جديدة
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">إعدادات عامة</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">تفعيل الإشعارات</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">تفعيل النسخ الاحتياطي التلقائي</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPage