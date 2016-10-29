import { Request, Next, Response } from "restify"
import { ThrowError, GetConnection } from "../utils"
import { db } from "rethinkdb"

export namespace Accounts {

    export async function Login( req: Request, res: Response, next: Next ) {
        const { email, username, pass } = req.params

        if( (!email && !username) || !pass ) { ThrowError(400, "Invalid parameters, please enter an email or username and password", res) }

        const conn = await GetConnection()

        if( email ) {
            
        } else {
            let result = await db("rpg").table("accounts").run(conn)
            result.each(console.log)
        }

        res.end()
    }

    export function Logout( req: Request, res: Response, next: Next ) {
        const { Authorization } = req.headers

        if( Authorization ) {

        }

        res.end()
    }

    export function Create( req: Request, res: Response, next: Next ) {
        const { email, username, password } = req.params

        if( !email || !username || !password ) { ThrowError(400, "The details entered are wrong.", res) }

        
    }
}