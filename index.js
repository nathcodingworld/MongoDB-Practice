import { MongoClient } from "mongodb";
import { create_part2 } from "./create.js";


(async()=>{
    const client = new MongoClient("mongodb://localhost:27017")
    try {
        await client.connect()
        console.log("connected to local database");
      
        // await create_part2(client)
    } catch (error) {
        console.log(error);
    } finally {
        await client.close()
        console.log("connection close");
    }
})()

