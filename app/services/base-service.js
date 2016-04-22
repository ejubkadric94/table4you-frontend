import Ember from 'ember';

export default Ember.Service.extend({
    authToken: null,
    currentUser: null,

    setAuthToken: function (token) {
      this.set('authToken', token);
    },

    ajax: function(params) {
      if(this.get('authToken')){
        Ember.merge(params,{
          headers: {
            "USER-ACCESS-TOKEN":this.get("authToken"),
          }
        });
      }

      return Ember.$.ajax(params);
    }
});
