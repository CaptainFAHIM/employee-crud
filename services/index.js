exports.generateCrudMethods = Model => {
    return{
        getAll: async () => {
            try {
                return await Model.find();
            } catch (error) {
                throw error;
            }
        },
        getById: async (id) => {
            try {
                return await Model.findById(id);
            } catch (error) {
                throw error;
            }
        },
        create: async (record) => {
            try {
                return await Model.create(record);
            } catch (error) {
                throw error;
            }
        },
        update: async (id, record) => {
            try {
                return await Model.findByIdAndUpdate(id, record, {new: true});
            } catch (error) {
                throw error;
            }
            
        },
        delete: async (id) => {
            try {
                return await Model.findByIdAndDelete(id);
            } catch (error) {
                throw error;
            }
            
        }
    }
}