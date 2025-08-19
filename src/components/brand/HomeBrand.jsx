"use client";

import { useEffect, useRef } from "react";

import ImageAutoSlider from "../common/ImageAutoSlider";

import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

export default function HomeBrand({ brand = undefined }) {
  const { title, items } = brand?.frontmatter || {};

  const textRevealAnim = useRef("");

  useEffect(() => {
    hasTextRevealAnim(textRevealAnim.current);
  }, []);
  return (
    <section className="brand">
      <div className="container g-0 line">
        <div className="line-col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-4">
            <div className="title-width">
              <h2 className="title" ref={textRevealAnim}>
                {title}
              </h2>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-8">
            <div className="width">
              {items && items.length && (
                <ImageAutoSlider
                  slides={items}
                  identity="brand_logo"
                  spreed={60}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
