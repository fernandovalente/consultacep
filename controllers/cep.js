const axios = require('axios');

module.exports = app => {
    app.get("/cep/:code", (req, res) => {
        let cepCode = req.params.code.replace('-', '');
        let url = 'https://viacep.com.br/ws/' + cepCode +'/json/';
        axios.get(url).then((response) => {
            res.json(response.data);
        });
    });
};