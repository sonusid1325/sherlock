import urls from "./config";


async function search(username){
    // keep the counting of links found 
    let counter = 0

    // Start Searching for users over internet
    for(let i = 0; i < urls.length; i++){
        const response = await fetch(`${urls[i].url}${username}`)
        if(response.ok){
            console.log(`\x1b[32m[+] ${urls[i].name}:\x1b[0m ${urls[i].url}${username}`);
            counter++;
        }else{
            if (process.argv.includes("-a") ) console.log(`\x1b[31m[-] ${urls[i].name}:\x1b[0m 404 NOT FOUND`)
        }
    }
    console.log(`Found ${counter} sites with ${username} this username.`)
}

let username = process.argv[2]

search(username)