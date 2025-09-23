"use client";

import { useEffect, useRef } from "react";

import ServiceCard from "./card/ServiceCard";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

export default function HomeService({
  service = undefined,
  services,
  rootUrl = "",
  home = false,
}) {
  const { sec_name, sec_title, short_details } = service?.frontmatter || {};

  const charAnim = useRef("");
  const textRevealAnim = useRef("");
  const textMoveAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasTextRevealAnim(textRevealAnim.current);
    hasTextMoveAnim(textMoveAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <section className="service-section">
      <div className={`container g-0 line ${home ? "pt-120" : "pt-70 pb-30"}`}>
        {home && (
          <>
            <div className="line-col-3">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="sec-title-wrapper">
                  <div className="pb-15">
                    <h2 className="sec-sub-title" ref={charAnim}>
                      {sec_name}
                    </h2>
                  </div>
                  <h3
                    className="sec-title"
                    ref={textRevealAnim}
                    dangerouslySetInnerHTML={convertWithBrSpanImg(sec_title)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="sec-text-width" ref={textMoveAnim}>
                  <p
                    dangerouslySetInnerHTML={convertWithBrSpanImg(
                      short_details
                    )}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {services && services.length && (
          <div className="grid" ref={fadeAnim}>
            {services.map((item, i) => (
              <ServiceCard
                key={`service_card-${i}`}
                service={item}
                i={i}
                rootUrl={rootUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
