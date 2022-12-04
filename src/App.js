// import logo from './logo.svg';
import './Appa.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enable or not.UseState for Dark Mode. 

  const [alert, setAlert] = useState(null);   // UseState for Alert.
  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 20000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled','Success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','Success')
    }
  }
  return (<>
    
    {/* <Navbar title='TextUtils2' abouttext= 'About Us'/> */}
    {/* <Navbar /> */}
    <Navbar title='TextUtils2' mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading='Enter the text' mode = {mode} />
    <About/>
    </div>
        </>
  );
}

export default App;
