module.exports = {
  name: "baypoc",
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "www.thebay.com",
      hostHeader: "www.thebay.com",
    },
  },
};
