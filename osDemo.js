import os from 'os';

//userInfo();
console.log(os.userInfo())


//totalmem
console.log(os.totalmem()/1024/1024/1024);

//freemem
console.log(os.freemem()/1024/1024/1024);

//freemem
console.log((os.totalmem()-os.freemem())/1024/1024);


//freemem
console.log(os.cpus());

//userInfo();
console.log(os.networkInterfaces())

