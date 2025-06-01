import { useState, useId } from 'react';
import useExchangeRate from '../hooks/useExchangeRate'
import Container from '../components/Container'
import InputText from '../components/InputText';
import { Helmet } from 'react-helmet-async';
import Heading from '../components/Heading';
import Label from '../components/Label';
const currencyList =["USD", "EUR", "INR", "JPY", "GBP", "AUD", "CAD", "CNY"];

function ExchangeRateApp() {
  const [amount, setAmount] = useState(1);
  const[to,setTo]=useState("INR");
  const [from,setFrom]=useState("USD");

  const amountId = useId();
  const fromId = `${amountId}-from`;
  const toId = `${amountId}-to`;

  const {rate,loading,err} =useExchangeRate(from,to);
  const convertedRate = rate ? (amount*rate).toFixed(2):"";


  return (
    <>
    <Helmet>
      <title> Currency Exchange Rate Calculator | React-ToolBox</title>
      <meta name="description" content="Calculate the Currency Exchange Rate in Real-time" />
    </Helmet>
    <Container>
        <Heading>🔁 Live Exchange Rate</Heading>

        <div className='w-full'>
          <form onSubmit={(e) => e.preventDefault()} className='w-full'>
            <div className='flex flex-col mx-18 gap-1 mt-4'>
              <Label  htmlFor={amountId}>Amount</Label>
              <InputText
              type='number'
               onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter Amount'
                id={amountId}

              />
            </div>
            <div className='flex  gap-4 mx-18 mt-4'>
              <div className='flex-1'>
                <Label htmlFor={amountId}>From</Label>
                <select className='w-full px-3 py-2 rounded-md text-neutral-950 bg-neutral-200' value={from} onChange={(e)=>setFrom(e.target.value)} id={fromId}>
                  {
                    currencyList.map((cur)=>(
                  <option key={cur} value={cur}>{cur}</option>
                    ))
                  }
                </select>
              </div>
              <div className='flex-1'>
                <Label htmlFor={amountId}>To</Label>
               <select className='w-full px-3 py-2 rounded-md text-neutral-950 bg-neutral-200' value={to} onChange={(e)=>setTo(e.target.value)} id={toId}>
                  {
                    currencyList.map((cur)=>(
                  <option key={cur} value={cur}>{cur}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="mx-4 md:mx-16 mt-4 text-neutral-100 dark:text-neutral-100 font-medium text-center">
  {loading && (
    <p className="text-yellow-400 animate-pulse" aria-label="Loading">
      🔄 Loading...
    </p>
  )}

  {err && (
    <p className="text-red-400" aria-label="Error">
      ⚠️ {err}
    </p>
  )}

  {!loading && !err && rate && (
    <p className="text-green-400" aria-label="Conversion Result">
      {amount} {from} = {convertedRate} {to}
    </p>
  )}
</div>

    </Container>
    </>
  )
}

export default ExchangeRateApp
