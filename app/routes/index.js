const mvRouter = require("./museum_visitor")

module.exports = (server) => {
  server.use('/api/visitors',mvRouter);
  return server;
}
