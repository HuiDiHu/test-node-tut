const { readFile, writeFile } = require('fs')
 
//async. need to provide callback
//run it when we are done

//provide utf encoding value in between path and content
//reads the first file puts it into result
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        //functionality
        writeFile(
            './content/result-async.txt', 
            `Here's the async result:\n${first}, ${second}\n`,
            (err,result)=>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
//offload the task above while the application keeps on going
//its better than async approach when a user's file tales a long time to load.
//PROS:If a task takes a long time, use async approach.
//CONS:more code and sometimes unecessary
console.log('starting the next one')
