let form = document.getElementById('t-form');
let resultBox = document.getElementById('result-box');
let storedText = '';
const getTranslate = (e) => {
    event.preventDefault();
    let value = e?.target?.textinput?.value;
    let valueList = value.split('\n')
    // console.log(value.split('\n'))
    try {
        while (resultBox.hasChildNodes()) {
            resultBox.removeChild(resultBox.firstChild);
          }
        valueList.forEach(tex => {
            if (tex && tex?.length > 0) {
                let li = document.createElement('li')
                li.className = 't-list'
                let labelSpan = document.createElement('span')
                labelSpan.className = 'notranslate'
                let valueSpan = document.createElement('span')
                labelSpan.className = 'translate'
                const labelTextString = `"${tex}" : `
                const valueTextString = `"${tex}",`
                const labelText = document.createTextNode(labelTextString);
                const valueText = document.createTextNode(valueTextString);
                labelSpan.appendChild(labelText);
                valueSpan.appendChild(valueText);
                li.appendChild(labelSpan);
                li.appendChild(valueSpan);
                resultBox.appendChild(li);
                storedText = storedText + labelTextString + valueTextString
            }
        });
        // console.log(storedText)

    } catch (error) { }

}

const copy = () => {
    let tListHtml = document.querySelectorAll('.t-list .translate');
    let tList = Array.from(tListHtml)
    console.log({tList: tList?.map(e=>e?.va)})
    navigator.clipboard.writeText(storedText);
    // alert("Copied!");
}
form.addEventListener("submit", getTranslate);
        // form.onsubmit = getTranslate()