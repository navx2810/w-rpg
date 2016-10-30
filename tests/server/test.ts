import { createJsonClient } from "restify"
import * as Utils from "../../server/utils"
const chai = require("chai")

chai.should()

describe("API", () => {

    let client = createJsonClient("http://localhost:6082")

    it("password should never equal the password", (done) => {
        let pass = Utils.Hash("password").toString()
        pass.should.not.equal("password")
        done()
    })

    it("root should respond with msg property", (done) => {
        client.get("/", (err, req, res, obj) => {
            if (err) throw err

            obj.should.have.property("msg")
            done()
        })
    })

    describe("/players", () => {
        it("no params should return an array", (done) => {
            client.get("/players", (err, req, res, obj) => {
                if (err) throw err

                obj.should.have.property("result")
                obj.result.should.be.a("array")
                done()
            })
        })
    })
})