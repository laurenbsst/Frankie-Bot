const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
});

module.exports = mongoose.model('Quotes', QuoteSchema);