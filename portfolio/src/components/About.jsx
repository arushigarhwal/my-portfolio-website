import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  const onButtonClick = () => {
    const pdfUrl = "";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = ""; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="p-5">
        <h1 className="text-3xl underline  decoration-blue-500">About me</h1>

        <div>3rd Year CSE Student</div>
        <div>at Vellore Institute of Technology, Chennai</div>
        <div className="flex space-x-4 pt-3">
          <a href="https://www.linkedin.com/in">
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagramSquare className="w-10 h-10" />
          </a>
          <a href="https://github.com">
            <FaGithub className="w-10 h-10" />
          </a>
        </div>

        <button className="border-2 p-2 mt-3" onClick={onButtonClick}>
          Download CV
        </button>

      </div>
    </>
  );
}