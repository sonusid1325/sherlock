const urls = [
    { name: "Github", url:`https://www.github.com/` },
    { name: "Instagram", url:`https://www.instagram.com/` },
    { name: "Twitter", url:`https://twitter.com/` },
    { name: "Facebook", url:`https://www.facebook.com/` },
    { name: "LinkedIn", url:`https://www.linkedin.com/in/` },
    { name: "YouTube", url:`https://www.youtube.com/` },
    { name: "Reddit", url:`https://www.reddit.com/user/` },
    { name: "TikTok", url:`https://www.tiktok.com/@` },
    { name: "Pinterest", url:`https://www.pinterest.com/` },
    { name: "Medium", url:`https://medium.com/@` },
    { name: "DeviantArt", url:`https://www.deviantart.com/` },
    { name: "Flickr", url:`https://www.flickr.com/photos/` },
    { name: "Dribbble", url:`https://dribbble.com/` },
    { name: "Behance", url:`https://www.behance.net/` },
    { name: "SoundCloud", url:`https://soundcloud.com/` },
    { name: "Spotify", url:`https://open.spotify.com/user/` },
    { name: "Steam", url:`https://steamcommunity.com/id/` },
    { name: "Tumblr", url:`https://.tumblr.com` },
    { name: "Slack", url:`https://app.slack.com/client/` },
    { name: "Discord", url:`https://discord.com/users/` },
    { name: "Quora", url:`https://www.quora.com/profile/` },
    { name: "Stack Overflow", url:`https://stackoverflow.com/users/` },
    { name: "GitLab", url:`https://gitlab.com/` },
    { name: "CodePen", url:`https://codepen.io/` },
    { name: "HackerRank", url:`https://www.hackerrank.com/` },
    { name: "LeetCode", url:`https://leetcode.com/` },
    { name: "Kaggle", url:`https://www.kaggle.com/` },
    { name: "Dev.to", url:`https://dev.to/` },
    { name: "Vimeo", url:`https://vimeo.com/` },
    { name: "Twitch", url:`https://www.twitch.tv/` },
    { name: "Strava", url:`https://www.strava.com/athletes/` },
    { name: "Blogger", url:`https://www.blogspot.com/` },
    { name: "WordPress", url:`https://www.wordpress.com/` },
    { name: "Goodreads", url:`https://www.goodreads.com/` },
    { name: "AngelList", url:`https://angel.co/u/` },
    { name: "Product Hunt", url:`https://www.producthunt.com/@` },
    { name: "Gravatar", url:`https://en.gravatar.com/` },
    { name: "Replit", url:`https://replit.com/@` },
    { name: "Notion", url:`https://notion.so/` },
    { name: "Kickstarter", url:`https://www.kickstarter.com/profile/` },
    { name: "Indiegogo", url:`https://www.indiegogo.com/individuals/` },
    { name: "ResearchGate", url:`https://www.researchgate.net/profile/` },
    { name: "Academia.edu", url:`https://www.academia.edu/` },
    { name: "Fandom", url:`https://www.fandom.com/u/` },
    { name: "Polywork", url:`https://www.polywork.com/` },
    { name: "Patreon", url:`https://www.patreon.com/` },
    { name: "Ko-fi", url:`https://ko-fi.com/` },
    { name: "Buy Me a Coffee", url:`https://www.buymeacoffee.com/` },
    { name: "OnlyFans", url:`https://onlyfans.com/` },
    { name: "Snapchat", url:`https://www.snapchat.com/add/` },
    { name: "WhatsApp", url:`https://wa.me/` },
    { name: "WeChat", url:`https://www.wechat.com/` },
    { name: "Telegram", url:`https://t.me/` },
    { name: "Signal", url:`https://signal.me/#p/` },
    { name: "Venmo", url:`https://venmo.com/` },
    { name: "PayPal", url:`https://paypal.me/` },
    { name: "Cash App", url:`https://cash.app/` },
];

urls.sort((a, b) => a.name.localeCompare(b.name));

// console.log(urls)

export default urls;