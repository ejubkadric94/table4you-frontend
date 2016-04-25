import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service('user-service'),
  registrationError: "TEST",
  actions: {
    onRegister: function () {
      this.transitionTo('information');
    },
    onError: function () {
      this.set('registrationError', "Your input is not valid. Please fix it in order to sign up.");
    }
  }
});
