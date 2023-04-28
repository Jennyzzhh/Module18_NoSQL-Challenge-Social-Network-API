const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction'); 

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query ? 
        get:(date)=>date.toLocaleDateString(),

    },

    userName: {
        type: String,
        required: true,
    },
    //Array of nested documents created with the reactionSchema ?
    reactions: [reactionSchema],
    //req.body

},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }

);

thoughtSchema
    .virtual('reactionCount')
    .get(function(){
        return this.reactions.length;
    })

  const Thought = model('Thought',thoughtSchema)  

  module.exports = Thought;