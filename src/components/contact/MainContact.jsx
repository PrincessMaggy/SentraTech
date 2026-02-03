"use client";

import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import { FaArrowRight, FaLocationDot, FaPaperPlane } from "react-icons/fa6";

export default function MainContact({ line = false, customPaddingClass }) {
  const { footer_info } = siteConfig;
  const { email, address } = footer_info;
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send. Please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <section
      className={`contact-section ${customPaddingClass || ""}`}
      id="contact"
    >
      <div className="container g-0 line pt-130 pb-80">
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
                <h3 className="sec-title">
                  Get in touch <br />
                  with us
                </h3>
                <p className="sec-p mt-2">
                  If you have any questions, complaints, need assistance or want
                  to provide feedback, reach out to us via email or fill the
                  form.
                </p>
              </div>
              <div className="grid">
                <div className="type">
                  <div>
                    <h4 className="nameT">Email</h4>
                    <Link href={`mailto:${email}`} className="name">
                      {email}
                    </Link>
                  </div>
                </div>
                <div className="type">
                  <div>
                    <h4 className="nameT">Address</h4>
                    <Link href={address.link} className="name">
                      {address.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
            <div className="right">
              <div className="form">
                <form
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                  className="p-3"
                >
                  <div className="input-item">
                    <label htmlFor="user_name">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name", {
                        required: "Name is required",
                        maxLength: {
                          value: 30,
                          message: "Maximum length 30",
                        },
                      })}
                    />
                    {errors.name && <p role="alert">{errors.name.message}</p>}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_email">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && <p role="alert">{errors.email.message}</p>}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_mobile">Phone Number</label>
                    <input
                      name="contact"
                      type="number"
                      placeholder="Enter your phone number"
                      {...register("contact", {
                        required: "Mobile number is required",
                      })}
                    />
                    {errors.contact && (
                      <p role="alert">{errors.contact.message}</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="user_subject">Subject</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter the subject of the message"
                      {...register("subject", {
                        required: "Subject is required",
                        maxLength: {
                          value: 90,
                          message: "Maximum length 90",
                        },
                      })}
                    />
                    {errors.subject && (
                      <p role="alert">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="input-item full">
                    <label htmlFor="user_message">How can we help you?</label>
                    <textarea
                      name="message"
                      placeholder="Enter your message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p role="alert">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="input-item submit full d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn-hover-mask"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <span className="flex items-center justify-center gap-2">
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <FaArrowRight />
                        </>
                      )}
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
