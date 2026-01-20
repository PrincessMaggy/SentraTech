"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function PortfolioCard({
  portfolio = undefined,
  smallItem = false,
}) {
  const { image, category, title, description } = portfolio?.frontmatter || {};
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={"portfolio-card1-small"}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="portfolio-inner">
          <div className="top-row">
            <div className="arrow-wrap">
              <FaArrowRight />
            </div>

            <Image
              width={150}
              height={150}
              src={image}
              className="jh-img"
              alt="Portfolio Thumbnail"
            />
          </div>

          <div className="text">
            <p className="category">{category?.[0]}</p>
            <p className="title">{title}</p>
          </div>
        </div>

        {/* {open && (
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
        )} */}
      </div>
    </>
  );
}
