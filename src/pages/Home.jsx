import React from "react";
import group from "../assets/group.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import construction1 from "../assets/construction1.png";
import construction2 from "../assets/construction2.png";
import construction3 from "../assets/construction3.png";
import group2 from "../assets/Group2.png";
import sketch1 from "../assets/sketch1.png";
import sketch2 from "../assets/sketch2.png";
import sketch3 from "../assets/sketch3.png";

function Home() {
  return (
    <div>
      <div className="md:flex justify-between my-12 font-poppins">
        <div className="px-10 md:pl-32 md:w-2/3 ">
          <h1 className="font-bold text-6xl pt-24 leading-snug font-raleway text-brown-800">
            The <span className="text-brown-200"> Construction </span> Kings
            building up great things
          </h1>
          <p className="md:w-3/4 my-12 pr-24 text-brown-600 text-lg">
            Buildmax Limited is a professional building, renovation and
            refurbishment company. We are part of the Nairobi-based Talisman
            Capital Group.
          </p>
        </div>

        <div className="md:w-1/3">
          <img src={group} alt="group" className="h-full w-full" />
        </div>
      </div>

      <div className="md:flex justify-between my-48">
        <div className="md:w-1/2 md:ml-32 mx-10">
          <h1 className="text-3xl text-brown-800 font-raleway font-bold">
            Since we Started
          </h1>
          <h1 className="text-3xl text-brown-800 font-raleway font-bold">
            work
          </h1>
          <p className="text-brown-200 pt-6">
            Quality design at the fairest price
          </p>
        </div>

        <div className="mx-10 md:w-1/2">
          <p className="text-brown-600 py-4">
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </p>
          <p className="text-brown-600 py-4">
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </p>
        </div>
      </div>

      <div>
        <div className="md:flex justify-between">
          <div className="md:w-1/2">
            <img src={img1} alt="img1" />
          </div>

          <div className="px-10 md:px-32 py-20 md:w-1/2">
            <h1 className="text-brown-800 font-bold text-3xl ">
              Aesthetically
            </h1>
            <h1 className="text-brown-800 font-bold text-3xl ">Pleasing</h1>
            <p className="pt-10 text-brown-600">
              We have worked on some of the stunning architectural marvels
              within industries like hotels, residential buildings, offices,
              commercial buildings, food & beverage and made them great
              successes.
            </p>
          </div>
        </div>

        <div className="md:flex justify-between">
          <div className="px-10 md:px-32 py-20 md:w-1/2">
            <h1 className="text-brown-800 font-bold text-3xl font-raleway">
              Great work
            </h1>
            <h1 className="text-brown-800 font-bold text-3xl font-raleway">
              Ethic.
            </h1>
            <p className="md:pt-10 text-brown-600">
              We have worked on some of the stunning architectural marvels
              within industries like hotels, residential buildings, offices,
              commercial buildings, food & beverage and made them great
              successes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={img2} alt="img2" className="w-full" />
          </div>
        </div>

        <div className="my-32">
          <h1 className="text-center text-3xl text-brown-800 font-raleway font-bold">
            We Provide Below
          </h1>
          <h1 className="text-center text-3xl text-brown-800 font-raleway font-bold">
            Services.
          </h1>
        </div>

        <div className="md:flex justify-between mx-32">
          <div className="m-6 text-center">
            <div className="flex justify-center">
              <img
                src={sketch1}
                alt="sketch 1"
                className="block align-center"
              />
            </div>

            <h1 className="text-brown-800 text-xl py-8">
              Retail-Fit Oil Out & Company
            </h1>
            <p className="text-brown-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="m-6 text-center">
            <div className="flex justify-center">
              <img src={sketch2} alt="sketch 2" className="" />
            </div>
            <h1 className="text-brown-800 text-xl py-8">Construction</h1>
            <p className="text-brown-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="m-6 text-center">
            <div className="flex justify-center">
              <img src={sketch3} alt="sketch 3" />
            </div>

            <h1 className="text-brown-800 text-xl py-8">
              Building and planning
            </h1>
            <p className="text-brown-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="my-32">
        <h1 className="text-center text-brown-800 text-3xl py-10 font-raleway font-bold">
          Our latest project
        </h1>
        <div className="md:flex justify-between mx-32">
          <div className=" mx-6">
            <div className="flex flex-col justify-center">
              <img src={construction1} alt="construction" />
              <p className="py-3 text-brown-800 font-semibold font-raleway">
                School of General studies for Delta State Polytechnic oghara
              </p>
            </div>
          </div>

          <div className=" mx-6">
            <div className="flex flex-col justify-center">
              <img src={construction2} alt="construction" />
              <p className="py-3 text-brown-800 font-semibold font-raleway">
                3,000 auditorium at Delta state Polytechnic
              </p>
            </div>
          </div>

          <div className="mx-6">
            <div className="flex flex-col justify-center">
              <img src={construction3} alt="construction" />
              <p className="py-3 text-brown-800 font-semibold font-raleway">
                Completed 5 bedroom duplex
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="px-10">
          <h1 className="text-3xl text-brown-800 font-bold font-raleway">
            Our Gallery
          </h1>
          <p className="py-10 text-brown-200">
            Quality design at the fairest price
          </p>

          <div>
            <img src={group2} alt="group 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
