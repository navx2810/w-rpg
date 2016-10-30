import { Request, Next, Response } from "restify"
import { ThrowError, ScrubEmail } from "../utils"
import { Accounts } from "../models"
import * as _ from "lodash"

export namespace Players {

    export async function Get(req: Request, res: Response, next: Next) {

        const { id, username, email } = req.params

        if (!id && !username && !email) {
            console.log("[/players] : Retrieving all of the accounts")
            // Find all players
            const result = await Accounts.All()
            res.json({ result })
        } else {
            console.log("Finding an account with specific details")
            let result = null

            // Find specific player
            if (email) {
                console.log(`[/players]: Finding a player with the email of ${email}.`)
                result = Accounts.Find({ email })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }
            else if (id) {
                console.log(`[/players]: Finding a player with id of ${id}`)
                result = Accounts.Find({ id })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }
            else if (username) {
                console.log(`[/players]: Finding a player with username of ${username}`)
                result = Accounts.Find({ username })
                console.log(`[/players]: ${JSON.stringify(result)}`)
            }

            if (!_.isEmpty(result)) {
                console.log(`[/players]: Results were FOUND`)
                res.json({ result })
            } else { ThrowError(400, "Found nothing, results null", res) }
        }
    }

    export async function Put(req: Request, res: Response, next: Next) {
        const { email, username, password } = req.params

        // Check to see if the players email address already exists in the database
        const clean_email = ScrubEmail(email)

        console.log(`[/players] PUT: Email=${clean_email}, Username=${username}`)
    }

}