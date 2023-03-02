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

import shipPng from "../assets/svgs/111.png";

import Ucm from "../assets/1.svg";
import Mcm from "../assets/2.svg";
import Bcm from "../assets/3.svg";

import Usp from "../assets/4.svg";
import Msp from "../assets/5.svg";
import Bsp from "../assets/6.svg";

import Mcr from "../assets/7.svg";
import Ucr from "../assets/8.svg";
import Bcr from "../assets/9.svg";

import { ReactComponent as Testsvg } from "../assets/test.svg";
import Dice from "./Dice.js";
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
  var url = "";
  const [shipPngState, setShipSvgState] = useState(shipPng);
  const [logoPicture, setLogoPicture] = useState("111");

  const [visibles, setVisibles] = useState();

  const [caseTest, setCaseTest] = useState();

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

  const adjustLogo = () => {};

  useEffect(() => {
    var logoTest = "";

    if (uspvisible === "visible") {
      logoTest = logoTest + "1";
    } else if (ucrvisible === "visible") {
      logoTest = logoTest + "2";
    } else if (ucmvisible === "visible") {
      logoTest = logoTest + "3";
    }

    if (mspvisible === "visible") {
      logoTest = logoTest + "1";
    } else if (mcrvisible === "visible") {
      logoTest = logoTest + "2";
    } else if (mcmvisible === "visible") {
      logoTest = logoTest + "3";
    }

    if (bspvisible === "visible") {
      logoTest = logoTest + "1";
    } else if (bcrvisible === "visible") {
      logoTest = logoTest + "2";
    } else if (bcmvisible === "visible") {
      logoTest = logoTest + "3";
    }

    setLogoPicture(logoTest);
  }, [
    bcmvisible,
    bcrvisible,
    bspvisible,
    mcmvisible,
    mcrvisible,
    mspvisible,
    ucmvisible,
    ucrvisible,
    uspvisible,
  ]);

  useEffect(() => {
    console.log(logoPicture);
  }, [logoPicture]);

  return (
    <div data-aos="fade-up" className="configrator">
      <div className="get1">
        <div className={`get11 ${sareau}`}>
          <div className="square">
            <div className={`selected sport ${uspvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 102.4 112">
                <path d="M51.2,0c0,0-8.1,112-51.2,112h51.2h51.2C59.3,112,51.2,0,51.2,0z" />
              </svg>
            </div>
            <div className={`selected cruiser ${ucrvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 102.4 112">
                <polygon points="51.2,0 0,112 102.4,112 " />
              </svg>
            </div>
            <div className={`selected comuter ${ucmvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 102.4 112">
                <path
                  d="M73.6,48.2C73.6,20.8,51.2,0,51.2,0S28.8,20.8,28.8,48.2c0,0-28.8,4.4-28.8,63.8h51.2h51.2C102.4,52.5,73.6,48.2,73.6,48.2z
	"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`get12 ${saream}`}>
          <div className="square m">
            <div className={`selected sport ${mspvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 202.9 112">
                <path
                  d="M152.6,54.1c-20.8,0-12.8-26-5.9-42h25.2C151.5,12.1,152.6,0,152.6,0h-51.2H50.2c0,0,1.1,12.1-19.3,12.1h25.2
	c6.9,16,15,42-5.9,42c0,0,54.4,57.9-50.2,57.9h101.4h101.4C98.2,112,152.6,54.1,152.6,54.1z"
                />
              </svg>
            </div>
            <div className={`selected cruiser ${mcrvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 202.9 112">
                <polygon
                  points="152.6,61.1 152.6,8.9 161.5,8.9 152.6,0 145.9,0 101.4,0 101.4,0 57,0 50.2,0 41.3,8.9 50.2,8.9 50.2,61.1 0,112 
	101.4,112 101.4,112 202.9,112 "
                />
              </svg>
            </div>
            <div className={`selected comuter ${mcmvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 202.9 112">
                <path
                  d="M162.3,56c0-10.5-4.5-32.6-7.3-45.7l13.8-0.9c0-7.8-16.1-9.5-16.1-9.5h-51.2H50.2c0,0-16.1,1.7-16.1,9.5l13.8,0.9
C45,23.4,40.6,45.5,40.6,56C40.6,71.5,0,112,0,112h101.4h101.4C202.9,112,162.3,71.5,162.3,56z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`get13 ${sareab}`}>
          <div className="square b">
            <div className={`selected sport ${bspvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 202.9 112">
                <path d="M101.4,0H0c0,0,59.4,112,101.4,112S202.9,0,202.9,0H101.4z" />
              </svg>
            </div>
            <div className={`selected cruiser ${bcrvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 202.9 112">
                <polygon points="101.4,0 0,0 0,67.6 101.4,112 202.9,67.6 202.9,0 " />
              </svg>
            </div>
            <div className={`selected comuter ${bcmvisible}`}>
              <svg x="0px" y="0px" viewBox="0 0 203.5 112">
                <path d="M203.2,0H101.7H0.3c0,0-6.5,112,39.4,112h62h62C209.7,112,203.2,0,203.2,0z" />
              </svg>
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
        <div className="get21">
          <div className="logoConfigure">
            <img
              className="logoImg visibeLogo"
              src={require("../assets/svgs/" + logoPicture + ".png")}
            ></img>
          </div>
          <div className="logoPictureText">Configure Specs Test</div>
        </div>
        <div className="get22">
    
          <div className="content-tests">
            <div className="upp">
              {uspvisible ? "Sport" : ""} {ucrvisible ? "Cruiser" : ""}
              {ucmvisible ? "Commuter" : ""}
            </div>
            <div className="midd">
        
              {mspvisible ? "Sport" : ""} {mcrvisible ? "Cruiser" : ""}
              {mcmvisible ? "Commuter" : ""}
            </div>
            <div className="buttom">
              {bspvisible ? "Sport" : ""} {bcrvisible ? "Cruiser" : ""}
              {bcmvisible ? "Commuter" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configrator;
