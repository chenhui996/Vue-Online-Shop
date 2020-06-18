const os = require('os');
function printProgramInfo(){
    console.log(os.userInfo().username);
    console.log(process.pid);
    console.log(__filename);
}

module.exports = printProgramInfo;