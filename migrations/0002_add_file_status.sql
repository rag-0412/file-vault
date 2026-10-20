-- Migration number: 0001 	 2026-10-19T23:18:01.924Z
-- Migration number: 0002 	 2026-10-20T10:51:06.741Z
ALTER TABLE files ADD COLUMN
    status TEXT NOT NULL DEFAULT 'pending';