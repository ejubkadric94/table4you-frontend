import Ember from 'ember';

export default Ember.Service.extend({
    ajax: function() {
        return Ember.$.ajax();
    }
});
