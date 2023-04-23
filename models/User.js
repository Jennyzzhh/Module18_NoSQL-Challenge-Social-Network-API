const { schema, model } = require('mongoose');


const userSchema = new schema({
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
            type:schema.Types.ObjectId,
            ref:'thought'
        },
    ],
    friends: [
        {
            type:schema.Types.ObjectId,
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

model.exports = User;