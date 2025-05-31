import { useState,useCallback,useEffect,useRef, } from 'react'
import Container from '../components/Container';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';
function PasswordGenerator() {
  const [length, setLength] = useState(6);
  const[numAllowed,setNumAllowed]=useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const[password,setPassword]=useState("");
  const [copySuccess,setCopySuccess]=useState(false);
  //use ref
const passwordRef=useRef(null);
const timeoutRef =useRef(null);
  //useCallback 
  const passwordGenerator= useCallback(()=>{
    let password = "";
    let string ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let number ="1234567890";
    let specialChar ="!@#$%&*+=-_[]{}~`";
    if(numAllowed){
      string+=number;
    }
    if(specialCharAllowed){
      string+=specialChar;
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*string.length+1);
      password +=string.charAt(char);

    }
    setPassword(password)
  } ,[length,numAllowed,specialCharAllowed])
 // copy to clipboard code
  const copyToClipboard = useCallback(()=>{
     window.navigator.clipboard.writeText(password);
     setCopySuccess(true);
     if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
      passwordRef.current?.select();
     }
     timeoutRef.current=setTimeout(()=>{
      setCopySuccess(false);
      window.getSelection()?.removeAllRanges();
     },2000)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,specialCharAllowed,passwordGenerator])

  return (
<>
<Helmet>
  <title>Password Generator | React-ToolBox</title>
</Helmet>

 <Container>
  <h1 className='text-4xl text-center font-semibold mt-4 text-gray-50'>Password Generator</h1>
  <div className="flex shadow rounded-lg mb-4 mt-4  gap-1 mx-1">
   <InputText
   ype="text" 
   value={password}
   placeholder='Password'
   readOnly
   ref={passwordRef}
   />
    <Button variant='defult' onClick={copyToClipboard}>{copySuccess? "copied!":"copy"}</Button>
  </div>
  <div className='py-4 '>
    <div className='flex gap-3 flex-col md:flex-row w-full  mx-auto'>
      <div className='flex justify-center items-center gap-2 '>
        <input type="range" min={6} max={20} value={length} className='cursor-pointer' name='range' 
        onChange={function(e){
          setLength(parseInt(e.target.value));
        }} />
        <label htmlFor="range" className='text-gray-50'>Length: {length}</label>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <input type="checkbox" defaultChecked={numAllowed}  className='cursor-pointer' name='number' 
        onChange={function(e){ 
          setNumAllowed((prev)=>!prev);
        }} />
        <label htmlFor="number" className='text-gray-50'>Numbers</label>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <input type="checkbox" defaultChecked={specialCharAllowed}  className='cursor-pointer' name='' 
        onChange={function(e){ 
          setSpecialCharAllowed((prev)=>!prev);
        }} />
        <label htmlFor="range" className='text-gray-50'>Characters</label>
      </div>
    </div>
  </div>


    </Container>
</>
  )
}

export default PasswordGenerator
