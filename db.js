import { Database } from "bun:sqlite";

const db = new Database("db.sqlite3");

db.run("CREATE TABLE IF NOT EXISTS kittenColors (name VARCHAR(100));")
db.run("INSERT INTO cheeses VALUES ('ginger'), ('grey'), ('red');")
const result = db.query("SELECT * FROM kittenColors;").all()

console.log(result)
