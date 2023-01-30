import React, { useState } from "react";
import { FaStream, FaUserAlt } from "react-icons/fa";

import LeftTabs from "../LeftTabs/LeftTabs";
import RightTabs from "../RightTabs/RightTabs";

function TopNotion() {
  const [leftShown, setLeftShown] = useState(true);

  const leafShowHandler = () => {
    if (leftShown === true) {
      setLeftShown(false);
    } else {
      setLeftShown(true);
    }
  };
  const [rightShown, setRightShown] = useState(true);

  const RightShowHandler = () => {
    if (rightShown === true) {
      setRightShown(false);
    } else {
      setRightShown(true);
    }
  };
  return (
    <>
      {leftShown ? <LeftTabs /> : null}
      <section
        className="fixed flex justify-around items-center h-14 top-0 bg-slate-500 w-96  p-5 "
        style={{
          left: 0,
          right: 0,
          zIndex: 1000,
          color: "#fff",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          margin: "0px auto",
        }}
      >
        <div className="hide-on-med-and-up" onClick={leafShowHandler}>
          <p className="text-xs text-center ">
            <FaStream size={24} />
          </p>
        </div>

        <div>
          <p className="text-xs text-center">SRINIVA</p>
          <p className="text-xs text-center">Chits PVT LTD</p>
        </div>

        <div>
          <input
            placeholder="search"
            className="enabled:hover:border-gray-400 disabled:opacity-75 ..."
          />
        </div>
        <div className="hide-on-med-and-up" onClick={RightShowHandler}>
          <p className="text-xs text-center ">
            <FaUserAlt size={24} />
          </p>
        </div>
        {rightShown ? <RightTabs /> : null}
      </section>
    </>
  );
}

export default TopNotion;
