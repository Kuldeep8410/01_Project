import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Design from './signup-login/Design'
import Signup from './signup-login/Signup'

import AOS from 'aos'
import Login from './signup-login/Login'

function App() {
  const [count, setCount] = useState(0)

  useEffect (() =>{
       AOS.init({duration : 3000});
  },[])

  return (
   
      <div className='w-full h-screen bg-amber-400'>
        <Signup />
        <Login />
      </div>
    
  )
}

export default App
