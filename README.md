# HubCredo Assignment - Authentication System

A fully functional authentication web application with Sign Up/Login flow, email verification, and n8n webhook integration.

## 🚀 Live Demo

[View Live Deployment](#) <!-- Add your deployment link here -->

## 📋 Assignment Requirements

✅ **Completed All Requirements:**

- Clean UI for Sign Up and Login pages
- Secure credential storage using Firebase Authentication
- Proper authentication, validation, and error handling
- Dashboard page with user information
- Deployed on Vercel/Netlify/Render
- **Bonus:** n8n workflow integration for welcome emails on first verified login

## ✨ Features

### Authentication

- **Email/Password Sign Up** with validation
  - Minimum 8 character password requirement
  - Password confirmation matching
  - Duplicate email detection
- **Google OAuth Sign In** for quick access
- **Email Verification** - Users must verify their email before accessing the dashboard
- **Forgot Password** functionality with email existence validation
- **Protected Routes** - Dashboard only accessible to authenticated users

### User Experience

- **Custom Toast Notifications** - Clean, non-intrusive feedback for all user actions
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Split-screen Layout** - Modern UI with branded design elements
- **Loading States** - Smooth transitions and user feedback
- **Error Handling** - Clear, helpful error messages for all scenarios

### Security Features

- Firebase Authentication for secure credential management
- Email verification enforcement before dashboard access
- Environment variables for sensitive data protection
- Proper session management and auto-logout
- CORS-protected API calls

### Bonus - n8n Workflow Integration

- **Welcome Email Automation** - Sends welcome email to users on their first verified login
- **One-time Trigger** - Uses localStorage to ensure webhook fires only once per user
- **Support for Both Auth Methods** - Works for email/password and Google sign-in
- Webhook payload includes: user email, name, and UID

## 🛠️ Tech Stack

**Frontend:**

- React 18 with Hooks
- React Router v6 for navigation
- Vite for fast development and optimized builds

**Backend/Services:**

- Firebase Authentication (Email/Password + Google OAuth)
- n8n webhook integration
- ZenQuotes API for dashboard quotes (via CORS proxy)

**Styling:**

- Plain CSS with modern design patterns
- Responsive layouts with Flexbox/Grid
- Custom animations and transitions

## 📁 Project Structure

```
src/
├── components/
│   └── Toast.jsx              # Reusable notification component
├── pages/
│   ├── LandingPage.jsx        # Home page
│   ├── Login.jsx              # Login with email/Google
│   ├── Signup.jsx             # Registration form
│   ├── ForgotPassword.jsx     # Password reset
│   └── Dashboard.jsx          # Protected user dashboard
├── styles/
│   ├── Login.css
│   ├── Signup.css
│   ├── ForgotPassword.css
│   ├── Dashboard.css
│   └── Toast.css
├── firebase.js                # Firebase configuration
├── App.jsx                    # Route definitions
└── main.jsx                   # App entry point
```

- **Desktop:** Split-screen layout with form on left, image on right
- **Mobile (< 768px):** Single column layout, image hidden
- **Tablet:** Optimized spacing and font sizes
- All interactive elements have proper touch targets

## 🎨 UI/UX Highlights

- Clean, modern design with consistent branding
- Smooth transitions and animations
- Toast notifications instead of alerts
- Form validation with helpful error messages
- Loading states for async operations
- Logout confirmation modal with blur backdrop
- Random inspirational quotes on dashboard
- Verified badge for email-verified users

## 🔒 Security Considerations

- ✅ Environment variables for sensitive data
- ✅ `.env` file gitignored
- ✅ Firebase security rules (configured in Firebase Console)
- ✅ Email verification required before dashboard access
- ✅ Protected routes with authentication checks
- ✅ Secure session management
- ✅ CORS proxy for external API calls

##Thanking You:
-Mayukh Bhowmik
