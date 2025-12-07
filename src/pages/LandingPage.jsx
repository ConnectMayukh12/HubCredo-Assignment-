import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          right: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 1000,
          borderRadius: "30px",
          border: "4px solid blue",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Hubcredo</div>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                width: "40px",
                height: "40px",
                position: "relative",
                zIndex: 1002,
              }}
            >
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  position: "absolute",
                  top: isMenuOpen ? "50%" : "calc(50% - 8px)",
                  left: "50%",
                  transform: isMenuOpen
                    ? "translate(-50%, -50%) rotate(45deg)"
                    : "translate(-50%, -50%)",
                }}
              ></span>
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              ></span>
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  position: "absolute",
                  top: isMenuOpen ? "50%" : "calc(50% + 8px)",
                  left: "50%",
                  transform: isMenuOpen
                    ? "translate(-50%, -50%) rotate(-45deg)"
                    : "translate(-50%, -50%)",
                }}
              ></span>
            </button>

            {isMenuOpen && (
              <>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 999,
                  }}
                ></div>
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "white",
                    zIndex: 1001,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.5rem",
                    padding: "2rem",
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      maxWidth: "300px",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                        padding: "1.25rem 2rem",
                        border: "2px solid #333",
                        backgroundColor: "white",
                        color: "#333",
                        cursor: "pointer",
                        borderRadius: "8px",
                        fontSize: "1.2rem",
                      }}
                    >
                      Log In
                    </button>
                  </Link>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      maxWidth: "300px",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                        padding: "1.25rem 2rem",
                        border: "none",
                        backgroundColor: "#22c55e",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "8px",
                        fontSize: "1.2rem",
                      }}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/login">
              <button
                style={{
                  padding: "0.75rem 2rem",
                  border: "2px solid #333",
                  backgroundColor: "white",
                  color: "#333",
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              >
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button
                style={{
                  padding: "0.75rem 2rem",
                  border: "none",
                  backgroundColor: "#22c55e",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>

      <div
        style={{
          marginTop: "120px",
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            margin: "0",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          Solution of Assignment
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            margin: "1.5rem 0",
            opacity: "0.7",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          Approach By Mayukh Bhowmik
        </p>
        <p
          style={{
            fontSize: "1rem",
            opacity: "0.5",
            margin: "0.5rem 0 2.5rem 0",
          }}
        >
          Assignment by Hubcredo
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link to="/signup">
            <button
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "none",
                backgroundColor: "#22c55e",
                color: "white",
                cursor: "pointer",
                borderRadius: "12px",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(34, 197, 94, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(34, 197, 94, 0.3)";
              }}
            >
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "2px solid #333",
                backgroundColor: "white",
                color: "#333",
                cursor: "pointer",
                borderRadius: "12px",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
