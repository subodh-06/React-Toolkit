import { useState,useId } from 'react'
import InputText from '../components/InputText';
import Container from '../components/Container';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


function TempratureConvertor() {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit,setFahrenheit] =useState("");
   const id = useId();
    const celsiusId = `${id}-celsius`;
    const fahrenheitId = `${id}-fahrenheit`;
   const celsiusCalculate =(e)=>{
     const value = e.target.value;
     setCelsius(value);
    if (value===""||isNaN(value)) {
      setFahrenheit("");
      return;
    }
    const f = (parseFloat(value)*9/5)+32;
    setFahrenheit(f.toFixed(2));
   }

   const fahrenheitCalculate =(e)=>{
    const value = e.target.value;
    setFahrenheit(value);
    if(value===""||isNaN(value)){
      setCelsius("");
      return;
    }
    const c = (parseFloat(value)-32)*5/9;
    setCelsius(c.toFixed(2));
   }
  //  useEffect(()=>{
  //     console.log("ok")
  //   })
  return (
    
   <>
 <Helmet>
  <title>Temprature Convertor</title>
 </Helmet>

    <Container>
       <h1 className='text-zinc-50 text-3xl font-semibold text-center hover:text-zinc-100'>🌡️ Temperature Converter</h1>
         <div>
          <form onSubmit={(e)=>e.preventDefault()}>
             <div className='flex flex-col mx-11 mt-6'>
              <label htmlFor={celsiusId} className='text-zinc-100 font-semibold'>Celsius (°C)</label>
             <InputText
             id={celsiusId}
             type='number'
             placeholder="Enter Celsius"
             value={celsius}
             onChange={celsiusCalculate}
             />
             </div>
             <div className='flex flex-col mx-11 mt-4 gap-1'>
              <label htmlFor={fahrenheitId} className='text-zinc-100 font-semibold'>Fahrenheit (°F)</label>
             <InputText type="number" id={fahrenheitId} placeholder='Enter Fahrenheit'
             value={fahrenheit}
             onChange={fahrenheitCalculate}
 />
             </div>
          </form>
         </div>
    </Container>

   </>
  )
}

export default TempratureConvertor
