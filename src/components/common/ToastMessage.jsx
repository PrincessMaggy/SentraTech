import React, { useEffect } from "react";

export default function ToastMessage({
  message,
  type = "success",
  onClose,
  duration = 10000,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`toast toast-${type}`}
      style={{
        display: "block",
        marginTop: "8px",
        padding: "12px 20px",
        borderRadius: "6px",
        color: "white",
        backgroundColor: type === "error" ? "#dc2626" : "#16a34a",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        animation: "slideIn 0.3s ease-out, fadeOut 0.5s ease-in 9.5s",
        transformOrigin: "top center",
        willChange: "transform, opacity",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {message}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          backgroundColor: "rgba(255,255,255,0.5)",
          width: "100%",
          animation: `progress ${duration}ms linear forwards`,
        }}
      />
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(-20px) scale(0.95);
            opacity: 0;
          }
        }

        @keyframes progress {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }

        .toast {
          font-family: inherit;
          font-size: 14px;
          line-height: 1.5;
          max-width: 350px;
          white-space: pre-wrap;
          word-break: break-word;
        }
      `}</style>
    </div>
  );
}
