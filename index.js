import { MongoClient } from "mongodb";
import { create_part2 as create } from "./create.js";
import read from "./read.js"


(async()=>{
    const client = new MongoClient("mongodb://localhost:27017")
    try {
        await client.connect()
        console.log("connected to local database");
      
     
        // await create(client)
        // await read(client)



    } catch (error) {
        console.log(error);
    } finally {
        await client.close()
        console.log("connection close");
    }
})()

