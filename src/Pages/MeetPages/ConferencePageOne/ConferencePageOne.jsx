import React, { useState } from "react";
import Logo from "../../../assets/images/logo/logo_sm.svg";
import { useNavigate } from "react-router-dom";
import ImgOne from "../../../assets/images/big.jpeg";
import "./ConferencePageOne.css";
import { BsVolumeUpFill, BsMicFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaShareSquare } from "react-icons/fa";

function ConferencePageOne() {
  const navigation = useNavigate();

  const [small, setSmall] = useState({
    parent: "l7",
  });
  return (
    <div className="mt-10">
      <div className="container">
        <h6 onClick={() => navigation("/")}>x</h6>

        <div className="row">
          <div className="col l8">
            <div className="row">
              <div className="col l3">
                <div className="row">
                  <div className="col l4">
                    <span>
                      <img src={Logo} alt="" />
                    </span>
                  </div>
                  <div className="col l8">
                    <span className="text:bold">
                      SRINAVA <br /> Auction Portal
                    </span>
                  </div>
                </div>
              </div>
              <div className="col l7">
                <div className="bg-slate-300 w-full rounded px-5 z-depth-1 ">
                  <div className="row">
                    <div className="col l3">
                      <div className="py-5">
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                      </div>
                    </div>
                    <div className="col l3">
                      <div className="py-5">
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                      </div>
                    </div>
                    <div className="col l3">
                      <div className="py-5">
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                      </div>
                    </div>
                    <div className="col l3">
                      <div className="py-5">
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                        <p className="text:xs conference_middle_top">
                          Previous bid :
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="col l2">
                <div>
                  <p>CurrentPrize Amount :</p>
                  <p>45,000</p>
                </div>
  </div>*/}
            </div>
          </div>
          <div className="col l4">
            <div className="row">
              <div className="col l7">
                <div>
                  <p>Auction Amounts</p>
                </div>
              </div>
              <div className="col l5">
                <div>
                  <p>Customer </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col ${small.parent} `}>
            <div
              style={{
                position: "relative",
              }}
            >
              <img className=" rounded-3xl" src={ImgOne} />

              <div className="row py-7">
                <Tips />
                <CallBtn />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 10,
                  bottom: 100,
                  right: "0",
                  margin: 20,
                }}
              >
                <div className="  overflow-y-scroll h-96 pr-5">
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                  <SingleSideUser />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 50,
                  left: 0,
                  right: "0",
                  margin: 20,
                }}
              >
                <div className=" pr-5">
                  <div className="absolute bottom-10 right-10 ">
                    <p className="red  rounded-full ">x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l3 offset-l1 ">
            <div className="bg-slate-100 w-full p-5 rounded-lg">
              <Tab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferencePageOne;

const SingleSideUser = () => {
  return (
    <div>
      <div className="my-5 border-2 rounded-[12px] overflow-hidden">
        <img width={100} src={ImgOne} alt="" />
      </div>
    </div>
  );
};

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="tab_header">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          messages
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          members
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? <Messages /> : <Members />}
      </div>
    </div>
  );
};

const Messages = () => {
  return (
    <>
      <div className="bg-slate-100 w-full p-5 rounded-lg  overflow-y-scroll h-96 pr-5">
        <div>
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
        </div>
      </div>
    </>
  );
};

const SingleMessage = () => {
  return (
    <>
      <div className="flex mb-3 justify-center  items-center ">
        <div className="mr-4">
          <div className="bg-fuchsia-700 p-3 rounded-full w-1"></div>
        </div>
        <div className="bg-white w-full pl-5 py-1 rounded-xl ">
          <span>user Name</span>
          <p> Singlellkdfldflkfdllkflkfl vlklkfkdklflk Message</p>
        </div>
      </div>
    </>
  );
};

const Members = () => {
  return (
    <>
      <div
        style={{
          height: 400,
        }}
        className="bg-slate-600 w-full p-5 rounded-lg "
      >
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
      </div>
    </>
  );
};
const SingleMember = () => {
  return (
    <>
      <div className="flex mb-3 justify-start  items-start ">
        <div className="mr-4">
          <div className="bg-fuchsia-700 p-3 rounded-full w-1"></div>
        </div>
        <div className="bg-white w-full pl-5 py-1 rounded-xl ">
          <p>user Name </p>
        </div>
      </div>
    </>
  );
};

const CallBtn = () => {
  return (
    <div className="col l6">
      <div className="row bg-slate-300 w-full p-5 rounded-lg">
        <div className="col l2">
          <div>
            <p>
              <BsVolumeUpFill />
            </p>
          </div>
        </div>
        <div className="col l2">
          <div>
            <p>
              {" "}
              <FaVideo />
            </p>
          </div>
        </div>
        <div className="col l2">
          <div>
            <p>
              <BsMicFill />
            </p>
          </div>
        </div>
        <div className="col l2">
          <div>
            <p>
              <IoMdCall />
            </p>
          </div>
        </div>
        <div className="col l2">
          <div>
            <p>
              <FaShareSquare />
            </p>
          </div>
        </div>
        <div className="col l2">
          <div>
            <p>
              <ImCross />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tips = () => {
  return (
    <>
      <div className="col l6">
        <div className="bg-slate-300 w-full py-1 pl-5 rounded-lg ">
          <div className="row  p-0 m-0">
            <span className="p-0 m-0">Tips</span>
          </div>
          <div className="row  p-0 m-0">
            <span className="p-0 m-0">
              {" "}
              fjfffiofofoifop .dsoisdiodsodosioidsoi
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
