const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Ejemplo de función isAuthorized, por ejemplo, para permitir todas las solicitudes
function isAuthorized(req) {
  return true;
}

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next(); // continuar con el enrutamiento de JSON Server
  } else {
    res.sendStatus(401);
  }
});

server.use(router);

const PORT = process.env.PORT || 3000; // Permitir que el puerto sea definido por el entorno (para Vercel)

server.listen(PORT, () => {
  console.log("JSON Server esta corriendo en el puerto 🌎  " + PORT);
});
