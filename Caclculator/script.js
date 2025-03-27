function calculate(event) {
    if (event.key === 'Enter') {
        calculate_total();
    }
}

function calculate_total(){
    let inputElm = document.querySelector('.input-1');
    let price = Number(inputElm.value);

    if (price < 40){
        price = price + 10
    }

    let outputElm = document.querySelector('.calculated-price');
    outputElm.innerHTML = `$${price}`;
}