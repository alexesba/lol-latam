require("sails-test-helper");


describe(TEST_NAME, function(){
  describe('.create()', function(){
    it('can\'t be stored if the user email is invalid', function(done){
        User.create({ email: 'wrongemail', name: 'demo'}, function(err, user){
          expect(user).to.not.exist;
          expect(err.Errors.email).to.exist;
          expect(err.Errors.email[0].message).
                   to.equal(User.validationMessages.email.email)
          done();
        });
    });
  });
});
