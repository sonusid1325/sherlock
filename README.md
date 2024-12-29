
---

# BETA

Currently I'm trying to resolve an issue like i commented some of files urls in my config.js those links were showing Valid with unknown usernames though which is actually and issue in the sherlock project too. 

# Sherlock Js 🕵️‍♂️🔍

This project allows you to search for a given username across multiple social media and platform URLs.

### Features:
- 🌐 Search for a username across a configurable list of social media platforms.
- 🔄 Dynamically fetches the URL for each platform and checks if the username exists.

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [Example](#example)

## Installation ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/sonusid1325/sherlock.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sherlock
   ```

3. Install dependencies (assuming Node.js is already installed):

   ```bash
   npm install
   ----or-----
   bun install
   ```

## Usage 📝

To search for a username on various social media sites, run the following command:

```bash
node searcher.js <username>
```

Where `<username>` is the username you wish to search for.

### Example:

To search for the username `Kayla`, use:

```bash
node searcher.js Kayla
```

### Using the `-a` Flag 🚩:

To print `404 NOT FOUND` messages for the platforms where the username isn't found, use the `-a` flag:

```bash
node searcher.js kayla -a
```

## Configuration ⚙️

The list of platforms to search on is located in the `config.js` file. The array contains objects where each object represents a platform and its URL template.

Example of the `config.js`:

```javascript
const urls = [
    {
        name: "Github",
        url: (username) => `https://www.github.com/${username}`
    },
    {
        name: "Instagram",
        url: (username) => `https://www.instagram.com/${username}`
    }
    // Add more platforms here
];

export default urls;
```

### How It Works 🛠️

1. **Fetching User Information:**
   The `search()` function accepts a `username` and checks for that username across all configured platforms.
   
2. **Response Handling:**
   The script uses `fetch()` to send a request to each platform’s URL with the provided username. It checks if the response is successful (`response.ok`), indicating that the username exists on that platform.
   
3. **Success/Failure Messages:**
   - ✅ If the username is found, the platform name and URL are printed in **green** (`\x1b[32m`).
   - ❌ If the username is not found, the platform name and `404 NOT FOUND` message are printed in **red** (`\x1b[31m`) **only if** the `-a` flag is passed.
   
4. **Counting Found Links:**
   The script keeps track of how many platforms the username was found on and prints the count at the end.

## Example 🎮

1. Without the `-a` flag:
   
   ```bash
   node searcher.js kayla
   ```

   Output:

   ```
   [+] Github: https://www.github.com/kayla
   [-] Instagram: 404 NOT FOUND
   Found 1 sites with johnDoe this username.
   ```

2. With the `-a` flag:
   
   ```bash
   node searcher.js johnDoe -a
   ```

   Output:

   ```go
   [+] Github: https://www.github.com/kayla
   [-] Instagram: 404 NOT FOUND
   Found 1 sites with johnDoe this username.
   ```
---
