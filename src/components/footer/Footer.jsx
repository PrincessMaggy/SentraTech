import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";

import Logo2 from "../common/Logo2";

import { socialShare } from "@/lib/utils/helper/social";
import { FaEnvelope } from "react-icons/fa6";
export default function Footer() {
  const { social, footer_info } = siteConfig;
  const { email, copyright } = footer_info;

  return (
    <footer className="footer p-4 pb-0">
      <div className="top">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="logo">
              <Logo2 customWidth={70} customHeight={50} />
            </div>
          </div>
          <div className="col-12 p-0">
            <div className="info p-4 mt-3">
              <div>
                <Link href={`mailto:${email}`} className="link">
                  <FaEnvelope /> {email}
                </Link>
              </div>
              {social && social.length && (
                <div className="social">
                  <ul className="hover-zoom">
                    {social.map((item, i) => (
                      <li key={`hero_social_link-${i}`}>{socialShare(item)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {copyright && copyright.enable && (
        <div className="footer__btm">
          <div className="copyright">
            <p>
              Copyright (c) {new Date().getFullYear()}, SentraTech Institute.
              All Rights Reserved.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
