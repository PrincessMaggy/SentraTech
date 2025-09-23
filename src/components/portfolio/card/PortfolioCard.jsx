"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioCard({
  portfolio = undefined,
  smallItem = false,
}) {
  const { image, category, title, description } = portfolio?.frontmatter || {};
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={smallItem ? "portfolio-card1-small" : "portfolio-card1"}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <Image
          width={755}
          height={410}
          src={image}
          className="jh-img"
          alt="Portfolio Thumbnail"
        />
        <div className="content">
          <ul>
            <li>
              <p className="category">{category?.[0]}</p>
            </li>
            <li>
              <p className="title">{title}</p>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-description">
              {description || "Description will be available soon."}
            </p>

            <div className="coming-soon-flag"> Coming Soon</div>

            <button onClick={() => setOpen(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 26, 47, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        /* Modal Content */
        .modal-content {
          background: #0a1a2f;
          border: 2px solid #00e5ff;
          border-radius: 16px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          text-align: center;
          color: #ffffff;
          animation: fadeIn 0.3s ease-in-out;
          box-shadow: 0 6px 20px rgba(0, 229, 255, 0.3);
        }

        .modal-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #00e5ff;
        }

        .modal-description {
          font-size: 1rem;
          color: #a9b4c2;
          margin-bottom: 1.5rem;
        }
        .coming-soon-flag {
          margin: 1rem 0;
          padding: 0.6rem 1.2rem;
          background: linear-gradient(45deg, #00e5ff, #1e90ff, #ffffff);
          color: #0a1a2f;
          font-weight: bold;
          border-radius: 8px;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }

        .close-btn {
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          border: none;
          background: #00e5ff;
          color: #0a1a2f;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .close-btn:hover {
          background: #1e90ff;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
