const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be blank"],
  },
  subTitle: {
    type: String, // Removed "required" validation
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  imageUrl: {
    type: String,
  },
  required: {
    type: Number,
    required: [true, "Amount required must be provided"],
  },
  raised: {
    type: Number,
    default: 0,
  },
  start: {
    type: Date,
    default: Date.now,
  },
  donorsNum: {
    type: Number,
    default: 0,
  },
  donors: [
    {
      transactionID: {
        type: String,
        default: "",
      },
      donationAmount: {
        type: Number,
        default: 0,
      },
    },
  ],
  isHidden: {
    type: Boolean,
    default: false,
  },
  isActivated: {
    type: Boolean,
    default: true,
  },
});

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
