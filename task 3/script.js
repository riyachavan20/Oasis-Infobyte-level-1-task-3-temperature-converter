const calculateTemp=() => {
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    const celtofah=(cel) => {
        let fahrenheit = Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fahtocel= (fehr) => {
        let celcius = Math.round((fehr-32) * 5/9 );
        return celcius;
    }
    let result;
    if(valueTemp=='cel'){
        result=celtofah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}° fahrenheit`;

    }else{
        result=fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}° celcius`;
        
    }


}