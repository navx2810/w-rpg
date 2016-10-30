import { GetConnection } from "../utils"
import { db } from "rethinkdb"

export namespace Accounts {

    export async function All() {
        let conn = await GetConnection()
        let res = await db("rpg").table("accounts").run(conn)
        let data = await res.toArray()
        return data
    }

    export async function Find(data: { username?: String, email?: String, id?: String }) {

        const { username, email, id } = data

        console.log(`\n${JSON.stringify(data)}\n`)

        let conn = await GetConnection()
        let res = null

        if ( username ) {
            res = await db("rpg").table("accounts").filter({ username }).run(conn)
        } else if ( id ) {
            res = await db("rpg").table("accounts").filter({ id }).run(conn)
        } else if ( email ) {
            res = await db("rpg").table("accounts").filter({ email }).run(conn)
        }
        
        return res
    }

}
