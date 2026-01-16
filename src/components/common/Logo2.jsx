"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import siteConfig from "@/config/siteConfig.json";

export default function Logo2({
  url,
  noChange = false,
  customWidth,
  customHeight,
}) {
  const { logo3, logo_width, logo_height, logo_text, title } =
    siteConfig.site_info;
  const { mode } = useContext(AppContext);

  const path = url
    ? url
    : mode === "light"
    ? noChange
      ? logo3
      : logo3
    : noChange
    ? logo3
    : logo3;

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
                width="35"
                height="35"
                src={path}
                alt={title}
                priority
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </div>
            <p
              style={{
                color: "rgba(30, 144, 255, 1)",
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
