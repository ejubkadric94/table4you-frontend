import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service('user-service'),
  currentUser: Ember.computed.alias('ajax.currentUser'),

  actions: {
    logout: function() {
      this.get('ajax').removeCurrentUser();
      this.get('ajax').removeCurrentUserToken();
    },

  },
});
