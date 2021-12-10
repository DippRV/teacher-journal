import ClassModel from "../models/ClassModel";
import {ClassType} from "../model_types/ClassType.interface";
import mongoose from "mongoose";

class ClassService {
    async create(classObj : ClassType) : Promise<ClassType & mongoose.Document> {
        const createdClass = await ClassModel.create(classObj);
        return createdClass;
    }
}

export default new ClassService();