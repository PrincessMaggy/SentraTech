"use client";

import { useEffect, useRef, useState } from "react";

import Typed from "typed.js";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";

export default function HomeHero({ hero = undefined }) {
  const { title, sub_title, typed_title } = hero?.frontmatter || {};

  const typed = useRef();
  const typeList = useRef();

  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");
  const fadeAnim3 = useRef("");
  const textRevealAnim = useRef("");
  const textMoveAnim = useRef("");

  useEffect(() => {
    var hero_1 = new Typed(typed.current, {
      stringsElement: typeList.current,
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "|",
      loop: true,
    });
    return () => {
      hero_1.destroy();
    };
  }, []);

  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
    hasFadeAnim(fadeAnim3.current);

    hasTextRevealAnim(textRevealAnim.current);
    hasTextMoveAnim(textMoveAnim.current);
  }, []);

  return (
    <section className="hero">
      <div className="container g-0 line">
        <div className="col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
            <div className="left">
              <div className="title-area">
                <div className="pb-0">
                  <h2
                    className="title"
                    data-on-scroll="0"
                    data-delay="0.65"
                    ref={textRevealAnim}
                  >
                    {title}
                  </h2>
                </div>

                <div data-on-scroll="0" data-delay="0.8" ref={textMoveAnim}>
                  <p className="" style={{ color: "var(--white)" }}>
                    {sub_title}
                  </p>
                </div>
              </div>
              <div
                className="pb-30 mt-20 mb-30"
                ref={fadeAnim1}
                data-on-scroll="0"
              >
                <h1 className="typed_title">
                  <span id="typed_list" ref={typeList}>
                    {typed_title.text && typed_title.text.length
                      ? typed_title.text.map((item, i) => (
                          <span key={`type_list-${i}`}>{item}</span>
                        ))
                      : ""}
                  </span>
                  <span id="typed" ref={typed}></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
