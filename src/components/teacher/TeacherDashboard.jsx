import { Users, BookOpen, Award, TrendingUp, FileText, MessageSquare } from 'lucide-react'

function TeacherDashboard() {
  const stats = [
    { label: 'إجمالي الطلاب', value: '0', icon: Users, color: 'text-primary-600' },
    { label: 'الفصول النشطة', value: '0', icon: BookOpen, color: 'text-success-600' },
    { label: 'الواجبات المعلقة', value: '0', icon: FileText, color: 'text-orange-600' },
    { label: 'المعدل العام', value: '0%', icon: Award, color: 'text-purple-600' },
  ]

  const recentActivity = []

  const studentPerformance = []

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">لوحة التحكم</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Recent Activity */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-5 h-5 ml-2 text-success-600" />
            <h3 className="text-xl font-bold text-gray-900">النشاط الأخير</h3>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {activity.type === 'تقييم' ? (
                      <>
                        <p className="font-semibold text-gray-900">{activity.student}</p>
                        <p className="text-sm text-gray-600">{activity.subject} - {activity.grade}%</p>
                      </>
                    ) : (
                      <p className="font-semibold text-gray-900">{activity.item}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                  </div>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {activity.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Performance Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 ml-2 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">ملخص أداء الطلاب</h3>
          </div>
          <div className="space-y-4">
            {studentPerformance.map((perf, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{perf.grade}</h4>
                  <span className="text-2xl font-bold text-success-600">{perf.average}%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{perf.students} طالب</span>
                  <span className="text-success-600 font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 ml-1" />
                    {perf.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-success-500 to-primary-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">إجراءات سريعة</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg transition-colors text-right">
            <div className="font-semibold">رفع مورد</div>
            <div className="text-sm opacity-90">مادة تعليمية جديدة</div>
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg transition-colors text-right">
            <div className="font-semibold">تقييم واجب</div>
            <div className="text-sm opacity-90">مراجعة الواجبات</div>
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg transition-colors text-right">
            <div className="font-semibold">إنشاء امتحان</div>
            <div className="text-sm opacity-90">امتحان تجريبي</div>
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg transition-colors text-right">
            <div className="font-semibold">إدارة الطلاب</div>
            <div className="text-sm opacity-90">عرض القوائم</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
