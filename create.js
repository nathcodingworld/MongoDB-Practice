

export async function create_part1(client) {
    await client.db("practice").collection("c1").insertOne({test: "test"})
    console.log("inserted");
}

export async function create_part2(client) {
    const result = await client.db("practice").collection("c2").insertMany([{_id: 10, city:"london"}, {_id: 10, city:"paris"},{nation: "UK"}],{ordered: false})
    console.log(result);
}

export async function create_part3(client) {
    for(let i = 0; i <=100; i++) {
        await client.db("practice").collection("c3").insertOne({msg:"cursor", num: i})
    }
    const result = await client.db("practice").collection("c3").find({}, {limit: 20, skip: 20}).toArray()
    console.log(result);
}