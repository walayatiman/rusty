import React from "react"
import call from "../../images/call.jpg"
import contact from "../../images/contact.svg"
const Contact = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${call})` }} id="contact">
      <div className="bg-black bg-opacity-75 lg:py-56 py-20 px-6">
        <div className="container mx-auto">
          <div className="w-full">
            <h4 className="text-center text-xl text-white uppercase font-medium my-3">
              contact us now
            </h4>
            <h2 className="text-center text-4xl lg:text-5xl text-secondary uppercase font-bold md:font-black lg:font-black leading-tight my-3">
              We’d love to hear from you!
            </h2>
          </div>
          <div className="w-full lg:flex md:flex">
            <div className="lg:w-1/2 md:w-1/2">
              <img src={contact} alt="Calling" />
            </div>
            <div className="lg:w-1/2 md:w-1/2">
              <img src={contact} alt="Calling" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
