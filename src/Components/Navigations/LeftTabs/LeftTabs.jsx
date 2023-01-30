import React, { useContext, useState } from "react";
import {
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
import { ThemeContext } from "../../../lib/context/ThemeContext/theme";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function LeftTabs() {
  const [{ theme, tabsTheme }] = useContext(ThemeContext);
  const [fullText, setFullText] = useState(false);

  return (
    <>
      <section
        onMouseEnter={() => setFullText(true)}
        onMouseLeave={() => setFullText(false)}
      >
        <div
          className="levbitz_side_toggle fixed flex flex-col justify-center items-start  bottom-0 w-20 py-10 pl-0  hover:w-48 hover:pt-10 transition ease-in-out delay-15 h-24 min-h-0 md:min-h-full xs:min-h-0  z-depth-3 "
          style={{
            backgroundColor: tabsTheme.backgroundColor,
            borderRight: tabsTheme.borderRight,
            overflow: "hidden",
            left: 0,
            color: "#fff",
            //
            // borderTopRightRadius: " 60%  / 70%",
            // borderBottomRightRadius: " 60% 40% 40% 20% / 70% 50% 30% 25%",
            margin: "0px auto",
            height: "100%",
            borderRadius: "0% 100% 97% 3% / 100% 50% 50% 0% ",
          }}
        >
          <SingleIcon
            url={"/"}
            Icon={<FaHome color={tabsTheme.color} />}
            name={"Home"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaScroll color={tabsTheme.color} />}
            url={"/login"}
            name="News"
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            url={"/jhjhng"}
            Icon={<FaCalculator color={tabsTheme.color} />}
            fullText={fullText}
            name="
Calculator"
            tabsTheme={tabsTheme}
          />

          <SingleIcon
            url={"/about"}
            Icon={<FaUserFriends color={tabsTheme.color} />}
            name="About"
            fullText={fullText}
            tabsTheme={tabsTheme}
          />

          <SingleIcon
            url={"/ghghgg"}
            Icon={<FaAddressBook color={tabsTheme.color} />}
            name="Contact"
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            name="Terms & Conditions"
            url={"/hhjjhhj"}
            Icon={<FaClipboardList color={tabsTheme.color} />}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            name="Cookie Policy 
"
            url={"/hggghghghghg"}
            Icon={<FaCookieBite color={tabsTheme.color} />}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            name="Privacy Policy "
            url={"/mnbv"}
            Icon={<FaShieldAlt color={tabsTheme.color} />}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            name="
3D Auction"
            url={"nmnnmnmm"}
            Icon={<FaVrCardboard color={tabsTheme.color} />}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
          <SingleIcon
            Icon={<FaCubes color={tabsTheme.color} />}
            name=" 
FUTURE "
            url={"/pppppo"}
            fullText={fullText}
            tabsTheme={tabsTheme}
          />
        </div>
      </section>
    </>
  );
}

export default LeftTabs;

const SingleIcon = ({ fullText, tabsTheme, Icon, name, url }) => {
  let activeStyle = {
    borderLeftWidth: 5,
    borderLeftHeight: 2,

    paddingLeft: 10,
    borderLeft: "2px solid red",
  };

  let activeClassName = "underline";

  return (
    <div className="  w-full  flex hover:bg-slate-400    px-3  py-2 mb-3 cursor-pointer ">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to={url}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {Icon}
          {fullText ? (
            <span style={{ color: tabsTheme.color }} className=" text-sm ml-3">
              {name}
            </span>
          ) : (
            ""
          )}
        </div>
      </NavLink>
    </div>
  );
};
