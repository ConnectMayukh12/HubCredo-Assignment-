import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [quote, setQuote] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser && !isLoggingOut) {
        navigate("/login");
      } else if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate, isLoggingOut]);

  useEffect(() => {
    // Fetch random quote using CORS proxy
    fetch(import.meta.env.VITE_QUOTE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuote(data[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch quote:", err));
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    setIsLoggingOut(true);
    signOut(auth)
      .then(() => {
        setToast({
          message: "You have been logged out successfully.",
          type: "success",
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        setIsLoggingOut(false);
        setToast({
          message: err.message,
          type: "error",
        });
      });
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <span>A</span>
          </div>
          <span className="dashboard-logo-text">Hubcredo </span>
        </div>
        <button onClick={handleLogoutClick} className="dashboard-logout-button">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="dashboard-welcome-card">
          <div className="dashboard-avatar">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <h1 className="dashboard-welcome-title">Welcome back!</h1>

          <p className="dashboard-user-email">{user?.email}</p>

          {user?.displayName && (
            <p className="dashboard-user-name">{user.displayName}</p>
          )}

          {user?.emailVerified && (
            <span className="dashboard-verified-badge">Verified</span>
          )}
        </div>

        {/* Quote Section */}
        {quote && (
          <div className="dashboard-quote-card">
            <svg
              className="dashboard-quote-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="dashboard-quote-text">"{quote.q}"</p>
            <p className="dashboard-quote-author">— {quote.a}</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>Assignment by Hubcredo</p>
      </footer>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Are you absolutely sure?</h2>
            <p className="modal-description">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
            <div className="modal-actions">
              <button onClick={handleCancel} className="modal-cancel-button">
                Cancel
              </button>
              <button onClick={handleLogout} className="modal-continue-button">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

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
