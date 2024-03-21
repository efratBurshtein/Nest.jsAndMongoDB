// import * as mongoose  from "mongoose";
// export const studentSchema=new mongoose.Schema({
//     name:{type:String,require:true},
//     id:{type:Number,require:true},
//     classStud:{type:String,require:true},
//     age:{type:Number,require:true}
// })
export class StudentDTO { 
    
         name: string;
         id: number;
         classStud: string;
         age: number
    
}