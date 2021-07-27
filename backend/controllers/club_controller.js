"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var mongoose = require("mongoose"),
  Task = mongoose.model("Club");

exports.list_all_clubs = function (req, res) {
  try {
    Task.find({ isDeleted: false }, function (err, clubs) {
      if (err) res.status(200).send(err);
      res.status(200).json(clubs);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
  }
};

// exports.list_all_deleted_newsletters = function (req, res) {
//   Task.find({ is_deleted: "1" }, function (err, event) {
//     if (err) res.send(err);
//     res.json(event);
//   });
// };

exports.create_a_club = function (req, res) {
  try {
    const new_club = new Task(req.body);
    new_club.save(function (err, club) {
      if (err) res.status(200).send(err);
      res.status(200).json(club);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.read_a_club = function (req, res) {
  try {
    Task.findById(req.params.clubId, function (err, event) {
      if (err) res.status(200).send(err);
      res.status(200).json(event);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.update_a_club = function (req, res) {
  try {
    Task.findOneAndUpdate(
      { _id: req.params.clubId },
      req.body,
      { new: true },
      function (err, event) {
        if (err) res.status(200).send(err);
        res.status(200).json(event);
      }
    );
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.delete_a_club = function (req, res) {
  try {
    Task.findOneAndUpdate(
      { _id: req.params.clubId },
      { isDeleted: true },
      (err, doc) => {
        if (err) {
          res.status(409).json({ message: err });
        } else if (!doc) {
          res.status(200).json({ message: "No Document Present" });
        } else {
          res.status(200).json({ message: "Successfully Deleted", doc });
        }
      }
    );
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.book_a_activity = function (req, res) {
  try {
    Task.findById(req.body.clubId, (err, doc) => {
      doc.bookedActivities.push(req.body.activity);
      doc.save();
      res.status(200).json(doc);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.payment = function (req, res) {
  try {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};
