import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../lib/context/ThemeContext/theme";

import {
  FaUserCheck,
  FaLink,
  FaTachometerAlt,
  FaBell,
  FaWallet,
  FaBriefcase,
  FaGavel,
  FaCalendarAlt,
  FaReadme,
  FaUserTag,
  FaCreditCard,
  FaChalkboardTeacher,
  FaShoppingCart,

  //   FaExclamationTrian,
  //   FaStackExchange,
  FaHome,
  FaScroll,
  FaCalculator,
  FaUserFriends,
  FaAddressBook,
  FaClipboardList,
  FaCookieBite,
  FaShieldAlt,
  FaVrCardboard,
  FaCubes,
} from "react-icons/fa";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { NavLink } from "react-router-dom";

function RightTabs() {
  const [{ theme, tabsTheme }] = useContext(ThemeContext);
  const [fullText, setFullText] = useState(false);
  return (
    <>
      <section
        onMouseEnter={() => setFullText(true)}
        onMouseLeave={() => setFullText(false)}
      >
        <div
          className="levbitz_side_toggle fixed flex flex-col justify-center items-start  bottom-0 w-20 py-10 pl-0  hover:w-48 hover:pt-10 transition ease-in-out delay-15 h-24 min-h-0 md:min-h-full xs:min-h-0 z-depth-2 "
          style={{
            backgroundColor: tabsTheme.backgroundColor,
            // borderLeft: tabsTheme.borderLeft,
            // right: 0,

            // color: tabsTheme.color,
            // borderTopLeftRadius: 20,
            // margin: "0px auto",
            // height: "100%",

            // backgroundColor: tabsTheme.backgroundColor,
            // borderLeft: tabsTheme.borderLeft,
            overflow: "hidden",
            right: 0,
            color: "#fff",
            //
            // borderTopRightRadius: " 60%  / 70%",
            // borderBottomRightRadius: " 60% 40% 40% 20% / 70% 50% 30% 25%",
            margin: "0px auto",
            height: "100%",
            borderRadius: "90% 3% 1% 99% / 46% 30% 70% 54% ",
          }}
        >
          <SingleIcon
            Icon={<ThemeToggle />}
            name={"Light / Dark Mode"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaBell color={tabsTheme.color} />}
            name={"Notifications "}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaBriefcase color={tabsTheme.color} />}
            name={"Portfolio  "}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaWallet color={tabsTheme.color} />}
            name={"Wallet"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaGavel color={tabsTheme.color} />}
            name={"E-Auction"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaCalendarAlt color={tabsTheme.color} />}
            name={"Calendar"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaReadme color={tabsTheme.color} />}
            name={"E- Passbook"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaUserTag color={tabsTheme.color} />}
            name={"Refer & Earn "}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaCreditCard color={tabsTheme.color} />}
            name={"Pay Early & Earn "}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaChalkboardTeacher color={tabsTheme.color} />}
            name={"Make Content "}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaShoppingCart color={tabsTheme.color} />}
            name="CART "
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
        </div>
      </section>
    </>
  );
}

export default RightTabs;

const SingleIcon = ({ fullText, tabsTheme, Icon, name }) => {
  return (
    <div className="  w-full  flex hover:bg-slate-400    px-3  py-2 mb-3 cursor-pointer pl-4 ">
      <div className="pl-6 flex">
        {Icon}
        {fullText ? (
          <span style={{ color: tabsTheme.color }} className=" text-sm ml-2">
            {name}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
