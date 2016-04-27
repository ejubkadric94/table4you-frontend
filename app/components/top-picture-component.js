import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('restaurants-service'),

  init() {
    this._super.apply(this,arguments);
  },
});
