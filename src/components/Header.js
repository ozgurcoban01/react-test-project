
import React , { useState ,useEffect} from 'react'
import '../styles/header.css'
import yatchLogo from '../assets/spinnaker-svgrepo-com.svg';
import { useSelector , useDispatch} from 'react-redux';
import { set } from '../counterSlice';

function Header() {
  const varr=useSelector(state=>state.counter.value);
  const dispatch=useDispatch();
  const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

  const [cscroll,setCscroll]=useState();
  const [mscroll,setMscroll]=useState();
  var gap=limit/100;
  var ropca;

  const changeColor=()=>{

    setCscroll(window.scrollY)
  }

  useEffect(()=>{
    setMscroll(limit)
    setCscroll(window.scrollY)

  },[limit])

  useEffect(()=>{
    ropca=cscroll/gap;
    setOpca(ropca*10)   
    dispatch(set());
  
  },[cscroll])




  window.addEventListener('scroll',changeColor);

  const [opca, setOpca] = useState();

  const stylesObj = {
    opacity:opca+"0%",
  };


const see=()=>{
  console.log("max scroll: "+mscroll)
  console.log("current scroll: "+cscroll)
  console.log("for opacity : "+opca)
  console.log("gap : "+gap)
  console.log("ropca : "+ropca)
};



  return (

    <div style={stylesObj} className='header'>
      
      <div className='forpadding'>
        <div className='logo'>

        <svg className='svgLogo' fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Spinnaker icon</title><path d="M21.343 0C17.785 8.741 11.317 21.987.815 23.882c10.806 1.064 19.481-5.327 21.646-8.066C24.627 13.076 21.343 0 21.343 0zM.815 23.882L.8 23.88v.004l.015-.003zM17.182 5.8C15.409 10.988 10.477 18.547 5.4 20.39c.885.033 1.74-.019 2.561-.132 3.989-3.221 7.14-8.037 9.577-12.771-.193-.981-.356-1.687-.356-1.687z"/></svg>
    
        </div>

        <div className='texts'>
          
          <div className='button'>
            <p>
              Configure
              <div className='hbline'>

              </div>
            </p>
          </div>
          <div className='button'>
            <p>For Us<div className='hbline'></div></p>
          </div>
          <div className='button'>
            <p>Build<div className='hbline'></div></p>
          </div>  
          <div className='button'>
            <p>Contanct<div className='hbline'></div></p>
          </div>
            
        </div>
      </div>

    </div>
 
  )
}

export default Header