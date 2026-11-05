import { use } from "react";

export const getAllFiles = async (db) => {
        const { results }   = await db
        .prepare(`
            SELECT 
                id,
                original_name,
                content_type,
                size_bytes,
                status,
                created_at
            FROM files
            ORDER BY created_at DESC
        `)
        .all();

        return results;
};

export const getFileById = async (db, id ) => {
        return await db
        .prepare(`
            SELECT
                id,
                original_name,
                content_type,
                size_bytes,
                status,
                created_at
            FROM files
            WHERE id = ?
            `)
            .bind(id)
            .first();
    
};

export const createFile = async (db, fileMetaData) => {
     
        const id = crypto.randomUUID();
        const storage_key = `uploads/${id}`

        const query = db.prepare(`
            INSERT INTO files (
                id,
                original_name,
                storage_key,
                content_type,
                size_bytes
            )
           
            VALUES (
            ?,
            ?,
            ?,
            ?,
            ?
            );
        `)
        .bind( 
            id, 
            fileMetaData.original_name, 
            storage_key, 
            fileMetaData.content_type, 
            fileMetaData.size_bytes
        )
}