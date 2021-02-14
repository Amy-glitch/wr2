import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import {DbProvider} from './Ctx.js';
import { useState } from 'react';

function App() {
  const [log,setLog] = useState(false);

  if(log === true)
  {

  return <DbProvider ><Nav/></DbProvider>
  
  }
  else
  {
  return   <DbProvider  > <Login setLog={setLog}></Login>  </DbProvider>
  }
}

export default App;
