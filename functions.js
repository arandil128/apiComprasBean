const request = require('request');
var body = require('./modelos').body;
const c = require('./Config');

function getToken(callback) {

    request.post({
            url: c.urlToken,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                user: c.clientId,
                pass: c.secretId
            },
            form: {
                'grant_type': 'client_credentials'
            }
        },
        function(err, res) {
            if (err) {
                throw new error(err);
            } else {
                callback(res)
            }
        });
}

function crearFactura(factura, fecha, monto, token) {

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


    request.post({
        "headers": header,
        "url": url,
        "body": JSON.stringify(body)
    }, (error, response, data) => {
        data = JSON.parse(data);
        if (error) {
            return console.dir(error);
        }
        if (data.transaccionid !== undefined) {
            console.log(`Factura: ${factura}  Fecha: ${fecha}  Monto: ${monto}  contabilizada  id: ${data.transaccionid}`);
        } else {
            console.log(`Error en factura ${factura}, Descrip: ${data.description}`.red);
        }
    });
}


module.exports = {
    getToken,
    crearFactura
}