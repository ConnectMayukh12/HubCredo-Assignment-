# HubCredo Assignment - Authentication System

A fully functional authentication web application featuring a complete Sign Up/Login flow, secure email verification, and n8n webhook integration for automated workflows.

## 🚀 Live Demo & Walkthrough

- **Live Deployment:** [View on Vercel](https://hub-credo-assignment-topaz.vercel.app/)
- **Explanatory Video:** [Watch Video Walkthrough](https://drive.google.com/file/d/15QDD7za5qI0Qka9qCVLI0J8SPipkOKnn/view?usp=drive_link)

---

## 📋 Assignment Requirements

✅ **Completed All Requirements:**

- Clean UI for Sign Up and Login pages
- Secure credential storage using Firebase Authentication
- Proper authentication, validation, and error handling
- Dashboard page with user information
- Deployed on Vercel
- **Bonus:** n8n workflow integration for welcome emails on first verified login
<img width="1919" height="990" alt="image" src="https://github.com/user-attachments/assets/f7fab79c-1d2c-40eb-87a7-af4f5c6709f7" />

## ✨ Features

### Authentication
- **Email/Password Sign Up** with validation:
  - Minimum 8 character password requirement
  - Password confirmation matching
  - Duplicate email detection
- **Google OAuth Sign In** for quick access
- **Email Verification** - Users must verify their email before accessing the dashboard
- **Forgot Password** functionality with email existence validation
  <img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/3de82470-fc66-44fc-a151-8e8b9bb1e22d" />

- **Protected Routes** - Dashboard only accessible to authenticated users
<img width="1919" height="996" alt="image" src="https://github.com/user-attachments/assets/0f1e5da6-b5ba-46b2-a40b-27dcc0953f41" />

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

  
<img width="981" height="590" alt="image" src="https://github.com/user-attachments/assets/18068ae0-5106-4c76-837e-8c5fc7a73614" />


### Bonus - n8n Workflow Integration
- **Welcome Email Automation** - Sends welcome email to users on their first verified login
- **One-time Trigger** - Uses `localStorage` to ensure the webhook fires only once per user
- **Support for Both Auth Methods** - Works for email/password and Google sign-in
- **Webhook Payload:** Includes user email, name, and UID

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

```text
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

```
## Thanking You:
-Mayukh Bhowmik
