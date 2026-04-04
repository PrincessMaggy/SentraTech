import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function JoinCommunityCTA() {
  return (
    <section className="community-cta w-100">
      <div className="cta-card">
        <div className="cta-image">
          <Image
            src="/assets/imgs/community.png"
            alt="Join our community"
            width={240}
            height={240}
          />
        </div>

        <div className="cta-content">
          <p className="label">Get in Touch</p>
          <h3 className="title">Join Our Community</h3>
        </div>

        <a
          href="https://join.slack.com/t/sentratechinstitute/shared_invite/zt-3urelpj8g-H7zjpItq1lerkz0MRvLkuw"
          target="_blank"
          className="arrow-wrap"
        >
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
