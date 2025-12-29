import { useState } from 'react'
import { User, Edit2, Save, X } from 'lucide-react'

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: '',
    nationalId: '',
    gender: 'ذكر',
    religion: 'الإسلام',
    gradeLevel: '',
    school: '',
    governorate: '',
    subjects: [],
    studyGoals: '',
    skills: [],
  })

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleSubjectsChange = (value) => {
    const subjects = value.split(',').map(s => s.trim()).filter(s => s)
    setProfile(prev => ({ ...prev, subjects }))
  }

  const handleSkillsChange = (value) => {
    const skills = value.split(',').map(s => s.trim()).filter(s => s)
    setProfile(prev => ({ ...prev, skills }))
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
              : 'bg-primary-600 text-white hover:bg-primary-700'
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="14 رقم"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.school}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الصف الدراسي
          </label>
          {isEditing ? (
            <select
              value={profile.gradeLevel}
              onChange={(e) => handleChange('gradeLevel', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <optgroup label="المرحلة الابتدائية">
                <option>الصف الأول الابتدائي</option>
                <option>الصف الثاني الابتدائي</option>
                <option>الصف الثالث الابتدائي</option>
                <option>الصف الرابع الابتدائي</option>
                <option>الصف الخامس الابتدائي</option>
                <option>الصف السادس الابتدائي</option>
              </optgroup>
              <optgroup label="المرحلة الإعدادية">
                <option>أولى إعدادي</option>
                <option>ثانية إعدادي</option>
                <option>ثالثة إعدادي</option>
              </optgroup>
              <optgroup label="المرحلة الثانوية">
                <option>أولى ثانوي</option>
                <option>ثانية ثانوي</option>
                <option>ثالثة ثانوي</option>
              </optgroup>
            </select>
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{profile.gradeLevel}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المواد الدراسية
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profile.subjects.join(', ')}
              onChange={(e) => handleSubjectsChange(e.target.value)}
              placeholder="أدخل المواد مفصولة بفواصل"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.subjects.map((subject, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الأهداف الدراسية
          </label>
          {isEditing ? (
            <textarea
              value={profile.studyGoals}
              onChange={(e) => handleChange('studyGoals', e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          ) : (
            <div className="w-full px-4 py-2 bg-gray-50 rounded-lg min-h-[100px] text-gray-900">
              {profile.studyGoals}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            المهارات
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profile.skills.join(', ')}
              onChange={(e) => handleSkillsChange(e.target.value)}
              placeholder="أدخل المهارات مفصولة بفواصل"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center space-x-2 space-x-reverse px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
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

export default StudentProfile
