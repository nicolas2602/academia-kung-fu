const opcaoCor = document.getElementById('opcaoCor');
const formatCor = document.getElementById('tipoCor');
const configCor = document.getElementById('configCor');
const texto = document.getElementById('texto');

function definirCorFundo(definirCor, corTexto) {
    document.body.style.backgroundColor = definirCor;
    document.body.style.color = corTexto;
}

function definirCorInput(input, definirCor) {
    input.style.backgroundColor = definirCor;
}

function inputRgb(r, g, b) {
    configCor.innerHTML = ""+
        "<form id='formRgb' name='formRgb'>"+
            "<input type='text' id='rgb' name='rgb' value='rgb("+r+","+g+","+b+")'><br>"+
            "<label>R:</label>"+
            "<input type='range' id='rangeR' min='0' max='255' value='"+r+"'><br>"+
            "<label>G:</label>"+
            "<input type='range' id='rangeG' min='0' max='255' value='"+g+"'><br>"+
            "<label>B:</label>"+
            "<input type='range' id='rangeB' min='0' max='255' value='"+b+"'><br>"+
            "<button type='button' id='alterarCor'>Alterar</button>"+
        "</form>";

    const rgbInput = document.getElementById('rgb');
    const rangeR = document.getElementById('rangeR');
    const rangeG = document.getElementById('rangeG');
    const rangeB = document.getElementById('rangeB');
    const btnAlterarCor = document.getElementById('alterarCor');

    function atualizarValorRgb() {
        const r = rangeR.value;
        const g = rangeG.value;
        const b = rangeB.value;
        rgbInput.value = "rgb("+r+","+g+","+b+")";
        definirCorInput(rgbInput, rgbInput.value);
    }

    rangeR.addEventListener('input', atualizarValorRgb);
    rangeG.addEventListener('input', atualizarValorRgb);
    rangeB.addEventListener('input', atualizarValorRgb);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = rgbInput.value;
        definirCorFundo(inputColor);
    });
}

function inputHex(r, g, b) {
    configCor.innerHTML = ""+
        "<form id='formHex' name='formHex'>"+
            "<input type='text' id='hex' name='' value='#"+r+g+b+"'><br>"+
            "<label>R:</label>"+
            "<input type='range' id='rangeR' min='0' max='255' value='"+r+"'><br>"+
            "<label>G:</label>"+
            "<input type='range' id='rangeG' min='0' max='255' value='"+g+"'><br>"+
            "<label>B:</label>"+
            "<input type='range' id='rangeB' min='0' max='255' value='"+b+"'><br>"+
            "<button type='button' id='alterarCor'>Alterar</button>"+
        "</form>";

    const hexInput = document.getElementById('hex');
    const rangeR = document.getElementById('rangeR');
    const rangeG = document.getElementById('rangeG');
    const rangeB = document.getElementById('rangeB');
    const btnAlterarCor = document.getElementById('alterarCor');

    function converterParaHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function atualizarValorHex() {
        const r = converterParaHex(parseInt(rangeR.value));
        const g = converterParaHex(parseInt(rangeG.value));
        const b = converterParaHex(parseInt(rangeB.value));
        hexInput.value = "#"+r+g+b;
        definirCorInput(hexInput, hexInput.value);
    }

    rangeR.addEventListener('input', atualizarValorHex);
    rangeG.addEventListener('input', atualizarValorHex);
    rangeB.addEventListener('input', atualizarValorHex);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = hexInput.value;
        definirCorFundo(inputColor);
    });
}

function inputHsl(h, s, l) {
    configCor.innerHTML = ""+
        "<form id='formHsl' name='formHsl'>"+
            "<input type='text' id='hsl' name='hsl' value='hsl("+h+","+s+"%,"+l+"%)'><br>"+
            "<label>H:</label>"+
            "<input type='range' id='rangeH' min='0' max='360' value='"+h+"'><br>"+
            "<label>S:</label>"+
            "<input type='range' id='rangeS' min='0' max='100' value='"+s+"'><br>"+
            "<label>L:</label>"+
            "<input type='range' id='rangeL' min='0' max='100' value='"+l+"'><br>"+
            "<button type='button' id='alterarCor'>Alterar</button>"+
        "</form>";

    const hslInput = document.getElementById('hsl');
    const rangeH = document.getElementById('rangeH');
    const rangeS = document.getElementById('rangeS');
    const rangeL = document.getElementById('rangeL');
    const btnAlterarCor = document.getElementById('alterarCor');

    function atualizarValorHsl() {
        const h = rangeH.value;
        const s = rangeS.value;
        const l = rangeL.value;
        hslInput.value = "hsl("+h+","+s+"%,"+l+"%)";
        definirCorInput(hslInput, hslInput.value);
    }

    rangeH.addEventListener('input', atualizarValorHsl);
    rangeS.addEventListener('input', atualizarValorHsl);
    rangeL.addEventListener('input', atualizarValorHsl);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = hslInput.value;
        definirCorFundo(inputColor);
    });
}

function formatoCor() {
    formatCor.innerHTML = ""+
        "<form id='formCor' name='formCor' class='margem'>"+
            "<input type='radio' name='cor' value='rgb' />"+
            "<label for='rgb'>RGB</label><br>"+
            "<input type='radio' name='cor' value='hex' />"+
            "<label for='hex'>HEX</label><br>"+
            "<input type='radio' name='cor' value='hsl' />"+
            "<label for='hsl'>HSL</label>"+
        "</form>";

    const formCor = document.querySelectorAll('#formCor input[type="radio"]');

    formCor.forEach(radio => {
        radio.addEventListener('click', function() {
            const radioValue = radio.value;

            if (radioValue === "rgb") {
                inputRgb(255, 255, 255);
            } else if (radioValue === "hsl") {
                inputHsl(0, 0, 100);
            } else if (radioValue === "hex") {
                inputHex("ff", "ff", "ff");
            } else {
                configCor.innerHTML = "";
            }
        });
    });
}

function removeFormato() {
    formatCor.innerHTML = "";
    configCor.innerHTML = "";
}

function mudarCorFundo() {
    const escolherCor = opcaoCor.value;
    removeFormato();

    switch (escolherCor) {
        case 'branco':
            definirCorFundo('white', 'black');
            break;
        case 'preto':
            definirCorFundo('black', 'white');
            break;
        case 'dourado':
            definirCorFundo('gold', 'red');
            break;
        case 'vermelho':
            definirCorFundo('#8B0000', 'white');
            break;
        case 'cinza':
            definirCorFundo('#333333', 'white');
            break;
        case 'verde':
            definirCorFundo('#006400', 'white');
            break;
        default:
            formatoCor();
    }
}

opcaoCor.onchange = mudarCorFundo;