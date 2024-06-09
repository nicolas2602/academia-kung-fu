const opcaoCor = document.getElementById('opcaoCor');
const formatCor = document.getElementById('tipoCor');
const configCor = document.getElementById('configCor');
const texto = document.getElementById('texto');

function definirCorFundo(definirCor) {
    document.body.style.backgroundColor = definirCor;
}

function definirCorInput(input, definirCor) {
    input.style.backgroundColor = definirCor;
}

function inputRgb(r, g, b) {
    configCor.innerHTML = `
        <form id='formRgb' name='formRgb'>
            <input type='text' id='rgb' name='rgb' value='rgb(${r},${g},${b})' readonly>
            <div>
                <label>R:</label>
                <input type='range' id='rangeR' min='0' max='255' value='${r}'>
            </div>
            <div>
                <label>G:</label>
                <input type='range' id='rangeG' min='0' max='255' value='${g}'>
            </div>
            <div>
                <label>B:</label>
                <input type='range' id='rangeB' min='0' max='255' value='${b}'>
            </div>
            <button type='button' id='alterarCor'>Alterar</button>
        </form>
    `;

    const rgbInput = document.getElementById('rgb');
    const rangeR = document.getElementById('rangeR');
    const rangeG = document.getElementById('rangeG');
    const rangeB = document.getElementById('rangeB');
    const btnAlterarCor = document.getElementById('alterarCor');

    function updateRgbValue() {
        const r = rangeR.value;
        const g = rangeG.value;
        const b = rangeB.value;
        rgbInput.value = `rgb(${r},${g},${b})`;
        definirCorInput(rgbInput, rgbInput.value);
    }

    rangeR.addEventListener('input', updateRgbValue);
    rangeG.addEventListener('input', updateRgbValue);
    rangeB.addEventListener('input', updateRgbValue);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = rgbInput.value;
        definirCorFundo(inputColor);
    });
}

function inputHex(r, g, b) {
    configCor.innerHTML = `
        <form id='formHex' name='formHex'>
            <input type='text' id='hex' name='hex' value='#${r}${g}${b}' readonly>
            <div>
                <label>R:</label>
                <input type='range' id='rangeR' min='0' max='255' value='${parseInt(r, 16)}'>
            </div>
            <div>
                <label>G:</label>
                <input type='range' id='rangeG' min='0' max='255' value='${parseInt(g, 16)}'>
            </div>
            <div>
                <label>B:</label>
                <input type='range' id='rangeB' min='0' max='255' value='${parseInt(b, 16)}'>
            </div>
            <button type='button' id='alterarCor'>Alterar</button>
        </form>
    `;

    const hexInput = document.getElementById('hex');
    const rangeR = document.getElementById('rangeR');
    const rangeG = document.getElementById('rangeG');
    const rangeB = document.getElementById('rangeB');
    const btnAlterarCor = document.getElementById('alterarCor');

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function updateHexValue() {
        const r = componentToHex(parseInt(rangeR.value));
        const g = componentToHex(parseInt(rangeG.value));
        const b = componentToHex(parseInt(rangeB.value));
        hexInput.value = `#${r}${g}${b}`;
        definirCorInput(hexInput, hexInput.value);
    }

    rangeR.addEventListener('input', updateHexValue);
    rangeG.addEventListener('input', updateHexValue);
    rangeB.addEventListener('input', updateHexValue);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = hexInput.value;
        definirCorFundo(inputColor);
    });
}

function inputHsl(h, s, l) {
    configCor.innerHTML = `
        <form id='formHsl' name='formHsl'>
            <input type='text' id='hsl' name='hsl' value='hsl(${h},${s}%,${l}%)' readonly>
            <div>
                <label>H:</label>
                <input type='range' id='rangeH' min='0' max='360' value='${h}'>
            </div>
            <div>
                <label>S:</label>
                <input type='range' id='rangeS' min='0' max='100' value='${s}'>
            </div>
            <div>
                <label>L:</label>
                <input type='range' id='rangeL' min='0' max='100' value='${l}'>
            </div>
            <button type='button' id='alterarCor'>Alterar</button>
        </form>
    `;

    const hslInput = document.getElementById('hsl');
    const rangeH = document.getElementById('rangeH');
    const rangeS = document.getElementById('rangeS');
    const rangeL = document.getElementById('rangeL');
    const btnAlterarCor = document.getElementById('alterarCor');

    function updateHslValue() {
        const h = rangeH.value;
        const s = rangeS.value;
        const l = rangeL.value;
        hslInput.value = `hsl(${h},${s}%,${l}%)`;
        definirCorInput(hslInput, hslInput.value);
    }

    rangeH.addEventListener('input', updateHslValue);
    rangeS.addEventListener('input', updateHslValue);
    rangeL.addEventListener('input', updateHslValue);

    btnAlterarCor.addEventListener('click', function() {
        const inputColor = hslInput.value;
        definirCorFundo(inputColor);
    });
}

function formatoCor() {
    formatCor.innerHTML = `
        <form id='formCor' name='formCor' class='margem'>
            <input type='radio' name='cor' value='RGB' />
            <label for='rgb'>RGB</label><br>
            <input type='radio' name='cor' value='HEX' />
            <label for='hex'>HEX</label><br>
            <input type='radio' name='cor' value='HSL'/>
            <label for='hsl'>HSL</label>
        </form>
    `;

    const formCor = document.querySelectorAll('#formCor input[type="radio"]');

    formCor.forEach(radio => {
        radio.addEventListener('click', function() {
            const radioValue = radio.value.toLowerCase();

            if (radioValue === "rgb") {
                inputRgb(255, 255, 255);
            } else if (radioValue === "hsl") {
                inputHsl(0, 100, 50);
            } else if (radioValue === "hex") {
                inputHex("ff", "ff", "ff");
            } else {
                configCor.innerHTML = "";
            }
        });
    });
}

function removeFormato() {
    const formCor = document.getElementById('formCor');

    if (formCor != null) {
        formCor.remove();
    }
}

function mudarCorFundo() {
    const escolherCor = opcaoCor.value;

    switch (escolherCor) {
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
