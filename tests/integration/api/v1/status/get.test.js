/*
toBe: usado para tipos primitivos(stirng, number, boolean, null, undefined)
toEqual: usado para objetos e arrays, compara o conteúdo
toBeDefined: verifica se a variável é definida (não é undefined)
toBeUndefined: verifica se a variável é undefined
toBeNull: verifica se a variável é null
toBeTruthy: verifica se a variável é truthy (qualquer valor que não seja false, 0, '', null, undefined, NaN)
toBeFalsy: verifica se a variável é falsy (false, 0, '', null, undefined, NaN)
toBeGreaterThan: verifica se um número é maior que outro
toBeGreaterThanOrEqual: verifica se um número é maior ou igual a outro
toBeLessThan: verifica se um número é menor que outro
toBeLessThanOrEqual: verifica se um número é menor ou igual a outro
toContain: verifica se um array ou string contém um determinado item
toHaveLength: verifica o comprimento de um array ou string
toMatch: verifica se uma string corresponde a uma expressão regular
*/

test("GET to /api/v1/status should returns 200 OK", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toBe(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toBeDefined();
  expect(typeof responseBody.dependencies.database.version).toBe("string");
  expect(responseBody.dependencies.database.version.length).toBeGreaterThan(0);
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  expect(typeof responseBody.dependencies.database.max_connections).toBe(
    "number",
  );
  expect(responseBody.dependencies.database.max_connections).toBeGreaterThan(0);

  expect(responseBody.dependencies.database.current_connections).toBeDefined();
  expect(typeof responseBody.dependencies.database.current_connections).toBe(
    "number",
  );
  expect(responseBody.dependencies.database.current_connections).toEqual(1);
});
