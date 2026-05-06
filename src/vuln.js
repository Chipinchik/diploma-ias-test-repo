const _ = require("lodash");
const crypto = require("crypto");
const childProcess = require("child_process");

const hardcodedPassword = "admin123";
const jwtSecret = "super_secret_test_jwt_key_123456";

function unsafeEval(userInput) {
  return eval(userInput);
}

function unsafeCommandExecution(filename) {
  childProcess.exec("cat " + filename, (error, stdout) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(stdout);
  });
}

function weakHashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function unsafeLodashMerge(userInput) {
  const target = {};
  return _.merge(target, JSON.parse(userInput));
}

function login(username, password) {
  if (username === "admin" && password === hardcodedPassword) {
    return {
      token: jwtSecret,
      role: "admin"
    };
  }

  return null;
}

unsafeEval("console.log('test')");
unsafeCommandExecution("README.md");
console.log(weakHashPassword("password"));
console.log(unsafeLodashMerge('{"profile":{"name":"test"}}'));
console.log(login("admin", "admin123"));