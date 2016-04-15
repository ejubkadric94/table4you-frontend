import Ember from 'ember';

export default Ember.Service.extend({
    ajax: function(params) {
        return Ember.$.ajax(params);
    }
});
