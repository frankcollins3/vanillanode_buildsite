import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GoPage from './components/webpage/GoPage'
import {connect} from "react-redux"
import store from "./redux/store"

// console.log('store')
// console.log(store)



function App() {

  return (

      <Router>

    <Routes>

    <Route path={'/'} element={ < GoPage /> } />

    </Routes>

  </Router>

    // <h1> hey whats up guys </h1>
//     <div className="App" style={{ 
//       backgroundImage: `url('img/noScreenPokedex.jpeg')`,
//       display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
//     }}>
//   <div style={{  }}>

// {/* firefunc firefunc2 apitest */}
// <button style={{backgroundImage: `url('img/pokeball.png')`}}  className="Intro-Buttons Bg-Cover-noRepeat" id="IB1" onClick={firefunc}> </button>
// <button style={{backgroundImage: `url('img/greatball.png')`}} className="Intro-Buttons Bg-Cover-noRepeat" id="IB2" onClick={firefunc2}></button>
// <button style={{backgroundImage: `url('img/ultraball.png')`}} className="Intro-Buttons Bg-Cover-noRepeat" id="IB3" onClick={apitest}></button>

//       </div>

    
//     </div>
  );
}

export default App;
