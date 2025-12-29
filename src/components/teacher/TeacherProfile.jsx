import { useState } from 'react'
import { User, Edit2, Save, X } from 'lucide-react'

function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: '',
    nationalId: '',
    gender: 'ذكر',
    religion: 'الإسلام',
    subject: '',
    experience: '',
    school: '',
    governorate: '',
    email: '',
    phone: '',
    birthYear: '',
    teachingStyle: '',
  })

  const subjects = []

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <User className="w-6 h-6 ml-2" />
          الملف الشخصي
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
            isEditing
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-success-600 text-white hover:bg-success-700'
          }`}
        >
          {isEditing ? (
            <>
              <X className="w-4 h-4" />
              <span>إلغاء</span>
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4" />
              <span>تعديل</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الاسم الكامل
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profile.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500 focus:border-transparent"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.fullName}</div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الرقم القومي
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.nationalId}
                onChange={(e) => handleChange('nationalId', e.target.value)}
                maxLength="14"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              />
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.nationalId}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الجنس
            </label>
            {isEditing ? (
              <select
                value={profile.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              >
                <option>ذكر</option>
                <option>أنثى</option>
              </select>
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.gender}</div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الديانة
            </label>
            {isEditing ? (
              <select
                value={profile.religion}
                onChange={(e) => handleChange('religion', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              >
                <option>الإسلام</option>
                <option>المسيحية</option>
                <option>أخرى</option>
              </select>
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.religion}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              المحافظة
            </label>
            {isEditing ? (
              <select
                value={profile.governorate}
                onChange={(e) => handleChange('governorate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              >
                <option>القاهرة</option>
                <option>الجيزة</option>
                <option>الإسكندرية</option>
                <option>المنصورة</option>
                <option>طنطا</option>
                <option>أسيوط</option>
                <option>سوهاج</option>
                <option>الأقصر</option>
                <option>أسوان</option>
              </select>
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.governorate}</div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المدرسة
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profile.school}
              onChange={(e) => handleChange('school', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.school}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المادة التي أدرسها
          </label>
          {isEditing ? (
            <select
              value={profile.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500 focus:border-transparent"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.subject}</div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              سنوات الخبرة
            </label>
            {isEditing ? (
              <input
                type="number"
                value={profile.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              />
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.experience} سنة</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              />
            ) : (
              <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.email}</div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            أسلوب التدريس
          </label>
          {isEditing ? (
            <textarea
              value={profile.teachingStyle}
              onChange={(e) => handleChange('teachingStyle', e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-success-500"
              placeholder="اكتب عن أسلوبك في التدريس..."
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg min-h-[150px] text-gray-900">
              {profile.teachingStyle}
            </div>
          )}
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center space-x-2 space-x-reverse px-6 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>حفظ التغييرات</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeacherProfile
