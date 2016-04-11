import DS from 'ember-data';

export default DS.Model.extend({
    latitude: DS.attr("double"),
    longitude: DS.attr("double"),

    //Relations
    restaurant: DS.belongsTo('restaurant', {async: true})
});
