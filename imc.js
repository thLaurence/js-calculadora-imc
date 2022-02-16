function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    
    const result = (peso / (altura**2));

    const IMC = Math.round(result * 10) / 10;

    //=====SIN VALORES INGRESADOS=====
    if(altura == 0){
        document.getElementById('form_alert_altura').textContent = "Por favor, digite una altura"
        document.getElementById('form_alert_altura').className = "none"
        document.getElementById('form_div_altura').className = "form_alert_color"
        document.getElementById('form_icon_error_altura').style = "visibility: visible;"
    }else {
        document.getElementById('form_alert_altura').className = "form_alert"
        document.getElementById('form_div_altura').className = "none"
        document.getElementById('form_icon_error_altura').style = "visibility: hidden;"
    }
    
    if(peso == 0){
        document.getElementById('form_alert_peso').textContent = "Por favor, digite una peso"
        document.getElementById('form_alert_peso').className = "none"
        document.getElementById('form_div_peso').className = "form_alert_color"
        document.getElementById('form_icon_error_peso').style = "visibility: visible;"
    }else {
        document.getElementById('form_alert_peso').className = "form_alert"
        document.getElementById('form_div_peso').className = "none"
    }

    if(altura != 0 && peso != 0){
        document.getElementById('resultado').style = "visibility: visible;";
        document.getElementById('IMC').textContent = "Su IMC es: " + IMC;
    }
    //=====INTERVALOS DE PESOS=====
    if(IMC <= 18.5){
        document.getElementById('estado-peso').textContent = "Usted se encuentra bajo peso.";
        document.getElementById('result_bar').className = "result_bar_box result_bajo_peso";
        document.getElementById('resultado').className = "result result_visible";
        document.getElementById('result_bar_text').textContent = IMC;
        
    } else if(IMC >= 18.5 && IMC <= 24.9){
        document.getElementById('estado-peso').textContent = "Su peso se encuentra dentro de lo saludable.";
        document.getElementById('result_bar').className = "result_bar_box result_saludable";
        document.getElementById('resultado').className = "result result_visible";
        document.getElementById('result_bar_text').textContent = IMC;
    } else if(IMC >= 25.0 && IMC <= 29.9){
        document.getElementById('estado-peso').textContent = "Usted se encuentra sobrepeso.";
        document.getElementById('result_bar').className = "result_bar_box result_sobrepeso";
        document.getElementById('resultado').className = "result result_visible";
        document.getElementById('result_bar_text').textContent = IMC;
    } else if(IMC > 29.9){
        document.getElementById('estado-peso').textContent = "Usted se encuentra con obesidad.";
        document.getElementById('result_bar').className = "result_bar_box result_obeso";
        document.getElementById('resultado').className = "result result_visible";
        document.getElementById('result_bar_text').textContent = IMC;
    }
    

}


//const multiply = (a, b) => {
//    let resultado = a + b
//    return resultado;
//}

