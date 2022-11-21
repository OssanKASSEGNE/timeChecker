const PROXY_CONFIG = [
    {
       context: [
       "/api",
       ],
       target: "https://localhost:7099", // identique à applicationUrl
       secure: false
    }
   ]

module.exports = PROXY_CONFIG;