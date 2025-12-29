import { FileText, Upload, Award, TrendingUp, Clock, CheckCircle } from 'lucide-react'

function StudentDashboard() {
  const stats = [
    { label: 'الواجبات المكتملة', value: '0', icon: CheckCircle, color: 'text-success-600' },
    { label: 'الواجبات المعلقة', value: '0', icon: Clock, color: 'text-orange-600' },
    { label: 'الدرجة المتوسطة', value: '0%', icon: Award, color: 'text-primary-600' },
    { label: 'التقدم الأسبوعي', value: '0%', icon: TrendingUp, color: 'text-blue-600' },
  ]

  const recentUploads = []

  const recentEvaluations = []

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

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Uploads */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Upload className="w-5 h-5 ml-2 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">آخر الرفوعات</h3>
          </div>
          <div className="space-y-3">
            {recentUploads.map((upload, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {upload.type}
                    </span>
                    <h4 className="font-semibold text-gray-900 mt-2">{upload.title}</h4>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-gray-500">{upload.date}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    upload.status === 'تم التقييم' 
                      ? 'bg-success-100 text-success-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {upload.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Evaluations */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Award className="w-5 h-5 ml-2 text-success-600" />
            <h3 className="text-xl font-bold text-gray-900">آخر التقييمات</h3>
          </div>
          <div className="space-y-3">
            {recentEvaluations.map((evaluation, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{evaluation.subject}</h4>
                  <span className="text-2xl font-bold text-primary-600">{evaluation.grade}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{evaluation.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Chart Placeholder */}
      <div className="mt-6 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">تقدم التعلم</h3>
        <div className="grid grid-cols-4 gap-4">
          {['الرياضيات', 'الفيزياء', 'الكيمياء', 'العربية'].map((subject, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold mb-2">{85 + idx * 3}%</div>
              <div className="text-sm opacity-90">{subject}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
