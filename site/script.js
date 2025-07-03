
const resultadoConvertido = document.getElementById('resultado')

converter = () => {
    const valor = parseFloat(document.getElementById('valor').value).toFixed(2);
    const moeda = document.getElementById('moeda').value;



    fetch(`https://open.er-api.com/v6/latest/${moeda}`)
        .then(
            (resposta) => {
                return resposta.json();
            }
        ).then(
            (resposta) => {
                let resultado = valor / resposta.rates.BRL
                resultadoConvertido.textContent = resultado
            }
        ).catch(

    )

}

