"use client";

import { useEffect, useRef } from "react";

import SkillCard from "./card/SkillCard";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

export default function HomeSkill({ skill = undefined }) {
  const { sec_name, title, skills } = skill?.frontmatter || {};

  const textRevealAnim = useRef("");
  const textMoveAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasTextRevealAnim(textRevealAnim.current);
    hasTextMoveAnim(textMoveAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);

  return (
    <section className="skill">
      <div className="container g-0 line pb-20 pt-10">
        <div className="col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="sec-title-wrapper">
            <div className="pb-10">
              <h2
                className="sec-sub-title"
                style={{ textAlign: "left" }}
                ref={textRevealAnim}
              >
                {sec_name}
              </h2>
            </div>
            <h5 className="sec-title" ref={textMoveAnim}>
              {title}
            </h5>
          </div>
          {skills && skills.length && (
            <div className="grid-3" ref={fadeAnim}>
              {skills.map((skill, i) => (
                <SkillCard key={`skill_item-${i}`} skill={skill} i={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
