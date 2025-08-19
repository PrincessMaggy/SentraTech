"use client";

import { useEffect, useRef } from "react";

import SkillCard1 from "./card/SkillCard1";

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
      <div className="container g-0 line pb-120 pt-130">
        <div className="line-col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="sec-title-wrapper">
            <div className="pb-20">
              <h2 className="sec-sub-title" ref={textRevealAnim}>
                {sec_name}
              </h2>
            </div>
            <h3 className="sec-title" ref={textMoveAnim}>
              {title}
            </h3>
          </div>
          {skills && skills.length && (
            <div className="grid-3" ref={fadeAnim}>
              {skills.map((skill, i) => (
                <SkillCard1 key={`skill_item-${i}`} skill={skill} i={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
