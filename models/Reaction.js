const {Schema, Types} = require('mongoose')

const reactionSchema = new Schema({
    reactionId:{
        type:Schema.Types.ObjectId,
        default:()=> new Types.ObjectId(),
    },
    reactionBody:{
        type:String,
        Required:true,
        maxLength:280,
    },
    userName:{
        type:String,
        Required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        //Use a getter method to format the timestamp on query?
    },
},
    {
        toJSON:{
            getters:true,
        },
        id:false,
    }



);

module.exports = reactionSchema;