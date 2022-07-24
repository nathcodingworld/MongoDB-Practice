

 async function read_part1 (client) {
    const result = await client.db("practice").collection("c4").find().toArray()
    console.log(result);
}

 async function read_part2 (client) {
    const result = await client.db("practice").collection("c4").find({gearbox: {$in: ["Auto", "CVT"]}}).toArray()
    console.log(result);
}

async function read_part3 (client) {
    const result = await client.db("practice").collection("c4").find({$and: [{year: {$gte: 2005}}, {year: {$lte:2014}}]},{projection: {_id:0, year: 1}}).toArray()
    console.log(result);
}

async function read_part4 (client) {
    const result = await client.db("practice").collection("c4").find({city: {$ne:"london"}},{projection: {_id:0, year: 1}}).toArray()
    console.log(result);
}

export default read_part3