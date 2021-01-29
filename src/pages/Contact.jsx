import React from "react";
import group3 from "../assets/group3.png";
import location from "../assets/Location.png";
import mail from "../assets/Mail.png";
import phone from "../assets/Phone.png";

function Contact() {
  return (
    <div>
      <div className="md:flex justify-between my-12 font-poppins">
        <div className="px-10 md:pl-32  md:w-5/12">
          <h1 className="font-bold text-6xl pt-12 md:pt-24 leading-snug font-raleway text-brown-800">
            We are easy to contact
          </h1>
          <p className="md:w-3/4 my-12 text-brown-600 text-lg font-poppins">
            Buildmax Limited is a professional building, renovation and
            refurbishment company. We are part of the Nairobi-based Talisman
            Capital Group.
          </p>
        </div>

        <div className="md:w-7/12">
          <img src={group3} alt="group" className="w-full" />
        </div>
      </div>

      <div className="md:flex justify-between my-24 mx-10 md:mx-32">
        <div>
          <div className="my-10">
            <img src={phone} alt="phone" />

            <h2 className="text-brown-1000">Phone</h2>
            <p className="text-brown-600">
              +234 812 345 6790 +234 812 345 6790
            </p>
          </div>

          <div className="my-10">
            <img src={mail} alt="mail" />
            <h2 className="text-brown-1000">Email</h2>
            <p className="text-brown-600">primefiresecurityconsult@gmail.com</p>
          </div>

          <div className="my-10">
            <img src={location} alt="location" />
            <h2 className="text-brown-1000">Address</h2>
            <p className="text-brown-600">
              No, lorem ipsum certain location of business with accurate
              satellite mappings
            </p>
          </div>
        </div>

        <div>
          <p>Send us a message</p>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="bg-gray-50 p-3 my-2 rounded-md w-full"
            />
            <br />
            <input
              type="text"
              placeholder="Your email address"
              className="bg-gray-50 p-3 my-2 rounded-md w-full"
            />
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="your message goes here"
              className="bg-gray-50 p-3 my-2 rounded-md w-full"
            ></textarea>

            <div className=" w-48 p-3 text-center text-white bg-brown-200 rounded-md">
              Send Message
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
