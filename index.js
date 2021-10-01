// let count=0
// function test(){
//     count=count+1;
//     console.log(count);

//     let t = document.getElementById("heading");
    
//     if(t.innerHTML=="We are from IT department.")
//     {
//         t.innerHTML="We are from Nsec";
//     }
//     else{
//         t.innerHTML="We are from IT department.";

//     }


// }

// document.getElementById("btn").addEventListener("click", test);

function myfun(){
    let c = 2535;
    let d = 5645;
    let x = c+d;
    document.write("emtered the sum of "+c+"&"+d);
    let v = document.forms['validation']['name01'].value;
    let v1 = document.forms['validation']['name02'].value;
    if(Number(v)==x){
        alert("Captcha verified Successfully");
    }
    else{
        alert("invalid captcha")
    }
    


    // if(Number(v))
    // {
    //     alert("enter only text");
    // }
    

}
