$("#fromDropdown").ddslick({
    data: ddData,
    width: 300,
    height: 200,
    imagePosition: "left",
    selectText: "Choose a currency",
    onSelected: function selection(data) {
        selFrom = data.selectedData.value;
    }
});
$("#toDropdown").ddslick({
    data: ddData,
    width: 300,
    height: 200,
    imagePosition: "left",
    selectText: "Choose a currency",
    onSelected: function(data) {
         selTo = data.selectedData.value;
    }
});
function convertCurrency() {
    var fromCurrency = selFrom;
    var toCurrency = selTo;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.fixer.io/latest?symbols=" + fromCurrency + "," + toCurrency;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
        if (selFrom === "EUR") {
            oneUnit = jsResult.rates[toCurrency];
        }else if (selTo === "EUR") {
            oneUnit = 1/jsResult.rates[fromCurrency];
        }else 
            var oneUnit = jsResult.rates[toCurrency]/jsResult.rates[fromCurrency];
            var amount = document.getElementById('amount').value;
            var res = document.getElementById('result');
            var calculation = oneUnit*amount;
            if(amount == 0){
            res.innerHTML = "Enter number, please!";
    }else {
        if (selTo == selFrom) {
            res.textContent = "Choose diferent currencies, please!"}
        else {      
            res.textContent = amount + " " + selFrom + " = " + calculation.toFixed(2) + " " + selTo;}
        }
    }
}
}
