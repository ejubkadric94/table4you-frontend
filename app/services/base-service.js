import Ember from 'ember';

export default Ember.Service.extend({
    ajax: function(options) {
        var params = {}

        Ember.merge(params,options);
        return Ember.$.ajax(params);
    }
});
