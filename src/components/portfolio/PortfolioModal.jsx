import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function PortfolioModal({ isOpen, onClose, portfolio }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { title, description, benefits, outline, cta_text } =
    portfolio?.frontmatter || {};

  return (
    <div
      className={`portfolio-modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`portfolio-modal-content`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FaXmark />
        </button>

        <div className="coming-soon-badge">Coming Soon</div>

        <h2>{title}</h2>
        <p className="description">{description}</p>

        <div className="details-grid">
          {benefits && benefits.length > 0 && (
            <div className="benefits-section">
              <h3>Program Benefits</h3>
              <ul>
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {outline && outline.length > 0 && (
            <div className="outline-section">
              <h3>Course Outline</h3>
              <ul>
                {outline.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="modal-actions">
          <a
            href="https://forms.gle/RnbHxdH9SsENyKNt7"
            target="_blank"
            rel="noopener noreferrer"
            className="waitlist-btn btn-hover-mask"
            data-text="Join Waitlist"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
