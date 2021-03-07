import React from 'react'


export default function Textbox(props) {
    //destructuring
    const{
        currencyOptions,
        selectedCurrency,
        handleChange,
        onInputChange,
        amount
    }=props

    return (
        <div>
            <input type="number" value={amount} onChange={onInputChange}/>
            <select value={selectedCurrency} onChange={handleChange}>
                {currencyOptions.map(currency=>(
                    <option key={currency} value={currency} >{currency}</option>
                ))}
                
            </select>
        </div>
    )
}
