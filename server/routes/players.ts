import { Request, Next, Response } from "restify"
import { ThrowError } from "../utils"

export namespace Players {

    export function Get(req: Request, res: Response, next: Next) {
        const { id, username, email } = req.params
        
        let payload

        if( !id && !username && !email ) {
            // Find all players
        } else {
            // Find specific player
        }

        res.json({ payload })
    }

    export function WithID(req: Request, res: Response, next: Next) {
        const { id, username, email } = req.params
        const player = {}
        
        if( !id && !username && !email ) { ThrowError(400, "Invalid parameters. Please enter an email, username, or id", res) }

        // Search DB for ID

        res.json({ player })
    }

}