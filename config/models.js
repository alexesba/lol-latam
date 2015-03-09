/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

dbConfig  = require('nconf');

dbConfig.env().argv().file({file: 'config/database.conf'});

module.exports.models = dbConfig.get('model').default;

