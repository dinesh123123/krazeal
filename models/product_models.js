// create term us model schema
const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({

product_name:{
	type:String 
},

category_name:{
	type:String 
},


text:{
	type:String 
},

price:{
	type:String,
},


discount_price:{
	type:String,	
},

discount_percantage:{
	type:String,	
},


delevery_time:{
	type:String,	
},
refund_pollicy:{
	type:String,	
},
category_id:{
	type:String,	
},


instock:{
       type:String,
},

description:{
		type:String,
	},


	dimensions:{
		type:String,
	},
	height:{
		type:String,
	},
	width:{
		type:String,
	},
	length:{
		type:String,
	},

	type_product:{
		type:String,
	},
	type_of_finish:{
		type:String,
	},
	
size:[],
color:[],

offer:{
	type:String,
},
images:{
	type:Array,
},


},{timestamps:true});
module.exports =productModel= mongoose.model("product", productSchema);