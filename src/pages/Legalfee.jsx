import { useState } from "react"

function Legalfee(){
      const [hours, setHours] = useState("2"); 
  const [hourlyRate, setHourlyRate] = useState("20000"); 
  const [fixedFee, setFixedFee] = useState("50000"); 
  const [expenses, setExpenses] = useState("10000"); 
  const [discount, setDiscount] = useState("10"); 
  const [includeVat, setIncludeVat] = useState(true); 
  
  // Convert input strings into non-negative numbers. 
  const amount = (value) => Math.max(0, Number(value) || 0); 
  const safeDiscount = Math.min(100, amount(discount)); 
  
  const hourlyFee = amount(hours) * amount(hourlyRate); 
  const subtotal = hourlyFee + amount(fixedFee) + amount(expenses); 
  const discountAmount = subtotal * (safeDiscount / 100); 
  const afterDiscount = subtotal - discountAmount; 
  // Learning example only: actual taxable items may differ. 
  const vat = includeVat ? afterDiscount * 0.075 : 0; 
  const total = afterDiscount + vat; 
  
  const money = (value) => 
    "₦" + value.toLocaleString("en-NG", { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2, 
    }); 
  
  function resetForm() { 
    setHours("2"); 
    setHourlyRate("20000"); 
    setFixedFee("50000"); 
    setExpenses("10000"); 
    setDiscount("10"); 
    setIncludeVat(true); 
  } 
    return(
        <>
        <main style={{margin:"20px"}}>
              <main className="calculator"> 
      <h1>Legal Service Fee Calculator</h1> 
      <p className="subtitle">Estimate legal service charges</p> 
  
      <label htmlFor="hours">Hours worked</label> 
      <input id="hours" type="number" min="0" value={hours} 
        onChange={(e) => setHours(e.target.value)} /> 
  
      <label htmlFor="rate">Hourly rate (₦)</label> 
      <input id="rate" type="number" min="0" value={hourlyRate} 
        onChange={(e) => setHourlyRate(e.target.value)} /> 
  
      <label htmlFor="fixed">Fixed service fee (₦)</label> 
      <input id="fixed" type="number" min="0" value={fixedFee} 
        onChange={(e) => setFixedFee(e.target.value)} /> 
  
      <label htmlFor="expenses">Additional expenses (₦)</label>
         <input id="expenses" type="number" min="0" value={expenses} 
        onChange={(e) => setExpenses(e.target.value)} /> 
  
      <label htmlFor="discount">Discount (%)</label> 
      <input id="discount" type="number" min="0" max="100" 
        value={discount} onChange={(e) => setDiscount(e.target.value)} /> 
  
      <label className="check-row"> 
        <input type="checkbox" checked={includeVat} 
          onChange={(e) => setIncludeVat(e.target.checked)} /> 
        Include illustrative VAT (7.5%) 
      </label> 
  
      <section className="results"> 
        <h2>Fee breakdown</h2> 
        <p>Hourly fee: {money(hourlyFee)}</p> 
        <p>Subtotal: {money(subtotal)}</p> 
        <p>Discount: -{money(discountAmount)}</p> 
        <p>VAT: {money(vat)}</p> 
        <h2>Total: {money(total)}</h2> 
      </section> 
      <button type="button" onClick={resetForm}>Reset calculator</button> 
    </main>
        </main>
        </>
    )
}

export default Legalfee;