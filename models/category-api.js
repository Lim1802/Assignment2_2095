const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
	name: {
		type: String,
        validate: {
            validator: function (nameValue) {
                return /^[a-zA-Z0-9]+$/.test(nameValue);
            },
            message: 'Name should be alphanumeric'
        },
        require: true
	},
	description: {type: String},
    image: {type: String},
    createdAt:{type: Date, default: Date.now}
});

module.exports = mongoose.model("Category", categorySchema);