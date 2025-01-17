# Modern Coming Soon Landing Page

A sleek, animated landing page with waitlist functionality built with React, TypeScript, and Firebase. Features a modern design with gradient animations and email collection capabilities.

## 🚀 Features

- Modern, animated UI with gradient effects
- Email waitlist collection with Firebase
- Responsive design
- Loading states and error handling
- Rate limiting for submissions
- Custom animations and transitions
- Dark mode optimized

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Firebase/Firestore
- Vite
- Lucide Icons

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- Firebase account

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coming-soon-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Firebase config:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Development

```bash
npm run dev
```

## 📦 Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Background.tsx   # Animated background effects
│   └── EmailForm.tsx    # Waitlist form component
├── lib/
│   └── firebase.ts      # Firebase configuration
├── App.tsx              # Main application component
├── main.tsx            # Application entry
└── index.css           # Global styles & animations
```

## 🔥 Firebase Setup

1. Create a Firebase project
2. Enable Firestore
3. Create a 'waitlist' collection
4. Add your domain to authorized domains
5. Copy config to `.env`

## 🌐 Component References

### Main App Component
```typescript
// src/App.tsx
// Component code reference
```

### Email Form Component
```typescript
// src/components/EmailForm.tsx
// Component code reference
```

### Firebase Configuration
```typescript
// src/lib/firebase.ts
// Firebase config reference
```

## 📝 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 🔗 Links

- [Live Demo](http://digitaldoorofficial.000.pe/)

## 👤 Author

Nishij Sontakke