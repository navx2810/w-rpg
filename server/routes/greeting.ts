import { Request, Response, Next } from "restify"

import { Accounts } from "."

const msg = "Hello, welcome to the API for The Web-based RPG"

export function Greet(req: Request, res: Response, next: Next) {
    res.json({ msg })
}