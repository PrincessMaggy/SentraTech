"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import siteConfig from "@/config/siteConfig.json";

export default function Logo({
  url,
  noChange = false,
  customWidth,
  customHeight,
}) {
  const { logo, logo_width, logo_height, logo_text, title } =
    siteConfig.site_info;
  const { mode } = useContext(AppContext);

  const path = url
    ? url
    : mode === "light"
    ? noChange
      ? logo
      : logo
    : noChange
    ? logo
    : logo;

  return (
    <>
      <Link href={"/"}>
        {path ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              <Image
                width={customWidth || logo_width.replace("px", "") * 2}
                height={customHeight || logo_height.replace("px", "") * 2}
                src={path}
                alt={title}
                priority
                style={{
                  height: customHeight || logo_height.replace("px", "") + "px",
                  width: customWidth || logo_width.replace("px", "") + "px",
                }}
              />
            </div>
            <p
              style={{
                color: "#FFF",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              SentraTech Institute
            </p>
          </div>
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </Link>
    </>
  );
}
