// Hero.js
import image from "../assets/DSC09117.png";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.async = true;
    script.onload = () => {
      // Once script is loaded, initialize Typed.js
      new window.Typed("#element", {
        strings: ["Web Developer", "EC Engineer", " a Cricket Enthusiast"],
        typeSpeed: 50,
        showCursor: false,
      });
    };
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <h4 className="text-center text-xl font-bold">Hi and welcome to</h4>
          <h2 className="text-center text-blue-500 text-5xl font-bold">
            My Portfolio Website
          </h2>
        </div>
        <p className="text-center text-xl">
          I am Radha Kishan Sharma ,{" "}
          <p className="text-lg text-violet-900" id="element">
            Loading...
          </p>
        </p>
        <div className="flex justify-center space-x-4">
          {/* Social Media Icons with Links */}
          <a
            href="https://x.com/RkSharm11206783?t=tLqngC5kdHZCYmx53jMi1A&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="text-3xl cursor-pointer hover:text-blue-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/radha-kishan-sharma-28290623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="text-3xl cursor-pointer hover:text-blue-500"
            />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="text-3xl cursor-pointer hover:text-blue-500"
            />
          </a>
          <a
            href="https://www.instagram.com/rk_sharma_118?utm_source=qr&igsh=MWlueXpqOTFna3l6dA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="text-3xl cursor-pointer hover:text-blue-500"
            />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img src="./src/assets/IMG-20220409-072230.png" style={{ borderRadius: "50%",height:"400px",width:"500px" }}  />
      </div>
    </section>
  );
}
