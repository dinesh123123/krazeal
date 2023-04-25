// creat user model schema
const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
fname:{
	type:String,
	required:true,
},
lname:{
	type:String,
	required:true,
},
email:{
	type:String,
	required:true,
},
phone:{
	type:String,
	required:false,
},
password:{
	type:String,
	required:false,
},
otp:{
	type:String,
	required:false,
},
image: {
       type: String,
 },

 dob: {
       type: String,
 },
 gender: {
       type: String,
 },
 pincode: {
       type: String,
 },
 address1: {
       type: String,
 },
 address2: {
       type: String,
 },

city: {
       type: String,
 },

google_id: {
            type: String,
 },
 facebook_id: {
             type: String,
 },

 twiter_id: {
            type: String,
 },

 is_user:{
           type:Number,
           default:0
},
 



},{timestamps:true});
module.exports = UserModel= mongoose.model("user",userSchema);