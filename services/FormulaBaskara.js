class FormulaBaskara {
    static calcularBaskara(a, b, c) {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('Erro. Insira números válidos!');
            return;
        }

        if (a === 0) {
            alert('O valor de A não pode ser zero');
            return;
        }

        const delta = (b * b) - (4 * a * c);

        if (delta < 0) {
            alert('A equação não possui raízes reais');
            return;
        }

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert(`Resultado: delta = ${delta}, x1 = ${x1}, x2 = ${x2}`);
    }
}
export default FormulaBaskara;
