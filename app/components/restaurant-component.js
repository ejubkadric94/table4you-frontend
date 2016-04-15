import Ember from 'ember';


export default Ember.Component.extend({
  ajax: Ember.inject.service('restaurants-service'),

  init() {
    this._super.apply(this,arguments);
    this.get('ajax').getAllRestaurants().done(data => {
      this.set('model', data);
    });
    
  },



});
