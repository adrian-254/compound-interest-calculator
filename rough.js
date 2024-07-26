const Calculate = () =>{

    const principal = Number(document.getElementById("principaLabel").value);
    const duration = Number(document.getElementById("durationLabel").value);
    const rate = Number(document.getElementById("rateLabel").value);
    const interest = document.getElementById("interestSpan");
    const amount = document.getElementById("amountSpan");
    const monthlyRadio = document.getElementById("monthlyRadio");
    const annuallyRadio = document.getElementById("annuallyRadio");


    
    if(monthlyRadio.checked){
        var money = principal * Math.pow(1 + rate/100, duration / 12) 
        amount.innerHTML = money.toFixed(1);
        interest.innerHTML = money - principal ;
    } else if (annuallyRadio.checked){
        var money = principal * Math.pow(1 + rate / 100, duration )
        amount.innerHTML = money.toFixed(1);
        interest.innerHTML = money - principal;
    }
};

