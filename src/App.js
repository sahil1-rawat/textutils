import React, { useState } from 'react';
// import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';




import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import Alert from './components/Alert';
function App() {
  const body=document.body;
  const [mode, setMode] = useState('light'); //* Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const [style,setStyle]=useState(
    {
      'color':'black',
      'backgroundColor':'white'
    }
  )
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      body.style.backgroundColor='rgba(4,39,67,0.7)';
      showAlert("Dark mode has been enabled","success");
      setStyle(
        {
          'color':'white',
          'backgroundColor':'rgba(4,39,67,0.7)'
        }
      )
      // document.title='Text Utils Dark Mode'
    } else {
      setMode('light');
      body.style.backgroundColor='#fff';
      showAlert('Light mode has been enabled','success')
      setStyle(
        {
          'color':'black',
          'backgroundColor':'white'
        }
      )
      // document.title='Text Utils Light Mode'
      
      

    }
  };
  return (
    <>
    <Router>
      <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className='container my-3'>
      <Routes>
    
    <Route exact path="/about" element={<About style={style}/>}>
    </Route>
    <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert}/>}>
        
    </Route>

  </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
