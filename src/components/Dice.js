import React from "react";
import Video from "./Content";
import "../styles/body.css";
import videoBg from "../assets/videoplayback.mp4";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { backIn } from "framer-motion";

function Dice() {
  return (
    <svg


 >
  <path d="M140.9,55.6c-7.5-6.1,2.4-12.3-27.6-13.6c-7.3-0.3-16.8,0.6-27.1,2.4l7.1-17c27.2-3.4,56.8-9.6,62.9-14
	c0,0,7.5-17.4-61.6-12.6C25.5,5.6,25.9,13.4,25.9,13.4s4.2,8.7,17.4,13.5L22.1,61.5C12.4,65,4.5,68.4,0,71h184
	C163.1,62.4,148.4,61.8,140.9,55.6z M55.1,29.5c2.5,0.3,5.3,0.4,8.2,0.3c4.6-0.1,9.9-0.4,15.5-0.9l-9,18.7
	c-8.3,1.9-16.8,4.1-24.9,6.5L55.1,29.5z M29.2,66.8c0,0,48-25.8,92.1-19.9C139.1,49.3,132.4,67,29.2,66.8z"/>
   
  </svg>
  );
}

export default Dice;
