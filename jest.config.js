// Isso força a carga do .env.development, uma vez que por padrão o next/jest não carrega as variáveis development em test.
// const dotenv = require("dotenv");
// dotenv.config({ path: ".env.development" });
// mas eu vou optar por criar um .env.test, acho mais elegante

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
