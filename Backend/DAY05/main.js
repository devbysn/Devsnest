// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// let usStates = require("./usStates.json");
// const app = express();
// //save function
// const save = () => {
//   fs.writeFile(
//     "./usStates.json",
//     JSON.stringify(usStates, null, 2),
//     (error) => {
//       if (error) {
//         throw error;
//       }
//     }
//   );
// };
// //Read(R) in CRUD
// app.get("/states", (req, res) => {
//   res.json(usStates);
// });
// app.get("/states/:name", (req, res) => {
//   const findState = usStates.find((state) => state.state === req.params.name);
//   res.json(findState);
// });
// //Create(C) in CRUD
// app.post("/states", bodyParser.json(), (req, res) => {
//   usStates.push(req.body);
//   save();
//   res.json({
//     status: "success",
//     stateInfo: req.body,
//   });
// });
// //Update(U) in CRUD
// app.put("/states/:name", bodyParser.json(), (req, res) => {
//   usStates = usStates.map((state) => {
//     if (state.state === req.params.name) {
//       return req.body;
//     } else {
//       return state;
//     }
//   });
//   save();
//   res.json({
//     status: "success",
//     stateInfo: req.body,
//   });
// });
// //Delete(D) in CRUD
// app.delete("/states/:name", (req, res) => {
//   usStates = usStates.filter((state) => state.state !== req.params.name);
//   save();
//   res.json({
//     status: "success",
//     removed: req.params.name,
//     newLength: usStates.length,
//   });
// });
// app.listen(3000, () => {
//   console.log(`Array of US States at http://localhost:3000`);
// });
