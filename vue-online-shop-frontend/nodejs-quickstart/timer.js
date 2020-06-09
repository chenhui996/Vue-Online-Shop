// setTimeout(() => {
//     console.log("Hello World");
// }, 3000);
// console.log("当前进程ID", process.pid);
// console.log("当前进程脚本路径", __filename);

// const time = new Date();
// console.log('当前时间', time.toLocaleString());



const printProgramInfo = require('./info');
const datetime = require('./datatime');

const waitTime = Number(process.argv[3]);
const message = process.argv[5];


setTimeout(() => {
    console.log(message);
  }, waitTime*1000);

printProgramInfo();
console.log(datetime.getCurrentTime());