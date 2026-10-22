# Repo-1_Stellar



# Mi primer proyecto en Stellar

Este es un proyecto en **Stellar**: usa `@stellar/stellar-sdk` para consultar el último ledger de **Stellar testnet**. Un ledger es un registro del estado de la red tras un cierre. El programa muestra su número, fecha de cierre (UTC) y cantidad de transacciones exitosas. [API de ledgers](https://developers.stellar.org/docs/data/apis/horizon/api-reference/list-all-ledgers)

## Autoría y propósito

Autor: lucaschix.  
Taller: Git y GitHub… en serio · Stellar Academy · UFRO · 22 de octubre de 2026.

Mi aporte personal: agregue un nuevo log que indica la hora a la que fue realizada la consultya como en el material de clase pero puse mi nombre.

## Ejecutar

Requisitos: Node.js 22 o superior. SDK fijado: `@stellar/stellar-sdk` 16.3.1.

```bash
npm install
npm start
```

Si ya existe `package-lock.json`, también puedes usar `npm ci` para instalar exactamente las versiones bloqueadas.

## Resultado y límites

La salida muestra datos variables de testnet. Solo se consulta información: no se crea una cuenta, no se firma ni se envía ninguna transacción y no se necesitan claves secretas.

Mi prueba: ya probado si dio el resultado esperado 
(Si todavía no lo ejecutaste, escribe «No probado por mí».)

Testnet es una red de pruebas sin dinero real y puede reiniciarse. [Redes de Stellar](https://developers.stellar.org/docs/networks)

## Próxima mejora

Se podría agregar un tiempo máximo de espera y reintentos ante fallos de conexión, incorporar pruebas automáticas para las respuestas de testnet y mejorar la indentación del código para facilitar su lectura.
