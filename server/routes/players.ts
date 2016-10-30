import { Request, Next, Response } from "restify"
import { ThrowError } from "../utils"
import { Accounts } from "../models"
import * as _ from "lodash"

export namespace Players {

    export async function Get(req: Request, res: Response, next: Next) {
        
        const { id, username, email } = req.params
        
        if( !id && !username && !email ) {
            console.log("[/players] : Retrieving all of the accounts")
            // Find all players
            const accounts = await Accounts.All()
            res.json({ accounts })
        } else {
            console.log("Finding an account with specific details") 
            let result = null

            // Find specific player
            if( email ) {
                console.log(`[/players]: Finding a player with the email of ${email}.`)
                result = Accounts.Find({ email })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }
            else if ( id ) {
                console.log(`[/players]: Finding a player with id of ${id}`)
                result = Accounts.Find({ id })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }
            else if ( username ) {
                console.log(`[/players]: Finding a player with username of ${username}`)
                result = Accounts.Find({ username })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }
            
            if ( !_.isEmpty(result) ) {
                console.log(`[/players]: Results were FOUND`)
                res.json({ result })
            } else { ThrowError(400, "Found nothing, results null", res) }
        }
    }

    export function WithID(req: Request, res: Response, next: Next) {
        const { id, username, email } = req.params
        const player = {}
        
        if( !id && !username && !email ) { ThrowError(400, "Invalid parameters. Please enter an email, username, or id", res) }

        // Search DB for ID

        res.json({ player })
    }

}