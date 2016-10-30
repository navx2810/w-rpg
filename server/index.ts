import { readFileSync } from "fs"
import { createServer, bodyParser, queryParser } from "restify"
export const key = readFileSync("secret.key", "utf-8")

const s = createServer()

s.use(bodyParser())
s.use(queryParser())

import { Greet, Accounts, Players } from "./routes"

s.get("/", Greet)
s.put("/login", Accounts.Login)
s.put("/logout", Accounts.Logout)
s.get("/players", Players.Get)

s.listen(6082)

import * as Models from "./models"
async function TestReadFromDB() {
    console.log(await Models.Accounts.All())
}

TestReadFromDB()