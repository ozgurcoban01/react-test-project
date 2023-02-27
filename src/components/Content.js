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
import Configrator from './Configrator';

import CssBaseline from '@mui/material/CssBaseline';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Content() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const varr = useSelector((state) => state.counter.value);
  var seto = 0;

  if (varr - 15 > 0) {
    if ((varr - 15) * 20 < 100) {
      seto = (varr - 15) * 20;
    } else {
      seto = 100;
    }
  }


 

  return (
    <div>


      <div
        style={{
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: seto + "%",
        }}
        className="content"
      >

        <div data-aos="fade-up" className="contentcard">
          <div className="cardborder">
            <Card style={{backgroundColor:'transparent',color:'black',backdropFilter: 'blur(15px)',color:'rgba(255,255,255, 0.5)'}} theme={darkTheme} elevation={8} sx={{ maxWidth: 500 }}>
              <CardActionArea style={{backgroundColor:'transparent'}}>
                <CardMedia style={{backgroundColor:'transparent'}}
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                />
                <CardContent className="cardContent"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>
                  <Typography className="lizard" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}} gutterBottom variant="h3" component="div">
                   
                    <div style={{width:'40%'}}>
                      Lizard
                      <div className="cbline"></div>
                    </div>
                    
                  </Typography>
                  
                  <Typography className="lizard" variant="body3" color="rgba(255,255,255, 0.2)">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="cardtext">
            <div>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="bline"></div>
          </div>

        </div>
       
        <div data-aos="fade-up" className="contentcard">

          <div className="cardtext">
            <div>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="bline"></div>
          </div>

          <div className="cardborder">
            <Card style={{backgroundColor:'transparent',color:'black',backdropFilter: 'blur(15px)',color:'rgba(255,255,255, 0.5)'}} theme={darkTheme} elevation={8} sx={{ maxWidth: 500 }}>
              <CardActionArea style={{backgroundColor:'transparent'}}>
                <CardMedia style={{backgroundColor:'transparent'}}
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                />
                <CardContent className="cardContent"  style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>
                  <Typography className="lizard" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}} gutterBottom variant="h3" component="div">
                   
                    <div style={{width:'40%'}}>
                      Lizard
                      <div className="cbline"></div>
                    </div>
                    
                  </Typography>
                  
                  <Typography className="lizard" variant="body3" color="rgba(255,255,255, 0.2)">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

        </div>
       
        <Configrator/>
      </div>

    </div>
  );
}

export default Content;
