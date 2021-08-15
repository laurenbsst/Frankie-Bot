/**
 * quote-schema.js - created 13/08/2021
 * @description The schema defining the quotes collection in The-Middle
 * @author Lauren Bassett <laurenb252@outlook.com>
 **/

const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
});

module.exports = mongoose.model('Quotes', QuoteSchema);