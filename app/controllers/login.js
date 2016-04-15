import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service('user-service'),
  actions: {
    login: function(email, password) {
      this.get('ajax').loginUser(email, password).done(data => {
        this.set('loginResult', data);
      });
      if(this.get('loginResult').error){
        this.transitionTo('register');
      }
    },

  },

});
