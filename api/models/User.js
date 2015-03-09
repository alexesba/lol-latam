/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: { type: "string", unique: true, required: true },
    email: { type: "email" },
  },


  validationMessages: {
     email: {
          required: 'Email is required',
          email: 'Provide valid email address',
          unique: 'Email address is already taken'
        }
  }
};

