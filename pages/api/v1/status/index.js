import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersion = databaseVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections);

  const databaseName = process.env.POSTGRES_DB;
  const currentConnectionsResult = await database.query({
    text: "SELECT COUNT(*)::int AS current_connections FROM pg_stat_activity where datname = $1;",
    values: [databaseName],
  });
  const currentConnections =
    currentConnectionsResult.rows[0].current_connections;

  response.status(200).json({
    update_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: maxConnections,
        current_connections: currentConnections,
      },
    },
  });
}

export default status;
