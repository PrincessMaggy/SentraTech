import Image from "next/image";

import { delayFunction } from "@/lib/utils/helper/delayFunction";

export default function SkillCard({ skill, i = 0 }) {
  return (
    <div
      className="skill-card-1 has_fade_anim"
      data-fade-from="left"
      data-delay={delayFunction(i + 1)}
    >
      <div
        style={{
          padding: "10px",
          backgroundColor: "var(--primary)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Image
          width={26}
          height={26}
          style={{ width: "auto" }}
          priority
          src={skill.image}
          alt="Skill Icon"
        />
      </div>
      <h5 className="title pb-10">{skill.name}</h5>
      <h4 className="percentage wc-counter">{skill.percentage}%</h4>
    </div>
  );
}
