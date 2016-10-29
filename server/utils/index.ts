import { Response, Request } from "restify"
import { connect, Connection } from "rethinkdb"

export function ThrowError(code: number, msg: string, res: Response) {
    res.statusCode = code
    res.json({ msg })
}

export function CheckAuth(req: Request): Boolean {
    if ( req.header["Authorization"] ) return true
    return false
}

// export function GetConnection(): Connection {
//     connect({ host: "localhost", port: 28015 }, (err, conn) => {
//         if (err) throw err
//         return conn
//     })
//     return null
// }

export function GetConnection(): Promise<Connection> {
    return connect({ host: "localhost", port: 28015 })
}