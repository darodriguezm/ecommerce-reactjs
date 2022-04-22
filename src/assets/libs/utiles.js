const formatearSeparadorDeMiles = (numero) => {
    let convertido = '';
    try {
        convertido = numero.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        convertido = convertido.split('').reverse().join('').replace(/^[\.]/, '');

    } catch (e) {
        console.error(e);

    }

    return convertido;
}

export { formatearSeparadorDeMiles };
export default undefined;