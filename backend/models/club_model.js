var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clubSchema = new Schema(
  {
    clubName: { type: String, default: "" },
    clubEmail: { type: String, default: "" },
    mobileNo: { type: String, default: "" },
    location: { type: String, default: "" },
    activities: [{ type: Object, default: {} }],
    bookedActivities: [{ type: Object, default: {} }],
    picture: { type: String, default: "" },
    facilities: [{ type: String, default: "" }],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", clubSchema);
