# دليل النشر - EduPlannerHub

هذا الدليل يشرح كيفية نشر EduPlannerHub على منصات مختلفة.

## النشر على Vercel

### الخطوات:

1. **تثبيت Vercel CLI:**
```bash
npm i -g vercel
```

2. **تسجيل الدخول:**
```bash
vercel login
```

3. **النشر:**
```bash
vercel
```

أو ربط المشروع مباشرة من [Vercel Dashboard](https://vercel.com)

### إعدادات Vercel:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## النشر على Netlify

### الخطوات:

1. **تثبيت Netlify CLI:**
```bash
npm i -g netlify-cli
```

2. **تسجيل الدخول:**
```bash
netlify login
```

3. **النشر:**
```bash
netlify deploy --prod
```

### إعدادات Netlify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (root)

## النشر على GitHub Pages

### الخطوات:

1. **تثبيت gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **إضافة script في package.json:**
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **النشر:**
```bash
npm run deploy
```

### إعدادات GitHub Pages:
- **Source:** `gh-pages` branch
- **Folder:** `/ (root)`

## النشر على Firebase Hosting

### الخطوات:

1. **تثبيت Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **تسجيل الدخول:**
```bash
firebase login
```

3. **تهيئة المشروع:**
```bash
firebase init hosting
```

4. **النشر:**
```bash
npm run build
firebase deploy
```

## متغيرات البيئة

إذا كنت تستخدم متغيرات بيئة، تأكد من إضافتها في إعدادات المنصة:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=EduPlannerHub
```

## ملاحظات مهمة

- تأكد من أن جميع المسارات النسبية تعمل بشكل صحيح
- اختبر البناء محلياً قبل النشر: `npm run build && npm run preview`
- تأكد من تحديث `base` في `vite.config.js` إذا كان المشروع في subdirectory

## الدعم

إذا واجهت أي مشاكل في النشر، افتح issue في المستودع.

