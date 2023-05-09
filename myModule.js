// const { exec } = require("child_process");

class MyClass {
	myMethod() {
		console.log("Hello from MyClass");
		// var yourscript = exec("sh fi.sh", (error, stdout, stderr) => {
		//   console.log(stdout);
		//   console.log(stderr);
		//   if (error !== null) {
		// 	console.log("exec error: ${error}");
		//   }
		// });
  }
}

module.exports = {
  MyClass,
};
