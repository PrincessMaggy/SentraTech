"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function PortfolioCard({
  portfolio = undefined,
  onClick
}) {
  const { image, category, title,  } = portfolio?.frontmatter || {};

  return (
    <>
      <div
        className={"portfolio-card1-small"}
        onClick={onClick}
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
      </div>
    </>
  );
}
