import { Award, TrendingUp, TrendingDown, Minus } from 'lucide-react'

function GradesView() {
  const grades = []

  const overallAverage = grades.length > 0 ? grades.reduce((sum, g) => sum + g.grade, 0) / grades.length : 0

  const getTrendIcon = (current, previous) => {
    if (current > previous) return <TrendingUp className="w-4 h-4 text-success-600" />
    if (current < previous) return <TrendingDown className="w-4 h-4 text-red-600" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-success-600 bg-success-50'
    if (grade >= 80) return 'text-primary-600 bg-primary-50'
    if (grade >= 70) return 'text-orange-600 bg-orange-50'
    return 'text-red-600 bg-red-50'
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Award className="w-6 h-6 ml-2" />
          الدرجات والتقييمات
        </h2>
        <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-lg">
          <div className="text-sm opacity-90">المعدل العام</div>
          <div className="text-3xl font-bold">{overallAverage.toFixed(1)}%</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {grades.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{item.subject}</h3>
              <div className={`text-3xl font-bold px-4 py-2 rounded-lg ${getGradeColor(item.grade)}`}>
                {item.grade}%
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">التقييم السابق:</span>
                <span className="font-medium">{item.previous}%</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">الواجبات المكتملة:</span>
                <span className="font-medium">
                  {item.completed} / {item.assignments}
                </span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-600">التغيير:</span>
                <div className="flex items-center space-x-1 space-x-reverse">
                  {getTrendIcon(item.grade, item.previous)}
                  <span className={`font-medium ${
                    item.grade > item.previous ? 'text-success-600' :
                    item.grade < item.previous ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {Math.abs(item.grade - item.previous)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Feedback Section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">ملاحظات المعلمين</h3>
        <div className="space-y-4">
          {grades.length === 0 && (
            <p className="text-gray-500 text-center py-8">لا توجد ملاحظات بعد</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default GradesView
