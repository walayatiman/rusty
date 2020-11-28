import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  const [navbar, setNavbar] = useState(false)
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBg)
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="container mx-auto lg:px-16 px-6  flex flex-wrap items-center lg:py-5 py-2">
        <div className="flex-1 flex justify-between items-center">
          <img
            className="max-w-xs mb-0"
            src={logo}
            alt="Logo"
            className="w-2/3 md:w-1/3"
          />
        </div>

        <label for="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center space-x-5 text-base text-gray-700 pt-4 lg:pt-0 mb-0">
              <li className="text-base font-bold text-white">HOME</li>
              <li className="text-base font-bold text-white">ABOUT</li>
              <li className="text-base font-bold text-white">SERVICES</li>
              <li className="text-base font-bold text-white">CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
