CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  slug        TEXT UNIQUE NOT NULL,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  category    TEXT NOT NULL,
  image       TEXT,                       -- URL; NULL = drawn placeholder cup
  color       TEXT NOT NULL DEFAULT '#9DBF5A',
  badge       TEXT,
  ingredients TEXT[] NOT NULL DEFAULT '{}',
  serving     TEXT,                       -- e.g. "Served iced"
  variants    JSONB NOT NULL,             -- [{"name":"30g","price":95000}] price in IDR
  active      BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
