const fn = require('./functions');
const colors = require('colors');
const fs = require('fs');
const filecvs = './factprueba.json'; //fact.json


(async function() {
    let app = await fn.getToken(async(res) => {
        // Get Token
        const json = await JSON.parse(res.body);
        console.log(`Token obtenido: ${json.access_token}`.green);
        let token = json.access_token
            // Getitng and parsing invoice file
        try {
            lista = fs.readFileSync(filecvs, 'utf8');
            lista = JSON.parse(lista);
        } catch {
            console.log('Error al obtener el archivo ');
        };
        console.log(`Se obtuvo y parseo el archivo: ${filecvs}`);

        for (let key in lista) {
            factura = lista[key].factura.substring(0, 16);
            console.log(`Registrando factura: ${factura} registro: ${key + 1}`);
            fecha = lista[key].fecha.substring(6, 10) + '-' + lista[key].fecha.substring(0, 2) + '-' + lista[key].fecha.substring(3, 5);
            monto = 1000;
            let invoicePost = await fn.crearFactura(factura, fecha, monto, token);

        }
    });
})();