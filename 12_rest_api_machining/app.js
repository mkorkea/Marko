const express = require("express");
const mongoose = require("mongoose");
const tool_controller = require("./tool_controller")
const body_parser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(body_parser.json());

//ROUTING
app.post("/api/tool", tool_controller.api_post_tool;
app.get("/api/tools", tool_controller.api_get_tools);
app.get("/api/tool/:id", tool_controller.api_get_tool);
app.put("/api/tool/:id", tool_controller.api_put_tool);
app.delete("/api/tool/:id", tool_controller.api_delete_tool);

const db_uri = "mongodb+srv://db_machine:7yB8tH4yzE5xqSzL@cluster0.cajvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db_uri, {}).then(() => {
  console.log("db connected");
  console.log("listening port: ", PORT);
  app.listen(PORT);
});
