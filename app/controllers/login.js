import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service('user-service'),
  actions: {
    loginAction: function() {
      this.get('ajax').loginUser(this.get('loginEmail'), this.get('loginPassword')).done(function (response) {
        this.get('ajax').setCurrentUserToken(response.token);
        this.get('ajax').getCurrentUser().done(function (response2) {
          this.get('ajax').setCurrentUser(response2);
        }.bind(this));
        this.transitionToRoute('landingPage');
      }.bind(this)).fail(function(response) {
        alert(response.error);
      }.bind(this));
    },

  },

});
