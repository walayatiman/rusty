import React from "react"
import logo from "../../images/logo.svg"
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-purple px-6 pt-10">
      <div className="container mx-auto lg:px-16 lg:flex lg:flex-wrap md:flex md:flex-wrap">
        <div className="lg:w-1/3 md:w-1/3 py-5 items-center flex flex-col md:items-start lg:items-start lg:p-5">
          <img src={logo} alt="Logo" className="pb-5 w-2/3" />
          <p className="text-white font-bold">
            We focus on the needs of small to middle market businesses to
            improve and grow their return.
          </p>
          <section className="flex py-5">
            <a href="https://www.facebook.com/rustymaceph/">
              <FaFacebook
                size="2em"
                color="white"
                style={{ marginRight: 10 }}
              />
            </a>
            <FaInstagram size="2em" color="white" />
          </section>
        </div>
        <div className="lg:w-1/3 md:w-1/3 py-5 items-center flex flex-col md:items-start lg:items-start lg:p-5">
          <h2 className="text-3xl font-bold text-white pb-5">Contacts</h2>

          <span className="flex text-white items-center py-2">
            <FaPhoneAlt
              size="1em"
              color="#FF687D"
              style={{ marginRight: 10 }}
            />
            (063) 228 2362
          </span>
          <span className="flex text-white items-center py-2">
            <FaRegEnvelope
              size="1em"
              color="#FF687D"
              style={{ marginRight: 10 }}
            />
            info@rustymace.ph
          </span>
          <span className="flex text-white items-center py-2">
            <FaMapMarkerAlt
              size="1em"
              color="#FF687D"
              style={{ marginRight: 10 }}
            />
            The Land of Majestic Waterfalls
          </span>
        </div>
        <div className="lg:w-1/3 md:w-1/3 py-5 items-center flex flex-col md:items-start lg:items-start lg:p-5">
          <h2 className="text-3xl font-bold text-white pb-5">Services</h2>
          <p className="text-white text-lg pb-2">Web Design</p>
          <p className="text-white text-lg pb-2">Social Media</p>
          <p className="text-white text-lg pb-2">Content Writing</p>
          <p className="text-white text-lg pb-2">SEO</p>
          <p className="text-white text-lg pb-2">Email Marketing</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
