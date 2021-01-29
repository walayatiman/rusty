import React from "react"
import phil from "../../images/phil.png"

const Hero = () => {
  return (
    <div className="lg:-mt-32 lg:pt-40 bg-gradient-to-b from-primary to-secondary" id="top">
      <div className="container mx-auto ">
        <div className="pt-20 px-6 md:pt-32 text-white">
          <h1 className="text-4xl primary font-bold text-center leading-10 lg:text-5xl lg:font-black md:font-black">
            DIGITAL MARKETING & WEB DESIGN
          </h1>
          <h4 className="md:w-2/3 md:mx-auto py-6 md:text-xl lg:text-xl text-center text-base">
            We design attention grabbing creation, user-friendly website to help
            our clients achieve and maximize business growth and digital
            presence.
          </h4>
          <div className="flex justify-center md:py-12 py-6">
            <button className="bg-purple hover:opacity-75 text-white font-bold py-4 px-6 rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex justify-center py-6">
            <img src={phil} alt="Philippines" className="w-1/2 md:w-1/4" />
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1604919141">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
