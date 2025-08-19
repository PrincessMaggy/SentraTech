import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

export const socialShare1 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaFacebookF />
        </Link>
      );
    case "Tw":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaTwitter />
        </Link>
      );
    case "In":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaInstagram />
        </Link>
      );
    case "Yt":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaYoutube />
        </Link>
      );
    case "Tt":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaTiktok />
        </Link>
      );
  }
};

export const socialShare2 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaFacebookF />
          </span>
          facebook
        </Link>
      );
    case "Tw":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaTwitter />
          </span>
          Twitter
        </Link>
      );
    case "In":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaInstagram />
          </span>
          Instagram
        </Link>
      );
    case "Yt":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaYoutube />
          </span>
          Dribbble
        </Link>
      );
    case "Tt":
      return (
        <Link
          href={item.link}
          target="_blank"
          key={item.link}
          className="btn-hover-mask"
        >
          <span>
            <FaTiktok />
          </span>
          Linkedin
        </Link>
      );
  }
};

export const socialShare3 = (item) => {
  return (
    <Link href={item.link} target="_blank" key={item.link}>
      {item.name}
    </Link>
  );
};

export const socialShare4 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Facebook
        </Link>
      );
    case "Tw":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Twitter
        </Link>
      );
    case "In":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Instagram
        </Link>
      );
    case "Yt":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Dribbble
        </Link>
      );
    case "Tt":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          Linkedin
        </Link>
      );
  }
};

export const socialShare5 = (item) => {
  switch (item.name) {
    case "Fb":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaFacebookF />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Tw":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaTwitter />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "In":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaInstagram />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Yt":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaYoutube />
          </Link>
          <p>{item.value}</p>
        </>
      );
    case "Tt":
      return (
        <>
          <Link href={item.link} target="_blank" key={item.link}>
            <FaTiktok />
          </Link>
          <p>{item.value}</p>
        </>
      );
  }
};
