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