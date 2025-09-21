import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";

export const socialShare = (item) => {
  switch (item.name) {
    case "Ln":
      return (
        <Link href={item.link} target="_blank" key={item.link}>
          <FaLinkedin />
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
  }
};
