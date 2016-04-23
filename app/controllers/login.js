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
        //location.reload();
        //alert("EEE "+this.get('ajax').get('currentUser'));
      }.bind(this)).fail(function(response) {
        this.set('error', response.errorMessage);
        alert(response.errorMessage);
      }.bind(this));
    },

  },

});
