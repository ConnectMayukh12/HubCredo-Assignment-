import { useState } from "react";
import {
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../components/Toast";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      // Check if the email exists in Firebase Auth
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length === 0) {
        setToast({
          message: "No account found with this email address.",
          type: "error",
        });
        return;
      }

      // If email exists, send password reset email
      await sendPasswordResetEmail(auth, email);

      setToast({
        message: "Password reset email sent! Please check your inbox.",
        type: "success",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setToast({
        message: err.message,
        type: "error",
      });
    }
  };

  return (
    <div className="forgot-container">
      {/* Left Section - Form */}
      <div className="forgot-left">
        <div className="forgot-form-wrapper">
          {/* Back Button */}
          <button
            onClick={() => navigate("/login")}
            className="forgot-back-button"
          >
            ← Back to Login
          </button>

          {/* Logo */}
          <div className="forgot-logo">
            <div className="forgot-logo-icon">
              <span>A</span>
            </div>
            <span className="forgot-logo-text">Hubcredo </span>
          </div>

          {/* Title */}
          <h2 className="forgot-title">Reset your password</h2>
          <p className="forgot-subtitle">
            Enter your email address and we'll send you a link to reset your
            password
          </p>

          {/* Form */}
          <form onSubmit={handleReset} className="forgot-form">
            <div className="forgot-form-group">
              <label htmlFor="email" className="forgot-form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="forgot-form-input"
              />
            </div>

            <button type="submit" className="forgot-button">
              Send Reset Link
            </button>
          </form>

          {/* Login Link */}
          <p className="forgot-login-text">
            Remember your password?{" "}
            <Link to="/login" className="forgot-login-link">
              Back to Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="forgot-right">
        <img
          src={import.meta.env.VITE_LOGIN_IMAGE_URL}
          alt="Reset Password background"
          className="forgot-right-image"
        />
      </div>

      {/* Toast Notification */}
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
