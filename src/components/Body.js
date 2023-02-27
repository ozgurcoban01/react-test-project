import React from 'react'
import Video from './Content'
import '../styles/body.css'
import videoBg from '../assets/videoplayback.mp4'
import { useSelector , useDispatch} from 'react-redux';
import styled from 'styled-components'
import { backIn } from 'framer-motion';

function Body() {

  


  const varr=useSelector(state=>state.counter.value);
  var seto;
  var br;
  var peto=0;

  if(varr<5){
    seto=0
  }else if(varr>=5&&varr<15){
    if(varr*10-50<50){
      seto=varr*10-50
    }else{
      seto=50
    }
  }else if(varr>=15){
    if(100-(varr*3+5)>30){
      seto=90-varr*3+5
    }else{
      seto=30
    }
  }

  if(varr-10>0){
    if((varr-10)*20<50){
      peto=(varr-10)*10
    }else{
      peto=25
    }
  }

  if(varr-10>0){
    if((varr-10)/3.5<10){
      br=(varr-10)/3.5
    }else{
      br=10
    }
  }else{
    br=0
  }

  const ArbitraryComponent = styled.div`

    /* From https://css.glass */
    background: rgba(0, 0, 0, 1);
    opacity:${seto}%;
    color:white;
    filter:blur(${br}px)
    
 `
 const ArbitraryComponentt = styled.div`
  
 filter: blur(8px);
 -webkit-filter: blur(8px);
 

 `

  return (
    <div className='body'>
      
  
        <div className='video'>

          <video style={{filter: 'blur('+peto+'px)'}} src={videoBg} autoPlay loop muted></video>   

        </div>

      <ArbitraryComponent className='intro-page'>
        <p>O`PARİ</p>
      </ArbitraryComponent>    
      
      
    </div>
  )
}

export default Body