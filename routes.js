import express from "express";

const routes = express.Router();

let usuarios = [
  {nome: "Maria Silva", idade: 32},
  {nome: "José Souza", idade: 34}
];

routes.get("/usuarios", (request, response) => {
  return response.json(usuarios);
});

routes.get('/usuarios/:id', (request, response) => {
  let id = request.params.id;
  return response.json([usuarios[id]])
}); 

routes.post("/usuarios", (request, response) => {
  const novoUsuario = request.body;

  usuarios.push(novoUsuario);

  return response.json(request.body);
});

routes.delete('/usuarios/:id', (request, response) => {
  let id = req.params.id;
  let usuarioDeletado = usuarios[id];
  usuarios[id] = null;
  return res.json(usuarioDeletado);
});

export default routes;