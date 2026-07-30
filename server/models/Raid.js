const mongoose = require("mongoose");

const raidSchema = new mongoose.Schema({
  raidDefinition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RaidDefinition",
    required: true,
  },

  startDateTime: {
    type: Date,
    required: true,
  },

  assignedRaiders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Raider",
    },
  ],
});

module.exports = mongoose.model("Raid", raidSchema);
