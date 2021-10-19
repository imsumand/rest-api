const mongoose= require("mongoose");
const validator= require("validator");

const studentSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength:3,
        uppercase:true

    },
    email:{
        type:String,
        require:true,
        unique:[true,"Email id already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    phone:{
        type:Number,
        minlength:8,
        require:true,
        unique:[true,"Phone number already exists"]
    },
    address:{
        type: String,
        require:true
    }

})

//Create new collection
const Student= new mongoose.model('Student',studentSchema);

module.exports=Student;