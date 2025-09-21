"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import siteConfig from "@/config/siteConfig.json";

import Typed from "typed.js";
import { FaPlay } from "react-icons/fa6";

import VideoModal from "../common/VideoModal";
import ImageComponent from "../common/ImageComponent";

import { socialShare } from "@/lib/utils/helper/social";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";

export default function HomeHero({ hero = undefined }) {
  const [modalShow, setModalShow] = useState(false);
  const { social } = siteConfig;
  const {
    title,
    sub_title,
    image,
    video,
    typed_title,
    email,
    experience,
    shape,
  } = hero?.frontmatter || {};

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
        <div className="line-col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
            <div className="left">
              <div className="pb-20" ref={fadeAnim1} data-on-scroll="0">
                <h1 className="typed_title color-primary">
                  {typed_title.label}{" "}
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
                  <p>{sub_title}</p>
                </div>
              </div>

              {social && social.length && (
                <div
                  className="follow"
                  ref={fadeAnim2}
                  data-on-scroll="0"
                  data-delay=".8"
                >
                  <div className="social">
                    <h3 className="follow-me">Follow Me</h3>
                    <ul className="hover-zoom">
                      {social.map((item, i) => (
                        <li key={`hero_social_link-${i}`}>
                          {socialShare(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
            <div className="right">
              <div className="hero-img">
                <Image
                  width={690}
                  height={820}
                  style={{ height: "auto" }}
                  priority
                  src={image}
                  className="jh-img"
                  alt="Hero image"
                />
              </div>
              <div className="info-wrapper">
                <div className="hello" ref={fadeAnim3}>
                  <div className="say_hello ">
                    <p>Say hello!</p>
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </div>
                </div>

                <div className="experience">
                  <div>
                    <h3 className="content">
                      <span>
                        {experience.number}
                        {experience.suffix}
                      </span>{" "}
                      Years of <br />
                      Experiences
                    </h3>
                  </div>
                  <div className="work-process">
                    <p
                      className="image-link"
                      onClick={() => setModalShow(true)}
                    >
                      <FaPlay />
                    </p>
                    <span>
                      work <br /> Process
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {shape && shape.enable && (
        <ImageComponent
          width={104}
          height={132}
          src={shape.light_img}
          darkSrc={shape.dark_img || shape.light_img}
          customHeight="auto"
          alt="Shape Image"
          className="hero-shape"
        />
      )}
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        link={video}
      />
    </section>
  );
}
