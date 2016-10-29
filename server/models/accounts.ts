import { GetConnection } from "../utils"
import { db } from "rethinkdb"

export namespace Accounts {

    export async function All() {
        let conn = await GetConnection()
        let res = await db("rpg").table("accounts").run(conn)
        let data = await res.toArray()
        return data
    }

}
