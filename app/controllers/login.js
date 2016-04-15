import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service('user-service'),
  actions: {
    loginAction: function() {
      this.get('ajax').loginUser(this.get('loginEmail'), this.get('loginPassword')).done(data => {
        this.set('loginResult', data);
      });

      alert("EEE "+ this.get('loginResult.authToken'));

    },

  },

});
