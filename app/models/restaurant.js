import DS from 'ember-data';

export default DS.Model.extend({
    restaurantId: DS.attr('int'),
    name: DS.attr('string'),
    rating: DS.attr('double'),
    phone: DS.attr('double'),
    reservationPrice: DS.attr('double'),
    workingHours: DS.attr('string'),
    deals: DS.attr('string'),
    image: DS.attr('string'),

    //Relations
    coordinates: DS.belongsTo('coordinates'),
    address: DS.belongsTo('address'),

});
