import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Configrator from './components/Configrator';
import Content from './components/Content';
import { motion } from "framer-motion"

function App() {

  return (
    <div className="App">
       
      <Header/>
     
      <Content/>
      <Body />
   
    </div>
     
  );
}

export default App;
 