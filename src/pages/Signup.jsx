import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../components/Toast";
import "../styles/Login.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);

  // Trigger webhook ONCE per actual signup
  const triggerWebhook = async (email, name, uid) => {
    const key = `webhook_sent_${uid}`;
    if (localStorage.getItem(key)) return;

    try {
      await fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, uid }),
      });

      localStorage.setItem(key, "true");
      console.log("Webhook sent (signup first-time)");
    } catch (err) {
      console.error("Webhook error:", err);
    }
  };

  const signupEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      await sendEmailVerification(user);

      // First-time signup (email)
      await triggerWebhook(user.email, user.displayName || "User", user.uid);

      setToast({
        message: "Verification email sent! Please check your inbox.",
        type: "success",
      });

      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setToast({ message: err.message, type: "error" });
    }
  };

  const signupGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const isFirstLogin =
        user.metadata.creationTime === user.metadata.lastSignInTime;

      if (isFirstLogin) {
        await triggerWebhook(user.email, user.displayName || "User", user.uid);
      }

      navigate("/dashboard");
    } catch (err) {
      setToast({ message: err.message, type: "error" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <button onClick={() => navigate("/")} className="back-button">
            ← Back
          </button>

          <div className="login-logo">
            <div className="login-logo-icon">
              <span>H</span>
            </div>
            <span className="login-logo-text">HubCredo</span>
          </div>

          <h2 className="login-title">Create your account</h2>
          <p className="login-subtitle">Enter your details to sign up</p>

          <form onSubmit={signupEmail} className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">Or continue with</span>
          </div>

          <button onClick={signupGoogle} className="google-button">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
              />
              <path
                fill="#EA4335"
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
              />
            </svg>
            Sign up with Google
          </button>

          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="login-right">
        <img
          src={import.meta.env.VITE_LOGIN_IMAGE_URL}
          alt="Signup background"
          className="login-right-image"
        />
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
