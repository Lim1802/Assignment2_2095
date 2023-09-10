const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    _id: {type: String, default: generateRandomId()},
	name: {
		type: String,
        validate: {
            validator: function (nameValue) {
                return /^[a-zA-Z0-9]+$/.test(nameValue);
            },
            reason: "Name should be alphanumeric"
        },
        require: true
	},
	description: {type: String},
    image: {type: String},
    createdAt:{type: Date, default: Date.now},
    eventArray: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});


categorySchema.methods.formattedDate =  function () {
    return this.createdAt.toLocaleString('en-AU');
};


function generateRandomId(){
    const randomTwoCharc=Math.random().toString(36).substring(2, 2 + 2).toUpperCase();


    const min = 1000; // Minimum 4-digit number (inclusive)
    const max = 9999; // Maximum 4-digit number (inclusive)
    const randomFourDigitNum=Math.floor(Math.random() * (max - min + 1)) + min;

    return `C${randomTwoCharc}-${randomFourDigitNum}`;
}

module.exports = mongoose.model("Category", categorySchema);