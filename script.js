function job()
 {
   return new Promise(function (resolve, reject)
  {
     resolve();
  });
 }

 let promise = job();

 promise

 .then(function ()
 {
    console.log('Success 1');
 })

 .then(function ()
 {
    console.log('Success 2');
 })

 .then(function ()
 {
    console.log('Success 3');
 })

 .catch(function ()
 {
    console.log('Error 1');
 })

 .then(function ()
 {
    console.log('Success 4');
 });

