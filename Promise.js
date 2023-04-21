const myPromise = new Promise((resolve, reject) =>{
    const user = [{id:1}];

    if (!user){
        reject("Something went wrong");
    }
    else {
        setTimeout(()=>{
            resolve("Successfully got the data");
        }, 3000);
    }
});

myPromise
        .then(res => console.log(res))
        .catch(err => console.log(err));

console.log("Done");