import Ember from 'ember';

export default Ember.Controller.extend({
  isLoading: false,
  error: null,

  ajax: Ember.inject.service('user-service'),
  actions: {
    loginAction: function() {
      this.set('isLoading', true);
      this.set('error', false);

      this.get('ajax').loginUser(this.get('loginEmail'), this.get('loginPassword')).done(function (response) {
        this.get('ajax').setCurrentUserToken(response.token);
        this.get('ajax').getCurrentUser().done(function (response2) {
          this.get('ajax').setCurrentUser(response2);


          this.transitionToRoute('landingPage');
          
        }.bind(this));

      }.bind(this)).fail(function(response) {
        this.set('error', response.responseJSON.error);
        this.set('isLoading', false);
      }.bind(this));
    },

  },

});
