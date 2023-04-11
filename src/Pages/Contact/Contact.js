import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CiPaperplane } from "react-icons/ci";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0onvpg",
        "template_u71wnic",
        form.current,
        "wXgPau5omAtnc_a3Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="px-2 my-6 md:my-8">
      <div className="container mx-auto" data-aos="zoom-in-up">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase text-center">
            Contact
          </h2>
        </div>

        {/* Content */}
        <p className="text-center mb-8">
          If you'd like to contact me or know more about me, please consider
          sending an email or visiting one of my social media accounts. <br />{" "}
          Looking forward to your acquaintance.
        </p>
        {/* Social Links */}
        <div className="flex justify-center items-center mb-8">
          <Link to="">
            <FaFacebookF className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
          </Link>
          <Link to="">
            <FaLinkedinIn className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
          </Link>
          <Link to="">
            <FaTwitter className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
          </Link>
          <Link to="">
            <FaInstagram className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
          </Link>
          <Link to="">
            <FaWhatsapp className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
          </Link>
        </div>
        <form ref={form} onSubmit={sendEmail} className="md:w-6/12 mx-auto">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <p className="text-lg font-semibold uppercase mb-2">Your Name</p>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="border w-full py-2 px-4 border-[#6d6d6d] outline-0 focus-visible:border-[#E33324]"
              />
            </div>
            <div>
              <p className="text-lg font-semibold uppercase mb-2">Your email</p>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className="border w-full py-2 px-4 border-[#6d6d6d] outline-0 focus-visible:border-[#E33324]"
              />
            </div>
            <div>
              <p className="text-lg font-semibold uppercase mb-2">
                Your Message
              </p>
              <textarea
                name="message"
                placeholder="Write your message here"
                className="border w-full py-2 px-4 h-40 border-[#6d6d6d] outline-0 focus-visible:border-[#E33324]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-2 border border-[#E33324] text-[#E33324] font-semibold text-lg flex items-center transition-all hover:bg-[#E33324] hover:text-white"
              >
                Send
                <CiPaperplane className="ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
