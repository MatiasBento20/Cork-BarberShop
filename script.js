function realizarSolicitud() {
    var dni = document.getElementById('dni');
    const config = {
        url: 'https://cork-be-eqqr-dev.fl0.io/getcustomer',
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({dni: dni}),
    };

    axios(config)
        .then(response => {
            // Manejar la respuesta del servidor
            console.log(response.data);
        })
        .catch(error => {
            // Manejar errores
            console.error(error);
        });
}