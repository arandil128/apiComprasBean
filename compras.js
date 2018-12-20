var Request = require("request");
var body = require('./modelos').body;
const constantes = require('./config');
const fs = require('fs');
let csvToJson = require('convert-csv-to-json');

const token = '26Yd9mL1JHPCvS/s_RC2FlT4fj96RnDc19r74FmqhTA6b=v3RYRR3XOxkE*VQPfzU2aZwqg-vYNg7q5+4E+=rXk4ZaYrkU*I7cFzTP4nxD8JdT622/Y*q0p3-l26Yd9mL1JHPCvS/s_RC2FlT4fj9';


// Levantar datos

try {
    lista = fs.readFileSync('./factprueba.json', 'utf8'); //fact.json
    lista = JSON.parse(lista);
} catch {
    console.log('Error al obtener el archivo ');
};

// Crear facturas
let crearFactura = (factura, fecha, monto) => {

    let header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    let url = 'https://xubio.com:443/API/1.1/comprobanteCompraBean';

    body.numeroDocumento = factura;
    body.fechaComprobante = fecha;
    body.fecha = '2018-12-31';
    body.fechaVto = fecha;
    body.transaccionProductoItems[0].montoExtento = monto;


    Request.post({
        "headers": header,
        "url": url,
        "body": JSON.stringify(body)
    }, (error, response, data) => {
        if (error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(data));
    });
}

//Iteracion

for (let key in lista) {

    factura = lista[key].factura.substring(0, 16);
    fecha = lista[key].fecha.substring(6, 10) + '-' + lista[key].fecha.substring(0, 2) + '-' + lista[key].fecha.substring(3, 5);
    monto = 1000;
    crearFactura(factura, fecha, monto);
    console.log(`Factura: ${factura}  Fecha: ${fecha}  Monto: ${monto} `);
}



// Grabar log