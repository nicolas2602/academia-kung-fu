const opcaoCor = document.getElementById('opcaoCor');
const formatCor = document.getElementById('tipoCor');
const configCor = document.getElementById('configCor');


function definirCorFundo(definirCor){
    document.body.style.backgroundColor = definirCor;
}

function formatoCor(){
    formatCor.innerHTML = "<form id='formCor' name='formCor' class='margem'>"+
        "<input type='radio' name='cor' value='RGB' />"+
        "<label for='rgb'>RGB</label><br>"+
        "<input type='radio' name='cor' value='HEX' />"+
        "<label for='hex'>HEX</label><br>"+
        "<input type='radio' name='cor' value='HSL'/>"+
        "<label for='hsl'>HSL</label>"+
    "</form>";

    const formCor = document.querySelectorAll('#formCor input[type="radio"]');

    let radioValue = "";

    formCor.forEach(radio => {
        radio.addEventListener('click', function() {
                radioValue = radio.value.toLowerCase();

                if (radioValue === "rgb"){
                    configCor.innerHTML = "<p>RGB</p>";
                } else if (radioValue === "hsl"){
                    configCor.innerHTML = "<p>HSL</p>";
                } else if (radioValue === "hex"){
                    configCor.innerHTML = "<p>HEX</p>";
                } else {
                    configCor.innerHTML = "";
                }
        });
    });
}

function removeFormato(){
    const formCor = document.getElementById('formCor');

    if(formCor != null){
        formCor.remove();
    }
}

function mudarCorFundo(){
    const escolherCor = opcaoCor.value;
    
    switch(escolherCor){
        case 'branco':
            removeFormato();
            definirCorFundo('white');
            break;
        case 'preto':
            removeFormato();
            definirCorFundo('black');
            break;
        case 'dourado':
            removeFormato();
            definirCorFundo('gold');
            break;
        case 'vermelho':
            removeFormato();
            definirCorFundo('#8B0000');
            break;
        case 'cinza':
            removeFormato();
            definirCorFundo('#333333');
            break;
        case 'verde':
            removeFormato();
            definirCorFundo('#006400');
            break;
        default:
            formatoCor();
    }
}

opcaoCor.onchange = mudarCorFundo;