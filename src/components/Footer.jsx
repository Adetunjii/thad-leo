import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="bg-brown-900 py-32 px-10 md:px-28 text-white mt-16">
      <div className="md:flex justify-content-between ">
        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">
            About the company
          </h1>
          <p className="font-poppins">
            Thad-Leo integrated concept Limited is a professional building,
            renovation and construction company. We are a renowned firm
          </p>
        </div>

        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">Newsletter</h1>
          <p className="font-poppins">
            Stay updated with our lates projects and resources
          </p>
        </div>

        <div className="mx-8 md:w-1/3">
          <h1 className="text-xl font-bold py-6 font-raleway">Follow us</h1>
          <div className="flex justify-between">
            <div>
              <img src={facebook} alt="facebook" />
            </div>
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center justify-center my-12">
        <p className="font-poppins">
          @ Thad-leo integrated concept Limited | All Rights Reserved. | 2019
        </p>

        <div className="flex justify-center py-4">
          <div className="flex text-brown-600">
            <div className="mx-6">Home</div>
            <div className="mx-6">About</div>
            <div className="mx-6">Contact</div>
            <div className="mx-6">Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
