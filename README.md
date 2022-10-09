# Vanilla Javascript CRUD con gatos

Un simple CRUD con javascript que utiliza [`json-server`](https://github.com/typicode/json-server.git) como API falsa para las pruebas. En `db/api.js` se define la URL de la API y en este directorio también se encuentra el fichero `cats.backup.json` como ejemplo de fichero que servir con `json-server`.

## Modelo

Para mantenerlo relativamente sencillo la API falsa solo tiene dos entidades: `cats` y `cats-breeds`. La segunda es solo una lista de razas de gatos y la primera una lista de gatos con las propiedades `id` (único), `name`, `age`, `breed`. Todas las propiedades de tipo `string`.
