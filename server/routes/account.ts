import { Request, Next, Response } from "restify"
import { ThrowError } from "../utils"

export namespace Accounts {

    export function Login( req: Request, res: Response, next: Next ) {
        const { email, username, pass } = req.params

        if( (!email && !username) || !pass ) { ThrowError(400, "Invalid parameters, please enter an email or username and password", res) }

        if( email ) 

        res.end()
    }

    export function Logout( req: Request, res: Response, next: Next ) {
        const { Authorization } = req.headers

        if( Authorization ) {

        }

        res.end()
    }
}