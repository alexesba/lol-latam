var Irelia = require('irelia');
var configIrelia = require('nconf');

configIrelia.argv().env().file({ file: 'config/lolcredentials.conf'});


exports.lolAPI = new Irelia({
  secure: true,
  host: configIrelia.get('host'),
  path: configIrelia.get('path'),
  key: configIrelia.get('key'),
  debug: configIrelia.get('debug')
});
