import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    
    normalizeFindAllResponse(store, type, payload){
        return {
            data: {
                type: type.modelName,
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
    }

});

