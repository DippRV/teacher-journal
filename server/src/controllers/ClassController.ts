import express from 'express'
import ClassService from "../services/ClassService";

class ClassController {
    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const classObject = await ClassService.create(req.body);
            res.json(classObject);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ClassController();