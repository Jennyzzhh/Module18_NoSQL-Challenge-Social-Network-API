const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    thoughts: [
        {
            type:Schema.Types.ObjectId,
            ref:'thought'
        },
    ],
    friends: [
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema
.virtual('friendCount')
.get(function(){
    return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User;