import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="px-2 my-10">
      <div className="container mx-auto">
        <h2 className="section-title section-title-primary text-center text-xl md:text-2xl lg:text-3xl my-4 font-semibold mb-8">
          Hi there, I am Quazi Fahim Mohammadullah
        </h2>
        <div className="flex flex-col justify-between">
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              A college graduate with more than 3 years of experience in
              marketing, event organizing, and administrative management. From
              an early age, I was always curious and interested in understanding
              how businesses work and the marketing they do to attract
              customers. Visiting public places, like stores and restaurants,
              I'd try to understand their business policies and the strengths
              and flaws and possible changes to be made. I have, therefore,
              grabbed any and every opportunity that was put in front of me to
              be able to actively observe and participate. As a result, I
              started experimenting, along with my friends, on many projects,
              some successful and some, not so much, as a high-school student.
            </p>
          </Fade>
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              I wanted to explore my options and understand what appeals to me
              and therefore, accepted employment for different positions in
              various organizations in Bangladesh and Canada. I founded a travel
              agency and learned how to run and grow a business. I also founded
              a charitable organization, understanding how serving the community
              and bringing smiles to people's faces, and receiving blessings can
              be so much more rewarding and fulfilling than money.{" "}
            </p>
          </Fade>
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              Through all of my professional and entrepreneurial endeavors, I've
              developed multiple skillsets and the confidence to take on any
              challenges put forth to me. I am mindful of client needs and
              prepared to separate specialized issues to foster effective
              arrangements. Adaptable in settling client concerns and requests
              and precisely recording call details, planning reports, and
              masterminding administration. Knowledgeable in giving
              accommodating answers and applicable data to retain customers.
            </p>
          </Fade>
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              I believe that I still have a long way to go and much to learn. As
              such, I'm keeping my job preferences open to marketing, event
              organizing, accounting, and management positions. Even though I
              have worked on solo projects before, I prefer joining a team,
              where I can collaborate and learn from my peers. I realized from
              past experiences, that the best way to learn and grow in a
              professional environment is to work within a team. And possessing
              extreme curiosity and a joyful personality, I believe that I can
              also add to the team and boost workplace morale.{" "}
            </p>
          </Fade>
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              Please feel free to reach out to me regarding any further queries.
            </p>
          </Fade>
          <Fade left>
            <p className="mb-2 text-sm text-justify	text-[#6C757D]">
              <strong>Thank you!</strong>
            </p>
          </Fade>
          {/* Social Links */}
          <div className="flex items-center">
            <Fade bottom>
              <Link to="">
                <FaFacebookF className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="">
                <FaLinkedinIn className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="">
                <FaTwitter className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="">
                <FaInstagram className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
              </Link>
            </Fade>
            <Fade bottom>
              <Link to="">
                <FaWhatsapp className="text-[#6C757D] text-4xl border border-[#6C757D] p-2 mr-3 hover:text-[#E33324] hover:border-[#E33324] transition-all" />
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
