import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    
    normalizeFindAllResponse(store, type, payload){
        return {
            data: {
                type: type.modelName,
                id: "restaurantId",
                address: DS.belongsTo('restaurant', {embedded: true} ),
                attributes: {
                    restaurantId: payload.restaurantId,
                    name: payload.name,
                    address: payload.address,
                    phone: payload.phone,
                    workingHours: payload.workingHours,
                    rating: payload.rating,
                    image: payload.image
                }
            }
        };
    },

    normalizeFindRecordResponse(store, type, payload){
        return {
            data: {
                type: type.modelName,
                id: "restaurantId",
                address: DS.belongsTo('restaurant', {embedded: true} ),
                attributes: {
                    restaurantId: payload.restaurantId,
                    name: payload.name,
                    address: payload.address,
                    phone: payload.phone,
                    workingHours: payload.workingHours,
                    rating: payload.rating,
                    image: payload.image,
                    coordinates: payload.coordinates
                }
            }
        };
    }
});

