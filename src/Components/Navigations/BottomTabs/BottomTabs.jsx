import React from "react";
import { IoIosPeople } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

function BottomTabs() {
  return (
    <section
      className="fixed flex justify-around items-center h-14 bottom-0 bg-slate-500 w-96  "
      style={{
        left: 0,
        right: 0,

        color: "#fff",
        borderTopRightRadius: "30px",
        borderTopLeftRadius: "30px",
        margin: "0px auto",
      }}
    >
      <div>
        <IoIosPeople className=" text-center ml-5" size={25} />

        <p className="text-xs text-center">Community</p>
      </div>

      <div className="bg-white text-black py-1 px-3 rounded">
        <FaBrain className="ml-1" size={25} />
        <p className="text-xs text-center">Learn</p>
      </div>

      <div>
        <BsBank className="ml-3 mb-2" size={22} />
        <p className="text-xs text-center">E-Chits</p>
      </div>
    </section>
  );
}

export default BottomTabs;
