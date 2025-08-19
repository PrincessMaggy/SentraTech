"use client";

import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  FaArrowRight,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";

export default function MainContact({ line = false, customPaddingClass }) {
  const { footer_info } = siteConfig;
  const { mobile, email, address } = footer_info;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast("Message send successfully");
      reset();
    }
    if (!response.ok) {
      toast("Error sending message");
    }
  };
  return (
    <section
      className={`contact-section ${customPaddingClass || ""}`}
      id="contact"
    >
      <div className="container g-0 line pt-130 pb-130">
        {line && (
          <div className="line-col-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
            <div className="left">
              <div className="sec-title-wrapper">
                <div className="pb-20">
                  <h2 className="sec-sub-title">Contact</h2>
                </div>
                <h3 className="sec-title">Get in Touch</h3>
              </div>
              <div className="grid">
                <div className="type">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="name">Phone</h4>
                    <Link href={`tel:${mobile}`}>{mobile}</Link>
                  </div>
                </div>
                <div className="type">
                  <div className="icon">
                    <FaPaperPlane />
                  </div>
                  <div>
                    <h4 className="name">Email</h4>
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </div>
                </div>
                <div className="type">
                  <div className="icon">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h4 className="name">Address</h4>
                    <Link href={address.link}>{address.name}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
            <div className="right">
              <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-item">
                    <label htmlFor="user_name">Name</label>
                    <input
                      type="text"
                      placeholder="Name*"
                      {...register("user_name", {
                        required: "Name is required",
                        maxLength: {
                          value: 30,
                          message: "Maximum length 30",
                        },
                      })}
                    />
                    {errors.user_name && (
                      <p role="alert">{errors.user_name.message}</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_email">Email</label>
                    <input
                      type="email"
                      placeholder="Email*"
                      {...register("user_email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.user_email && (
                      <p role="alert">{errors.user_email.message}</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_mobile">Phone</label>
                    <input
                      type="number"
                      placeholder="Phone*"
                      {...register("user_mobile", {
                        required: "Mobile number is required",
                      })}
                    />
                    {errors.user_mobile && (
                      <p role="alert">{errors.user_mobile.message}</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_subject">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject*"
                      {...register("user_subject", {
                        required: "Subject is required",
                        maxLength: {
                          value: 30,
                          message: "Maximum length 30",
                        },
                      })}
                    />
                    {errors.user_subject && (
                      <p role="alert">{errors.user_subject.message}</p>
                    )}
                  </div>
                  <div className="input-item full">
                    <label htmlFor="user_message">Message</label>
                    <textarea
                      placeholder="Messages*"
                      {...register("user_message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.user_message && (
                      <p role="alert">{errors.user_message.message}</p>
                    )}
                  </div>
                  <div className="input-item submit">
                    <button
                      type="submit"
                      className="btn-hover-mask"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit <FaArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
