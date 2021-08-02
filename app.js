const fs = require('fs');
var randomWords = require('random-words');
var randomip = require('random-ip');
var logfilename = new Date().getTime() + 'file.log'
const content = 'logmsg' + ',' + randomip('192.168.2.0', 24) + ',' + randomWords({ min: 3, max: 10, separator:' ' }) + ',' + randomWords({exactly:5, wordsPerString:2});

try {
  const data = fs.writeFileSync(logfilename, content)
  //file written successfully
} catch (err) {
  console.error(err)
}