import { useState ,useEffect} from 'react'
import './App.css'
import CurrencyInputBox from './components/CurrencyInputBox'

function App() {

  const [currencyType,setCuurencyType]=useState("usd");
  const [tocurrencyType,setToCuurencyType]=useState("inr");
  const [fromAmmount, setFromAmmount] = useState();
  const [toAmmount,setToAmmount]=useState();
  const [data, setData] = useState({})


  const [currencyOptions, setCurrencyOptions] = useState(["usd"]);
  async function getConversion(currencyType) {
    let currencies = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyType}.json`
    );
    currencies = await currencies.json();
    setData(currencies[currencyType]);
    setCurrencyOptions(Object.keys(currencies[currencyType]));
  }

  useEffect(() => {
    getConversion(currencyType);
  }, [currencyType,fromAmmount,tocurrencyType]);


  function convertCurrency(){
    let cnvtamt=data[tocurrencyType]*fromAmmount;
    console.log(cnvtamt)
    setToAmmount(cnvtamt);
  }
  function swapCurrency(){
    let a=currencyType;
    setCuurencyType(tocurrencyType);
    setToCuurencyType(a);
  }
  return (
    <>
    <div className="wrapper">
      <div className="heading">
    <h1>CURRENCY CONVERTER</h1>
    </div>
     <CurrencyInputBox label={"From"} currencyType={currencyType} setCuurencyType={setCuurencyType} dispcurrencyType={currencyType} dispAmmount={fromAmmount} setDispAmmount={setFromAmmount} currencyOptions={currencyOptions} />
     <button className='swapbtn' onClick={swapCurrency} >⇵</button>
     <CurrencyInputBox label={"To"} currencyType={currencyType} setCuurencyType={setCuurencyType} 
     tocurrencyType={tocurrencyType} setToCuurencyType={setToCuurencyType} dispcurrencyType={tocurrencyType}
     dispAmmount={toAmmount} setDispAmmount={setToAmmount} currencyOptions={currencyOptions} />
     <button className='convert' onClick={convertCurrency}>CONVERT</button>
     </div>
    </>
  )
}

export default App
