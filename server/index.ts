import { readFileSync } from "fs"
import { createServer, bodyParser, queryParser } from "restify"
const key = readFileSync("secret.key", "utf-8")

const s = createServer()

s.use(bodyParser())
s.use(queryParser())

import { Greet } from "./routes"

s.get("/", Greet)

s.listen(6082)