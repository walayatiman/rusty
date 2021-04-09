import React from "react"
import call from "../../images/call.jpg"
import contact from "../../images/contact.svg"
import emailjs from "emailjs-com"

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_9flth9o",
        "template_otrirh9",
        e.target,
        "user_MIWQO0o4gInLzUFniyUss"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${call})` }}
      id="contact"
    >
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
            <div className="lg:w-1/2 md:w-1/2 p-12">
              <form className="contact-form" onSubmit={sendEmail}>
                <div class="flex flex-wrap mb-6">
                  <div class="relative w-full appearance-none label-floating">
                    <input
                      class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      required
                    />
                    <label
                      for="name"
                      class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                    >
                      Your name
                    </label>
                  </div>
                </div>

                <div class="flex flex-wrap mb-6">
                  <div class="relative w-full appearance-none label-floating">
                    <input
                      class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      required
                    />
                    <label
                      for="name"
                      class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                    >
                      Your email
                    </label>
                  </div>
                </div>
                <div class="flex flex-wrap mb-6">
                  <div class="relative w-full appearance-none label-floating">
                    <textarea
                      class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Message..."
                    ></textarea>
                    <label
                      for="message"
                      class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                    >
                      Message...
                    </label>
                  </div>
                </div>

                <div class="">
                  <button
                    class="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    id="button"
                    value="Send Email"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
