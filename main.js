var myDate = new Date();

console.log(myDate);

const amk = require('azure-msi-keyvault')
const p = amk.enrichEnvvarsWithKvSecrets()
p.catch(() => {})

