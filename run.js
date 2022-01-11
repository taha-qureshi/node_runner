// node script for running a file everytime it changes 

const { exec } = require('child_process');
const fs = require('fs')
const file = process.argv[2]

function getFile() {

  if (process.argv[2]) {

    return process.argv[2]
    
  } else {

    return false 

  }

}

function fileExists(file=false) {

  if (file) {

    fs.access(`./${file}`, err => {

      if (err) {
        return false
      }

      return true 

    })

  } else {

    console.log("NO FILE FOUND..... Exiting");
    process.exit(1)

  }

}

function getFileData(file=null) {
  
  let result; 

  if (file) {
        console.log('logging data')

    fs.readFile(file, 'utf-8', (err, data) => {

      if (err) {

        console.log(err)
        return false 

      } else {

        console.log(data)
        result = data

      }

      return result

    })
    
  } else {
        console.log('not logging data')

    return false 

  }

}

function keepExecuting(file = getFile()) {

  fileExists(file)
  const path = `./${file}`
  const command = `node ${file}`
  let initial = ""

  while (true) {
    let fileContent = getFileData(file)
    console.log(fileContent);
    if (initial !== fileContent) {
      console.log('Execution startedi')
      exec(command, (err, stdout, stderr) => {

        if (err) {
          console.log(err)
          console.log("Error while executing file, please check file")
        }

        console.log(stdout)
        console.log(stderr)

      })
      
      initial = fileContent
    }

  }

}

keepExecuting()