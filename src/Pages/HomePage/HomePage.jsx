import React, { useContext } from "react";
import DummyText from "../../Components/DummyText/DummyText";
import Footer from "../../Components/Footer/Footer";
import ImgOne from "../../assets/images/1.jpg";
import BottomTabs from "../../Components/Navigations/BottomTabs/BottomTabs";

import One from "../../assets/images/homeImg/1.svg";
import Two from "../../assets/images/homeImg/2.svg";
import Three from "../../assets/images/homeImg/3.svg";
import Four from "../../assets/images/homeImg/4.svg";
import Five from "../../assets/images/homeImg/5.svg";

import Six from "../../assets/images/homeImg/6.svg";
import Seven from "../../assets/images/homeImg/10.svg";
import Eight from "../../assets/images/homeImg/9.svg";
import Nine from "../../assets/images/homeImg/7.svg";
import Ten from "../../assets/images/homeImg/8.svg";

import { ThemeContext } from "../../lib/context/ThemeContext/theme";
import "./HomePage.css";
import TopNotion from "../../Components/Navigations/TopNotion/TopNotion";

function HomePage() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div>
      <TopNotion />
      <div
        className="flex  justify-center flex-col items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "auto",
          }}
        >
          <div className="showcase  ">
            <div className="container">
              <div className="row">
                <div className="col l12">
                  <div>
                    <h2 className="center font-bold mb-10">
                      Welcome to SRINAVA CHITS
                    </h2>

                    <p className="center">
                      NEW AGE CHITS – Digital Chit Funds Like Never Before
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*card one */}
          <div className=" bg-white rounded px-10">
            <div className="container">
              <div className="row">
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={One} alt="" />
                    </div>
                    <span className="font-semibold">
                      Get into the world of finance and get a deeper
                      understanding of financial products across all the
                      segments in the whole world. Get to know the world finance
                      like never before.
                    </span>
                  </div>
                </div>
                <div className="col l6">
                  <div className="mt-10">
                    <div>
                      <h4 className="my-10 center font-semibold">
                        Wait Don't Rush...
                      </h4>
                    </div>

                    <p className="center">
                      Is this the statement you heard before when it comes to
                      Finance ???
                    </p>
                    <p className="center">
                      But, we are here to change it by Knowledge of Ages.
                    </p>
                    <p className="center">
                      Oh! You are thinking about only Chit Funds / ROSCA - we
                      will go beyond
                    </p>
                  </div>
                </div>
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Two} alt="" />
                    </div>
                    <span className="font-semibold  ">
                      Don’t know Chit Funds - no problem, a large content is
                      here to help you. Login and jump into Learning and get
                      quick understanding of ROSCA easily
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*card one */}

          {/*card two */}
          <div className="  rounded px-10">
            <div className="container">
              <div className="row">
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Three} alt="" />
                    </div>
                    <span className="font-semibold">
                      Beyond any graduation with practical experience get it
                      started with a tiger's leap financial education made easy
                      with calculators. Knowledge is beyond any financial
                      product's returns.
                    </span>
                  </div>
                </div>
                <div className="col l6">
                  <div className="mt-10">
                    <div>
                      <h4 className="my-10 center font-semibold">
                        Learn at your pace...
                      </h4>
                    </div>

                    <p className="center">
                      Remember You Should Learn, one can help - not feed you..
                    </p>
                    <p className="center">
                      Get Financial Information from Anywhere & Anytime
                    </p>
                    <p className="center">
                      Make the Most Efficient way of Investment in New Age
                    </p>
                  </div>
                </div>
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Four} alt="" />
                    </div>
                    <span className="font-semibold">
                      Want to Learn yourself - no problem, but, still you have a
                      community to help. Login and jump into world of finance
                      exploring financial world - made easy.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*card two */}

          {/*card three */}
          <div className=" bg-white rounded px-10">
            <div className="container">
              <div className="row">
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Five} alt="" />
                    </div>
                    <span className="font-semibold">
                      Time to connect to the world and the best in class
                      community for free financial education with people to
                      clear doubts. Get to know the experts in finance like
                      never before.
                    </span>
                  </div>
                </div>
                <div className="col l6">
                  <div className="mt-10">
                    <div>
                      <h4 className="my-10 center font-semibold">
                        Get Notified...
                      </h4>
                    </div>

                    <p className="center">
                      In making of the Largest Online Chit Community Soon...
                    </p>
                    <p className="center">
                      Get Financial Expert from Anywhere & Anytime
                    </p>
                    <p className="center">
                      Get Notified to your E-mail ID for the Knowledge form Ages
                    </p>
                  </div>
                </div>
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Six} alt="" />
                    </div>
                    <span className="font-semibold">
                      Don’t know Finance - no problem, a large community is here
                      to help you. Login and jump into Community and get quick
                      financial help - made easy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*card three*/}

          {/*card four*/}
          <div className="  rounded px-10">
            <div className="container">
              <div className="row">
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Seven} alt="" />
                    </div>
                    <span className="font-semibold">
                      Download from App Store or Play Store install app & get
                      started with financial education made easy. Learn First
                      then Invest into any financial product.
                    </span>
                  </div>
                </div>
                <div className="col l6">
                  <div className="mt-10">
                    <div>
                      <h4 className="my-10 center font-semibold">
                        Coming Soon...
                      </h4>
                    </div>

                    <p className="center">
                      IOS & Android Apps with the best in class Progressive Web
                      App Soon...
                    </p>
                    <p className="center">For Chits from Anywhere & Anytime</p>
                    <p className="center">
                      Chits has been the Most Efficient way of Investment since
                      Ages
                    </p>
                  </div>
                </div>
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Eight} alt="" />
                    </div>
                    <span className="font-semibold">
                      Don’t want to install app - no problem, website itself is
                      an online app. Login and jump into E-Chit funds with
                      financial education - made easy.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*card four */}

          {/*card five */}
          <div className=" bg-white rounded px-10">
            <div className="container">
              <div className="row">
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Nine} alt="" />
                    </div>
                    <span className="font-semibold">
                      Time to connect to the world and the best in class
                      community for free financial education with people to
                      clear doubts. Get to know the experts in finance like
                      never before.
                    </span>
                  </div>
                </div>
                <div className="col l6">
                  <div className="mt-10">
                    <div>
                      <h4 className="my-10 center font-semibold">
                        Strong Future...
                      </h4>
                    </div>

                    <p className="center">
                      Many New Technological Updates Coming Soon...
                    </p>
                    <p className="center">
                      Never Miss Anything - Subscribe for Newsletter
                    </p>
                    <p className="center">
                      Oh! You are thinking about only Chit Funds / ROSCA - we
                      will go beyond
                    </p>
                  </div>
                </div>
                <div className="col l3">
                  <div>
                    <div>
                      <img className="responsive-img" src={Ten} alt="" />
                    </div>
                    <span className="font-semibold">
                      Don’t know Finance - no problem, a large community is here
                      to help you. Login and jump into Community and get quick
                      financial help - made easy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card five*/}
          <Footer />
          <BottomTabs />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
