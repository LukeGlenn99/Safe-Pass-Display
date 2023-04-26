import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import AboutUs from './Components/About/About';
import InspirationInfo from './Components/Inspiration/Inspiration';
import Mission from './Components/Mission/Mission';
import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom';
import Grid from '@mui/material/Grid';

class App extends Component {
  render(){
    return(
    <Grid className='app'>
      <NavBar />
      <div>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/AboutUs" element={<AboutUs />}/>
          <Route path = "/Inspiration" element={<InspirationInfo />}/>
          <Route path = "/Mission" element={<Mission />}/>
          <Route path = "/Codelink" element ={<codelink />}/>
        </Routes>
      </div>
    </Grid>
    )
  }
}

export default App;