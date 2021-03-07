import './App.css';
import Textbox from './components/textbox.js';
import React,{useEffect,useState} from "react";

const Currency_Url="https://api.exchangeratesapi.io/latest";
function App()
{
    const [currencyOptions,setCurrencyOptions]=useState([])         //here we take empty array because initially we dont have any data
    console.log(setCurrencyOptions);
    const[convertFromCurrency, setFromCurrency]=useState()       //convert from 
    const[convertToCurrency,setToCurrency]=useState()
    const[exchangeRate,setExchangeRate]=useState()
    const[amount,setAmount]=useState(1)              //by default we make our amount 1
    const[amountInFromCurrency,setAmountInFromCurrency]=useState(true)        

    let toAmount,fromAmount;
    if(amountInFromCurrency)
    {
        fromAmount=amount;
        toAmount=amount*exchangeRate;
    }
    else
    {
        toAmount=amount;
        fromAmount=amount/exchangeRate;
    }

    useEffect(() => {
    fetch(Currency_Url)
    .then(res=>res.json())
    .then(data=>{
        setCurrencyOptions([data.base,...Object.keys(data.rates)])          //set the setCurrencyOptions 
        setFromCurrency(data.base)
        setToCurrency(Object.keys(data.rates)[0])
        setExchangeRate(data.rates[Object.keys(data.rates)[0]])
    })
    }, [])

//the purpose of this useEffect is to update the amount when we change the currency
    useEffect(() => {
        if(convertToCurrency!=null && convertFromCurrency!=null)
        {
       fetch(`${Currency_Url}?base=${convertFromCurrency}&symbols=${convertToCurrency}`)
       .then(res=>res.json())
       .then(data=>setExchangeRate( data.rates[convertToCurrency]))
        }
    }, [convertFromCurrency,convertToCurrency])

    function handleFromInputChange(event)
    {
        setAmount(event.target.value);
        setAmountInFromCurrency(true);
    }
    function handleToInputChange(event)
    {
        setAmount(event.target.value);
        setAmountInFromCurrency(false);
    }
return(
    <>
    
    <div className="mainDiv">
    <h1>Currency Convertor</h1>
    <Textbox 
        currencyOptions={currencyOptions}
        selectedCurrency={convertFromCurrency}
        handleChange={e=>setFromCurrency(e.target.value)}
        amount={fromAmount}
        onInputChange={handleFromInputChange}
    />
        <p className="arrows">↑↓</p> 
    <Textbox 
        currencyOptions={currencyOptions}
        selectedCurrency={convertToCurrency}
        handleChange={e=>setToCurrency(e.target.value)}
        amount={toAmount}
        onInputChange={handleToInputChange}
    />
    </div>
    </>
)
}

export default App;

