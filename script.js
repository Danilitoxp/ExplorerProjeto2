
document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const resultSpan = document.querySelector("#result span");

    generateButton.addEventListener("click", function () {
        const gs1 = document.getElementById("gs1").value;
        const cnpj = document.getElementById("cnpj").value;
        const codigo8 = document.getElementById("codigo8").value;

        // Aqui, você pode implementar a lógica para gerar o código EAN com base nos valores dos campos
        const codigoEAN = gs1 + cnpj + codigo8;

        // Exiba o código EAN gerado no elemento resultSpan
        resultSpan.textContent = codigoEAN;
    });
});
