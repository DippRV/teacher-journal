import mongoose from "mongoose";
import {ClassType} from "../model_types/ClassType.interface";

const ClassSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: Number, required: true}
});

const ClassModel = mongoose.model<ClassType & mongoose.Document>("class", ClassSchema);

export default ClassModel;