import React from "react";
import { motion } from "framer-motion";
import aboutUsIMG from "../assets/aboutUsIMG.jpg";
import aboutUsIMG1 from "../assets/aboutUsIMG1.jpg";
import aboutUsIMG2 from "../assets/aboutUsIMG2.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <motion.div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-12"
        initial={{ opacity: 0, translateX: "-100px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1.5 },
        }}
      >
        <img src={aboutUsIMG} alt="/" className="max-w-full max-h-80 mt-8" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Introduction
          </h1>
          <p>
            HERITAGE HOME CONSTRUCTION is a local Qatari company lead by a team
            of professional members who take great pride in delivering superior
            business results. The team is comprised of a well-educated blend of
            unique talents in commercial construction, interior designing and
            fit out, facility management and maintenance, and trading
            opportunity development. Our service offering, experience, market
            knowledge, resources and staff allow us to meet each project’s
            increasingly complex requirements with competitive practical
            solutions. HERITAGE HOME CONSTRUCTION’s aim is to continue growing
            based on a service delivery model designed for long-term working
            partnerships with our clients and help them achieve success through
            a ‘one team one vision’ to construction and facilities services. We
            always aim to provide a greater value for money while maintaining
            our professional approach and desired service quality. Motivated and
            trained staff is the cornerstone of our professional service
            delivery and client's satisfaction. It is with this in mind that we
            carefully select staff to deliver our projects. All our staff
            members go through an induction period where basic skills are
            imparted to them. We are very proud of our in-house training
            program, which has a strong approach to technical skills and
            industry knowledge.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-12"
        initial={{ opacity: 0, translateX: "-100px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1.5 },
        }}
      >
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            About the flourishing economy
          </h1>
          <p>
            HERITAGE HOME CONSTRUCTION is a local Qatari company lead by a team
            of professional members who take great pride in delivering superior
            business results. The team is comprised of a well-educated blend of
            unique talents in commercial construction, interior designing and
            fit out, facility management and maintenance, and trading
            opportunity development. Our service offering, experience, market
            knowledge, resources and staff allow us to meet each project’s
            increasingly complex requirements with competitive practical
            solutions. HERITAGE HOME CONSTRUCTION’s aim is to continue growing
            based on a service delivery model designed for long-term working
            partnerships with our clients and help them achieve success through
            a ‘one team one vision’ to construction and facilities services. We
            always aim to provide a greater value for money while maintaining
            our professional approach and desired service quality. Motivated and
            trained staff is the cornerstone of our professional service
            delivery and client's satisfaction. It is with this in mind that we
            carefully select staff to deliver our projects. All our staff
            members go through an induction period where basic skills are
            imparted to them. We are very proud of our in-house training
            program, which has a strong approach to technical skills and
            industry knowledge.
          </p>
        </div>
        <img
          src={aboutUsIMG}
          alt="/"
          className="max-w-full max-h-80 mt-8 ms-8"
        />
      </motion.div>
      <motion.div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-12"
        initial={{ opacity: 0, translateX: "-100px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1.5 },
        }}
      >
        <img src={aboutUsIMG} alt="/" className="max-w-full max-h-80 mt-8" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            About the flourishing economy
          </h1>
          <p>
            HERITAGE HOME CONSTRUCTION is a local Qatari company lead by a team
            of professional members who take great pride in delivering superior
            business results. The team is comprised of a well-educated blend of
            unique talents in commercial construction, interior designing and
            fit out, facility management and maintenance, and trading
            opportunity development. Our service offering, experience, market
            knowledge, resources and staff allow us to meet each project’s
            increasingly complex requirements with competitive practical
            solutions. HERITAGE HOME CONSTRUCTION’s aim is to continue growing
            based on a service delivery model designed for long-term working
            partnerships with our clients and help them achieve success through
            a ‘one team one vision’ to construction and facilities services. We
            always aim to provide a greater value for money while maintaining
            our professional approach and desired service quality. Motivated and
            trained staff is the cornerstone of our professional service
            delivery and client's satisfaction. It is with this in mind that we
            carefully select staff to deliver our projects. All our staff
            members go through an induction period where basic skills are
            imparted to them. We are very proud of our in-house training
            program, which has a strong approach to technical skills and
            industry knowledge.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
