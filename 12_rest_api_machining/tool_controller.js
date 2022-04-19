const tool_model = require("./tool_model");


// CRUD

//CREATE

const api_post_tool = (req, res) => {
  let model = tool_model(req.body);
  
  model
    .save()
    .then((model) => {
      res.send(model);
    })
    .catch((err) => {
      res.status(500);
      res.send(err.message);
    });
};

// READ

const api_get_tools = (req, res) => {
    tool_model.find({}).then((tools)=>{
        res.send(tools);
    });
};

const api_get_tool = (req, res) => {
    const id = req.params.id;
    tool_model.findById(id).then((tool)=>{
        res.send(tool);
    }).catch(()=>{
        res.status(404);
        res.send("not found");
    });
};


// UPDATE
const api_put_tool = (req, res) => {
    const id = req.params.id;
    tool_model.findByIdAndUpdate(id, req.body).then((tool)=>{
        res.send();
        // res.send(tool);
    });
};

// DELETE

const api_delete_tool = (req, res) => {
    const id = req.params.id;
    tool_model.findByIdAndDelete(id).then((tool)=>{
        res.send();
    });
};


module.exports.api_post_tool = api_post_tool;
module.exports.api_get_tools = api_get_tools;
module.exports.api_get_tool = api_get_tool;
module.exports.api_put_tool = api_put_tool;
module.exports.api_delete_tool = api_delete_tool;
