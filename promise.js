const foodorder=new Promise((resolve, reject) => {
    let foodready=true;
    if(foodready){
        resolve("food is ready");
    }
    else{
        reject("food is not ready");
    }   
});
foodorder.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});
async function getuser(){
    console.log("fetching user data");
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    const email=data.map((item)=>item.email);
    console.log(email);
    console.log(data);
}
getuser();