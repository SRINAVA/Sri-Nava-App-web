import React, { useContext } from "react";
import "./LoginPage.css";
import { ThemeContext } from "../../lib/context/ThemeContext/theme";
import GoogleButton from "react-google-button";

function Loginpage() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        width: "100%",
      }}
      className="login_page_wrap"
    >
      <div className="container">
        <div className="row">
          <div className="col l4"></div>
          <div className="col l4 s12">
            <div className="white center  p-10 rounded">
              <h5 className="primary_bg my-5 py-3 white-text rounded">
                Welcome back !
              </h5>

              <p>Login Into Your Account</p>

              <div class="row ">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row my-1">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        value="Login"
                        type="submit"
                        class="btn primary_bg rounded z-depth-0"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div class="row ">
                <p className="center"></p>
                <div class="input-field col s12 ">
                  <GoogleButton
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col l4"></div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
