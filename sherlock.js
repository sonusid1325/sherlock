import urls from "./config";
async function search(username){
    let counter = 0
    for(let i = 0; i < urls.length; i++){
        const response = await fetch(`${urls[i].url}${username}`)
        if(response.ok){
            console.log(`\x1b[32m[+] ${urls[i].name}:\x1b[0m ${urls[i].url}${username}`);
            counter++;
        }else{
            console.log(`\x1b[31m[-] ${urls[i].name}:\x1b[0m 404 NOT FOUND`); 
        }
        console.log(`Found ${counter} sites with ${username} this username.`)
    }
}

let username = process.argv[2]
search(username)