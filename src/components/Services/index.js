import React from "react"
import seo from "../../images/seo.svg"
import social from "../../images/social.svg"
import web from "../../images/web.svg"
import write from "../../images/writing.svg"
import ads from "../../images/ads.svg"
import email from "../../images/mail.svg"

const Services = () => {
  return (
    <div className="bg-blue py-20 px-6 lg:py-56" id="services">
      <div className="container mx-auto">
        <div className="w-full">
          <h4 className="text-center text-xl text-white uppercase font-medium my-3">
            our services
          </h4>
          <h2 className="text-center text-4xl lg:text-5xl text-secondary uppercase font-bold md:font-black lg:font-black leading-tight my-3">
            We Can Help You With
          </h2>
        </div>

        <div className="w-full md:flex lg:flex">
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={seo}
              alt="Search Engine Optimization"
              className="w-3/5 my-3 mx-auto md:w-3/6"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Search Engine Optimization
            </h3>
            <p className="text-white md:text-sm text-left">
              Let us make your URLs be relevant online! We will help understand
              your market’s needs and wants. But most importantly, we can build
              contents that are easier to read and more SEO friendly.
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={social}
              alt="Social Media Marketing"
              className="w-3/5 my-3 mx-auto md:w-3/6"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Social Media Marketing
            </h3>
            <p className="text-white md:text-sm text-left">
              Expand your business horizons thru Social Media Marketing! Rusty
              Mace will help you to influence your market online. We will help
              build your brand with high-quality contents to enlighten your
              audiences about your products quality!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={web}
              alt="Web Design"
              className="w-3/5 my-3 mx-auto md:w-3/6"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Web Design
            </h3>
            <p className="text-white md:text-sm text-left">
              Attract customers with a responsive website the sells! At Rusty
              Mace creating responsive designs is a priority that ensures
              quality and long-term solutions for businesses.
            </p>
          </div>
        </div>

        <div className="w-full md:flex lg:flex">
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={write}
              alt="Content Writing"
              className="w-3/5 my-3 mx-auto"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Content Writing
            </h3>
            <p className="text-white md:text-sm text-left">
              No one knows your business better than you! But putting all your
              ideas for you blogs can be tough. Rusty Mace is here to help with
              you blog contents! Just be ready with your business goals and
              together we can help you achieve your end goals!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={ads}
              alt="Social Media Ads"
              className="w-3/5 my-3 mx-auto"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Social Media Ads
            </h3>
            <p className="text-white md:text-sm text-left">
              Grab people’s attention and turn them as your audience! We can
              help your business stand out online. We’re here to help you in the
              long-run and not just provide short-term boos. Talk to us now.
              Let’s make it happen!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/3 lg:p-12 text-center py-6 md:px-2">
            <img
              src={email}
              alt="Email Marketing"
              className="w-3/5 my-3 mx-auto"
            />
            <h3 className="text-secondary text-2xl md:text-lg font-bold py-4">
              Email Marketing
            </h3>
            <p className="text-white md:text-sm text-left">
              Email Marketing is about connecting with people and helping them
              solve their problems. With email marketing we can help you reach
              out to your target market to engage and be informed about your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
