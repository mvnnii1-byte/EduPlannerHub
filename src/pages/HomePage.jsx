import { Link } from 'react-router-dom'
import { GraduationCap, BookOpen, Users, FileText, Award, BarChart3 } from 'lucide-react'

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <GraduationCap className="w-20 h-20 text-primary-600" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          مرحباً بك في منصة EduPlannerHub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          منصة تعليمية شاملة تربط الطلاب والمعلمين في مكان واحد
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
          <Link
            to="/student"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            صفحة الطالب
          </Link>
          <Link
            to="/teacher"
            className="bg-success-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-success-700 transition-colors shadow-lg"
          >
            صفحة المعلم
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">إدارة المهام</h3>
          <p className="text-gray-600">
            رفع البحوث والواجبات والتقييمات الأسبوعية بسهولة
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <FileText className="w-12 h-12 text-success-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">الموارد التعليمية</h3>
          <p className="text-gray-600">
            الوصول إلى جميع المواد التعليمية والملاحظات في مكان واحد
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Award className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">بنك الأسئلة</h3>
          <p className="text-gray-600">
            بنك شامل للأسئلة والامتحانات التجريبية لجميع المواد
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">تتبع التقدم</h3>
          <p className="text-gray-600">
            متابعة التقدم التعليمي والأداء بشكل مرئي وواضح
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Users className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">إدارة الطلاب</h3>
          <p className="text-gray-600">
            للمعلمين: إدارة الطلاب وتقييمهم وتنظيمهم حسب الصفوف والمواد
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <GraduationCap className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">لوحة تحكم ذكية</h3>
          <p className="text-gray-600">
            لوحات تحكم مخصصة لكل من الطلاب والمعلمين
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          حول المنصة
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">للطلاب:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 ml-2">✓</span>
                <span>رفع البحوث والواجبات والتقييمات</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 ml-2">✓</span>
                <span>الوصول إلى بنك الأسئلة والامتحانات التجريبية</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 ml-2">✓</span>
                <span>متابعة التقدم والدرجات</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 ml-2">✓</span>
                <span>لوحة تحكم شخصية</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">للمعلمين:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-success-600 ml-2">✓</span>
                <span>رفع الموارد التعليمية والملاحظات</span>
              </li>
              <li className="flex items-start">
                <span className="text-success-600 ml-2">✓</span>
                <span>إنشاء وإدارة بنك الأسئلة</span>
              </li>
              <li className="flex items-start">
                <span className="text-success-600 ml-2">✓</span>
                <span>تقييم الطلاب وإدارة الصفوف</span>
              </li>
              <li className="flex items-start">
                <span className="text-success-600 ml-2">✓</span>
                <span>متابعة أداء الطلاب</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
