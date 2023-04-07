import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CiPaperplane } from "react-icons/ci";

const HomeContact = () => {
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
    <div className="px-2 my-10 mt-24">
      <div className="container mx-auto">
        <h2 className="section-title3 text-xl md:text-2xl lg:text-3xl my-4 font-semibold mb-8 text-center">
          Contact
        </h2>
        {/* form */}
        <div className="">
          <form ref={form} onSubmit={sendEmail} className="md:w-6/12 mx-auto">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <p className="text-lg font-semibold uppercase mb-2">
                  Your Name
                </p>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="border w-full py-2 px-4 border-[#6d6d6d] outline-0 focus-visible:border-[#E33324]"
                />
              </div>
              <div>
                <p className="text-lg font-semibold uppercase mb-2">
                  Your email
                </p>
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
      </div>
    </div>
  );
};

export default HomeContact;
