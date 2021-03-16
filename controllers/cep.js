module.exports = app => {
    app.get("/cep/:code", (req, res) => {
        // return req.params.code;
        res.json(req.params.code);
    });
};