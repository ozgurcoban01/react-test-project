import React from "react";
import "../styles/body.css";
import videoBg from "../assets/videoplayback.mp4";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import img from "../assets/img.webp";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/configrator.css";
import CssBaseline from "@mui/material/CssBaseline";
import AOS from "aos";
import hexagon from "../assets/hexagon.svg";
import triangle from "../assets/triangle.svg";
import square from "../assets/square.svg";
import { useState, useEffect } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Configrator() {
  const [check, setCheck] = useState(1);
  var cc = check;
  var left = "<";
  var right = ">";

  const [uspvisible, setuSpvisible] = useState("visible");
  const [ucrvisible, setuCrvisible] = useState("");
  const [ucmvisible, setuCmvisible] = useState("");

  const [mspvisible, setmSpvisible] = useState("visible");
  const [mcrvisible, setmCrvisible] = useState("");
  const [mcmvisible, setmCmvisible] = useState("");

  const [bspvisible, setbSpvisible] = useState("visible");
  const [bcrvisible, setbCrvisible] = useState("");
  const [bcmvisible, setbCmvisible] = useState("");

  const [sareau, setSareau] = useState("usarea");
  const [saream, setSaream] = useState("");
  const [sareab, setSareab] = useState("");

  const changeDown = () => {
    cc -= 1;
    if (cc < 1) {
      setCheck(3);
    } else {
      setCheck(cc);
    }
  };

  const changeUp = () => {
    cc += 1;
    if (cc > 3) {
      setCheck(1);
    } else {
      setCheck(cc);
    }
  };

  const setSport = () => {
    if (check == 1) {
      setuSpvisible("visible");
      setuCrvisible("");
      setuCmvisible("");
    } else if (check == 2) {
      setmSpvisible("visible");
      setmCrvisible("");
      setmCmvisible("");
    } else if (check == 3) {
      setbSpvisible("visible");
      setbCrvisible("");
      setbCmvisible("");
    }
  };

  const setCruiser = () => {
    if (check == 1) {
      setuSpvisible("");
      setuCrvisible("visible");
      setuCmvisible("");
    } else if (check == 2) {
      setmSpvisible("");
      setmCrvisible("visible");
      setmCmvisible("");
    } else if (check == 3) {
      setbSpvisible("");
      setbCrvisible("visible");
      setbCmvisible("");
    }
  };

  const setComuter = () => {
    if (check == 1) {
      setuSpvisible("");
      setuCrvisible("");
      setuCmvisible("visible");
    } else if (check == 2) {
      setmSpvisible("");
      setmCrvisible("");
      setmCmvisible("visible");
    } else if (check == 3) {
      setbSpvisible("");
      setbCrvisible("");
      setbCmvisible("visible");
    }
  };

  useEffect(() => {
    if (check == 1) {
      setSareau("usarea");
      setSaream("");
      setSareab("");
    } else if (check == 2) {
      setSareau("");
      setSaream("sarea");
      setSareab("");
    } else if (check == 3) {
      setSareau("");
      setSaream("");
      setSareab("bsarea");
    }
  }, [check]);

  return (
    <div data-aos="fade-up" className="configrator">
      <div className="get1">
        <div className={`get11 ${sareau}`}>
          <div className="square u">
            <div className={`selected sport ${uspvisible}`}>
              <img className="svg" src={square} alt="React Logo" />
            </div>
            <div className={`selected cruiser ${ucrvisible}`}>
              <img className="svg" src={hexagon} alt="React Logo" />
            </div>
            <div className={`selected comuter ${ucmvisible}`}>
              <img className="svg" src={triangle} alt="React Logo" />
            </div>
          </div>
        </div>
        <div className={`get12 ${saream}`}>
          <div className="square m">
            <div className={`selected sport ${mspvisible}`}>
              <img className="svg" src={square} alt="React Logo" />
            </div>
            <div className={`selected cruiser ${mcrvisible}`}>
              <img className="svg" src={hexagon} alt="React Logo" />
            </div>
            <div className={`selected comuter ${mcmvisible}`}>
              <img className="svg" src={triangle} alt="React Logo" />
            </div>
          </div>
        </div>
        <div className={`get13 ${sareab}`}>
          <div className="square b">
            <div className={`selected sport ${bspvisible}`}>
              <img className="svg" src={square} alt="React Logo" />
            </div>
            <div className={`selected cruiser ${bcrvisible}`}>
              <img className="svg" src={hexagon} alt="React Logo" />
            </div>
            <div className={`selected comuter ${bcmvisible}`}>
              <img className="svg" src={triangle} alt="React Logo" />
            </div>
          </div>
        </div>
        <div className="get14">
          <div onClick={changeDown} className="leftButton">
            {left}
          </div>

          <div onClick={changeUp} className="rightButton">
            {right}
          </div>
        </div>
        <div className="get15">
          <div onClick={setSport} className="selecterSport">
            Sport
          </div>
          <div onClick={setCruiser} className="selecterCruiser">
            Cruiser
          </div>
          <div onClick={setComuter} className="selecterComuter">
            Comuter
          </div>
        </div>
      </div>
      <div className="get2">
        <div className="get21"></div>
        <div className="get22"></div>
      </div>
    </div>
  );
}

export default Configrator;
