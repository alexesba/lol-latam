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

    it('can\'t be stored if the user email is empty', function(done){
        User.create({ email: '', name: 'demo'}, function(err, user){
          expect(user).to.not.exist;
          expect(err.Errors.email).to.exist;
          expect(err.Errors.email[1].message).
                   to.equal(User.validationMessages.email.required)
          done();
        });
    });

    it('is created successfuly when the data is correct', function(done){
        User.create({ email: 'johndo@gmail.com', name: 'John Do' }, function(err, user){
          expect(user).to.exist;
          expect(user.email).to.equal('johndo@gmail.com');
          expect(user.id).to.exist;
          done();
        });
    });

    it('throws a validation error when the email aready exist', function(done){
        User.create({ email: 'johndo@gmail.com', name: 'John Do' }, function(err, user){
          expect(user).to.not.exist;
          expect(err.Errors.email).to.exist;
          expect(err.Errors.email[0].message).
                   to.equal(User.validationMessages.email.unique)
          done();
        });
    });

  });
});
