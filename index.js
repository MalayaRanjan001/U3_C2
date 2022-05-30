// Add the coffee to local storage with key "coffee"
function myFunction(){
    location.href="bucket.html"
}
const url="https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url).then(function(res){
    return res.json();

}).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});

async function getData(){
    try {
        let res=await fetch(url);
        let users= await res.json();
        localStorage.setItem("coffee",JSON.stringify(users.data))
        console.log(users)
        append(users.data)
    } catch (error) {
        console.log(error);
    }
}
getData()

function append(data){
    let container=document.getElementById("menu");
    data.foreEach(function(el){
        let img=document.createElement("img");
        img.src="el.image"
        let h3=document.createElement("h3");
        h3.innerText=el.id;
        let p1=document.createElement("p");
        p1.innerText=el.price;
        let p2=document.createElement("p2");
        p2.innerText=el.title;
        let p3=document.createElement("p3")
        p3.innerText=el.description;
        let d1=document.createElement("div")
        d1.innerText="Add to Bucket";
        container.append(img,h3,p1,p2,p3,d1)
    })

}