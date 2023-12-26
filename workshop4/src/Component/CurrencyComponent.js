const CurrencyComponet =(props)=>{

    const {currencyChoice,selectCuurency,changeCurrency,amount,onChangeAmount} = props
    

    return( 
        <div className='currency'>
            <select value={selectCuurency} onChange={changeCurrency}>
                {currencyChoice.map((choices)=>
                
                <option key={choices} value={choices}>{choices}</option>

                )}

                
                
            </select>

            <input type='number' value={amount} onChange={onChangeAmount}></input>

        </div>
    )

}

export default CurrencyComponet