$(document).ready(function () {
    getExchangeRate();
});

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

var fromCurrency = "";
var toCurrency = "";
var ratesUsd,ratesEur,ratesGbp,ratesHrk,eurToGbp,eurToUsd,gbpToEur,usdToEur,usdToGbp,gbpToUsd,ratesChf,ratesSgd,ratesArs,ratesBam,ratesCzk,ratesBgn,
ratesDkk,ratesEgp,ratesRub,ratesPln,ratesHuf,ratesMkd,ratesMxn,ratesSek,ratesRsd,ratesIsk,ratesNok;
var rates ="";

function getExchangeRate() {
    var apikey = "3507470c6bd6280f59d5ac5509fc51e6";
    $.ajax({
        url: 'http://data.fixer.io/api/latest?access_key=' + apikey,
        dataType: 'jsonp',
        success: function (json) {
            console.log(json);
            ratesEur = json.rates.EUR;
            ratesUsd = json.rates.USD;
            ratesGbp = json.rates.GBP;
            ratesHrk = json.rates.HRK;
            ratesAud = json.rates.AUD;
            ratesCad = json.rates.CAD;
            ratesInr = json.rates.INR;
            ratesTry = json.rates.TRY;
            ratesChf = json.rates.CHF;
            ratesSgd = json.rates.SGD;
            ratesArs = json.rates.ARS;
            ratesBam = json.rates.BAM;
            ratesCzk = json.rates.CZK;
            ratesBgn = json.rates.BGN;
            ratesDkk = json.rates.DKK;
            ratesEgp = json.rates.EGP;
            ratesRub = json.rates.RUB;
            ratesPln = json.rates.PLN;
            ratesHuf = json.rates.HUF;
            ratesMkd = json.rates.MKD;
            ratesMxn = json.rates.MXN;
            ratesSek = json.rates.SEK;
            ratesRsd = json.rates.RSD;
            ratesIsk = json.rates.ISK;
            ratesNok = json.rates.NOK;
        },
        fail: function (xhr, statusText, body) {
            console.log(body);
            console.log(xhr);
            console.log(statusText);
        },
        error: function (err) {
            console.log(err);
        }
    });
};

function convert(){

    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    if(selTo ==="GBP"){
        rates=ratesGbp;
    }else if(selTo ==="USD"){
        rates=ratesUsd;
    }else if(selTo ==="HRK"){
        rates=ratesHrk;
    }else if(selTo ==="EUR"){
        rates=ratesEur;
    }else if(selTo ==="AUD"){
        rates=ratesAud;
    }else if(selTo ==="CAD"){
        rates=ratesCad;
    }else if(selTo ==="TRY"){
        rates=ratesTry;
    }else if(selTo ==="CHF"){
        rates=ratesChf;
    }else if(selTo ==="INR"){
        rates=ratesInr;
    }else if(selTo ==="NOK"){
        rates=ratesNok;
    }else if(selTo ==="ISK"){
        rates=ratesIsk;
    }else if(selTo ==="RSD"){
        rates=ratesRsd;
    }else if(selTo ==="SEK"){
        rates=ratesSek;
    }else if(selTo ==="MXN"){
        rates=ratesMxn;
    }else if(selTo ==="MKD"){
        rates=ratesMkd;
    }else if(selTo ==="HUF"){
        rates=ratesHuf;
    }else if(selTo ==="PLN"){
        rates=ratesPln;
    }else if(selTo ==="RUB"){
        rates=ratesRub;
    }else if(selTo ==="EGP"){
        rates=ratesEgp;
    }else if(selTo ==="DKK"){
        rates=ratesDkk;
    }else if(selTo ==="BGN"){
        rates=ratesBgn;
    }else if(selTo ==="CZK"){
        rates=ratesCzk;
    }else if(selTo ==="BAM"){
        rates=ratesBam;
    }else if(selTo ==="ARS"){
        rates=ratesArs;
    }else if(selTo ==="SGD"){
        rates=ratesSgd;
    }else{alert("Currency not defined!")}
    var calculation = amount * rates;
    
    if(amount == 0){
        result.innerHTML = "Enter number, please!";
    }
    else {
    result.textContent = amount + " " + selFrom + " = " + calculation.toFixed(2) + " " + selTo;
}
}
