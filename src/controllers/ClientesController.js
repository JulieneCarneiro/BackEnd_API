class ClientesController {
  static rotas(app) {
    app.get("/clientes", (req, res) => {
      res.status(200).json({ "cliente": "fulano" });
    });

    app.post("/clientes", (req, res) => {
      const body = req.body;
      console.log(body);
      res.status(200).json(body);
    });
  }
}

export default ClientesController



