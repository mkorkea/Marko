const express = require("express");
const mongoose = require("mongoose");
const alarm_controller = require("./alarm_controller")
const body_parser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(body_parser.json());

//ROUTING
app.post("/api/alarm", alarm_controller.api_post_alarm);
app.get("/api/alarms", alarm_controller.api_get_alarms);
app.get("/api/alarm/:id", alarm_controller.api_get_alarm);
app.put("/api/alarm/:id", alarm_controller.api_put_alarm);
app.delete("/api/alarm/:id", alarm_controller.api_delete_alarm);

const db_uri = "mongodb+srv://db_machine:7yB8tH4yzE5xqSzL@cluster0.cajvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db_uri, {}).then(() => {
  console.log("db connected");
  console.log("listening port: ", PORT);
  app.listen(PORT);
});