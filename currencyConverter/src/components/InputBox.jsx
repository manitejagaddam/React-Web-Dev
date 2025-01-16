import React from "react";

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
  return (
    <div className="flex p-3 text-sm bg-white rounded-lg ">

    <div className="w-1/2">
    
        <label className="mb-2 text-black/40 text-bla"> {label}</label>
        <input
        
            type="number"
            className="w-full py-1.5 bg-transparent outline-none"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}

        />

    </div>

    <div className="flex flex-wrap justify-end w-1/2 text-right">

        <p className="w-full mb-2 text-black/40">Currency Type</p>

        <select
                    className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>

    </div>

    </div>
    
    );
}

export default Input;
    