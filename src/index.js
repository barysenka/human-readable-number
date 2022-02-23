module.exports = function toReadable (number) {
    let strNum = '';
   
        
        let strucNum = ['hundred', 'thousand', 'million', 'billion', 'trillion']
        let unitsNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven','twelve', 'thirteen','fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen']
        let tensNum= ['twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
        if (number == 0){
            strNum = 'zero'
        }

    if (+number < 0){
        number = number * (-1);
        strNum = + 'negative ' + toReadable(number);
    }
    
    if (0 < number && number < 20){
        unitsNum.forEach(function(elem, index){
            if(number === index){
                strNum = elem
            }
    })
    
    }else if(20 <= number && number < 100){
        let tens = Math.trunc(number/10);
        
        tensNum.forEach(function(elem, index){
            if(tens === index+2){
                strNum = elem
            }
        })
        if((number - tens*10) > 0){
        unitsNum.forEach(function(elem, index){
            if((number - tens*10) === index){
                strNum = strNum + ' ' + elem
            }
        })
        }
    }else if(100 <= number && number < 1000){
        hundreds = Math.trunc(number/100);
        if((number - hundreds*100)>0){
        strNum = toReadable(hundreds) + ' ' + strucNum[0] + ' ' + toReadable(number - 100*hundreds);
        }else{
            strNum = toReadable(hundreds) + ' ' + strucNum[0]
        }
    }else if(1000 <= number && number < 1000000){
        thousand = Math.trunc(number/1000);
        strNum = toReadable(thousand) + ' ' + strucNum[1] + ' ' + toReadable(number - 1000*thousand);
    
    }else if(1000000 <= number && number < 1000000000){
        million = Math.trunc(number/1000000);
        strNum = toReadable(million) + ' ' + strucNum[2] + ' ' + toReadable(number - 1000000*million);
    }
    
    return strNum;
    }

