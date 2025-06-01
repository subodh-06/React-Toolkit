import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme';
import Home from './pages/Home'
import TodoApp from './pages/TodoApp'
import TempratureConvertor from './pages/TempratureConvertor'
import PasswordGenerator from './pages/PasswordGenerator'
import ExchangeRateApp from './pages/ExchangeRateApp'
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';

import Layout from './Layout';
import { useState,useEffect } from 'react';


function App() {
 
  const [themeMode,setThemeMode]=useState("light");

  const lightTheme =()=>{
    setThemeMode("light")
  }
 const darkTheme=()=>{
  setThemeMode("dark")
 }

 // change theme
 useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark');
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])


  return (
     <ThemeProvider>
    <Router>
      <Routes>
         <Route path="/" element={<Layout />}>
       <Route path='' element={<Home key="home" />} />
        <Route path='/todo-app' element={<TodoApp/>}/>
        <Route path='/temprature-convertor' element={<TempratureConvertor/>}/>
        <Route path='/password-generator' element={<PasswordGenerator/>}/>
        <Route path='/exchange-rate-calculator' element={<ExchangeRateApp/>}/>
         <Route path="*" element={<NotFound />} />
          <Route path="/tools/:tool" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
