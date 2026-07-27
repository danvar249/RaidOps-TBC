const mongoose = require("mongoose");
const RaidDefinition = require("../models/RaidDefinition");
require("dotenv").config();

const raids = [
    {
        name: "Karazhan",
        size: 10,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3457/karazhan"
    },
    {
        name: "Gruul's Lair",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3923/gruuls-lair"
    },
    {
        name: "Magtheridon's Lair",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3836/magtheridons-lair"
    },
    {
        name: "Serpentshrine Cavern",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3607/serpentshrine-cavern"
    },
    {
        name: "Tempest Keep",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3845/tempest-keep"
    },
    {
        name: "Hyjal Summit",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3606/hyjal-summit"
    },
    {
        name: "Black Temple",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3959/black-temple"
    },
    {
        name: "Zul'Aman",
        size: 10,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=3805/zulaman"
    },
    {
        name: "Sunwell Plateau",
        size: 25,
        wowheadUrl: "https://www.wowhead.com/tbc/zone=4075/sunwell-plateau"
    }
];


async function seed() {
    await mongoose.connect(process.env.MONGODB_URI);

    await RaidDefinition.deleteMany();

    await RaidDefinition.insertMany(raids);

    console.log("Raid definitions seeded");

    mongoose.connection.close();
}

seed();