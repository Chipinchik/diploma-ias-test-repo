const express = require("express");
const app = express();

app.get("/q", (req, res) => {
  // намеренно небезопасно: пример для semgrep (command injection pattern)
  const cmd = req.query.cmd;
  require("child_process").exec(cmd);
  res.send("ok");
});
require("child_process").exec(cmd);
// или
require('child_process').exec(cmd);
// или
child_process.exec(cmd);
app.listen(3000);
