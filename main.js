const Calculate = () => {
    // Constants
    const principal = Number(document.getElementById("principalLabel").value);
    const duration = Number(document.getElementById("durationLabel").value);
    const rate = Number(document.getElementById("rateLabel").value);
    const interest = document.getElementById("interestSpan");
    const amount = document.getElementById("amountSpan");
    const monthlyRadio = document.getElementById("monthlyRadio");
    const annuallyRadio = document.getElementById("annuallyRadio");
    const tarehe = date.getFullYear();

    //the calculation
    if (monthlyRadio.checked) {
        // Monthly compounding
        let Money = principal * Math.pow(1 + rate / 100, duration / 12);
        amount.innerHTML = Money.toFixed(2);  
        interest.innerHTML = (Money - principal).toFixed(2);  // Display interest with 2 d.place
    } else if (annuallyRadio.checked) {
        // Annual compounding
        let Money = principal * Math.pow(1 + rate / 100, duration);
        amount.innerHTML = Money.toFixed(2);  // Display total amount with 2 decimal places
        interest.innerHTML = (Money - principal).toFixed(2);  // Display interest with 2.places
    }
};
