let body = {
    "type": "comprobanteCompraBean",
    "circuitoContable": {
        "ID": -2,
        "codigo": "DEFAULT",
        "nombre": "default"
    },
    "descripcion": "",
    "fecha": "2018-12-11",
    "importeGravado": 0,
    "importeImpuestos": 0,
    "importetotal": 0,
    "moneda": {
        "ID": -2,
        "codigo": "PESOS_ARGENTINOS",
        "nombre": "Pesos Argentinos"
    },
    "numeroDocumento": "1915910685192952",
    "condicionDePago": 1,
    "cotizacion": 1,
    "cotizacionListaDePrecio": 1,
    "deposito": {
        "ID": -2,
        "codigo": "DEPOSITO_UNIVERSAL",
        "nombre": "Depósito Universal"
    },
    "fechaVto": "2018-12-11",
    "transaccionid": 0,
    "fechaComprobante": "2018-12-11",
    "proveedor": {
        "ID": 3147640,
        "codigo": "FACEBOOK_IRELAND_LIMITED",
        "nombre": "Facebook Ireland Limited"
    },
    "transaccionProductoItems": [{
        "transaccionId": 0,
        "centroDeCosto": {
            "ID": 23321,
            "codigo": "PILAR_OPERATIVOS",
            "nombre": "Pilar Operativos"
        },
        "importe": 0,
        "cantidad": 0.01,
        "deposito": {
            "ID": -2,
            "codigo": "DEPOSITO_UNIVERSAL",
            "nombre": "Depósito Universal"
        },
        "iva": 0.01,
        "montoExtento": 1000,
        "porcentajeDescuento": 0,
        "precio": 0.01,
        "precioconivaincluido": 0,
        "producto": {
            "ID": 1328264,
            "codigo": "PUBLICIDAD_FACEBOOK",
            "nombre": "Publicidad Facebook"
        },
        "total": 0
    }],
    "tipo": 99,
    "transaccionOrdenPagoItems": [],
    "transaccionPercepcionItems": []
}

module.exports = {
    body
};