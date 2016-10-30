import { Response, Request } from "restify"
import { connect, Connection } from "rethinkdb"
import * as jwt from "jsonwebtoken"
import * as _ from "lodash"
import { createHmac } from "crypto"
import { Buffer } from "buffer"

import { key } from ".."

export function ThrowError(code: number, msg: string, res: Response) {
    res.statusCode = code
    res.json({ msg })
}

/**
 * @Deprecated Not useful anymore, see [GetAuth] instead
 */
export function CheckAuth(req: Request): Boolean {
    if ( req.header["Authorization"] ) return true
    return false
}

/**
 * Checks the Authentication header and verifies the token it holds.
 * returns the token or null
 */
export function GetAuth(req: Request): Object {
    const { Authorization } = req.headers

    if( !Authorization ) { return null }

    try {
        let token = jwt.verify(Authorization, key)
        token = (_.isEmpty(token)) ? null : token
        return token
    } catch (e) {
        return null
    }

}


export function GetConnection(): Promise<Connection> {
    return connect({ host: "localhost", port: 28015 })
}

export function ScrubEmail(email: string): string {
    email = email.toLowerCase()
    return email
}

export function Hash(pass: string): string {
    const hash = createHmac("sha256", "n1nj@")
        .update(Buffer.from(pass))
        .digest("hex")
        
    return hash
}