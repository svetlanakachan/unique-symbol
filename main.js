const inputElement = document.getElementById("inputText");
const outputElement = document.getElementById("outputResult");
const outputBlock = document.getElementById("outputBlock");


inputElement.addEventListener("input", function(){
    outputBlock.style.display = 'none';
});

function getResult() { 
    let inputString = inputElement.value;
    const arrOfWords = splitStringToArr(inputString);
    let arrOfUiqueSymbs = arrOfWords.map(getFirstuUiqueSymb);
    const res = getFirstuUiqueSymb(arrOfUiqueSymbs.join(''));

    showResult(res);
}

function getFirstuUiqueSymb(inputStr) { 
    if (inputStr) {
        const length = inputStr.length;

        // частный случай: строка из 1го символа
        if (length === 1) {
            return inputStr;
        }

        for (let ind = 0; ind < length; ind++) {
            const symbol = inputStr[ind];

            // символ уникальный если первый и последний найденный индекс по текущему символу совпадают
            if (ind === inputStr.indexOf(symbol) && ind === inputStr.lastIndexOf(symbol)) {
                return symbol;
            }
        }

        // если не нашли уникальный символ
        return "";
    }
    return "";
}

function splitStringToArr(inputString) { 
    return inputString.match(/\w+/g);
}

function showResult(result) {
    outputElement.innerText = result;
    outputBlock.style.display = 'block';
}


