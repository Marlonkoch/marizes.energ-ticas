document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let source1 = parseFloat(document.getElementById('source1').value);
    let source2 = parseFloat(document.getElementById('source2').value);
    let source3 = parseFloat(document.getElementById('source3').value);

    let total = source1 + source2 + source3;

    if (total !== 100) {
        document.getElementById('result').innerHTML = "<p style='color: red;'>A soma das porcentagens deve ser igual a 100%.</p>";
    } else {
        document.getElementById('result').innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Energia Solar:</strong> ${source1}%</p>
            <p><strong>Energia Eólica:</strong> ${source2}%</p>
            <p><strong>Energia Hidrelétrica:</strong> ${source3}%</p>
            <p><strong>Total:</strong> 100%</p>
        `;
    }
});
