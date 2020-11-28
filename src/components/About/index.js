import React from "react"
import click from "../../images/click.svg"

const About = () => {
  return (
    <div className="py-20 px-6 lg:flex lg:items-center md:flex mb-4 container mx-auto lg:py-56 md:py-20 md:items-center static">
      <div className="md:w-1/2 lg:w-1/2 px-6">
        <img src={click} alt="Click" />
      </div>
      <div className="md:w-1/2">
        <h4 className="text-center text-xl md:text-lg uppercase font-medium my-3">
          About us
        </h4>
        <h2 className="text-center text-4xl font-bold uppercase md:font-black leading-tight my-3">
          Boost Your Website’s Traffic
        </h2>
        <p className="leading-loose text-base lg:text-xl">
          Rusty Mace is a web design team that helps businesses to achieve
          digital presence in the modern era. Our web design services focus on
          building user-friendly designs that ultimately increase brand
          awareness and business growth.
        </p>
      </div>
    </div>
  )
}

export default About
