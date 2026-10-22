const { Horizon } = require("@stellar/stellar-sdk");

// Endpoint fijo: este ejercicio solo consulta Stellar testnet.
const server = new Horizon.Server("https://horizon-testnet.stellar.org");

async function main() {
  const pagina = await server.ledgers().order("desc").limit(1).call();
  const ledger = pagina.records[0];
  if (!ledger) throw new Error("Testnet no devolvió un ledger.");

  console.log("Mi primer proyecto en Stellar — testnet");
  console.log("Último ledger:", ledger.sequence);
  console.log("Fecha de cierre (UTC):", ledger.closed_at);
  console.log("Transacciones exitosas:", ledger.successful_transaction_count);
console.log("Lucas ejecuto esta consulta a las (UTC):", new Date().toISOString());
}

main().catch((error) => {
  console.error("No pudimos consultar testnet:", error.message);
  process.exitCode = 1;
});
