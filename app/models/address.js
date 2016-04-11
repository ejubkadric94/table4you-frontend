import DS from 'ember-data';

export default DS.Model.extend({
    streetName: DS.attr("string"),
    city: DS.attr("string"),
    country: DS.attr("string"),

    //Relations
    restaurant: DS.belongsTo('restaurant', {async: true})
});
