import { getAllFiles, getFileById  as findFileById, } from "../services/file.service.js";
import { env } from "cloudflare:workers";

export const listFiles = async (req , res, next) => {
   try {
        const files = await getAllFiles(env.DB);
        
        return res.status(200).json({
            success: true,
            message: "Files fetched successfully",
            data: files,
        });   
    } catch (error) {
        next(error);   
   }
};

export const getFileById = async(req, res, next) => {

    try {
        const { id } = req.params;
    
        const file = await findFileById(env.DB, id);
    
        if (!file) {
                return res.status(404).json({
                    success: false,
                    message: "File not found",
                });
            }
    
        return res.status(200).json({
            success: true,
            message: "File details fetched successfully",
            data: file,
        });
        
    } catch (error) {
        next(error);
        
    }
}
