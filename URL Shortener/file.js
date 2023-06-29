
async function short (){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");
   let result =  await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
   let data = await result.json();
   shortURL.value = data.result.short_link2;
   console.log(data.result.short_link2);
}