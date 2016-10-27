import { Response } from "restify"

export function ThrowError(code: number, msg: string, res: Response) {
    res.statusCode = code
    res.json({ msg })
}