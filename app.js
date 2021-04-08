const express = require('express');
const app = express();
const NetSuiteOauth = require('netsuite-tba-oauth');

app.get("/", function (req, res) {
    res.send("Please add a / and enter a number as the paramater");
});

app.get("/:count", function (req, res) {
    const url = 'https://tstdrv1804026.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=2377&deploy=1';
    const method = 'POST';
    const consumerKey = '85f8d2cdc0925f6c126716d5de96d906c02faff1271b6d18e98580bbf6c218cb';
    const consumerSecret = '79a7c63a96cdc136c0011b794cda7f53da4a041af3fee66059184c9587465880';
    const tokenId = '5d566b4f11842b0cc2cd2d1442d250a43c8c6fbff6314c2507567186652184d8';
    const tokenSecret = 'b469546722acffa1ebd04dfc70945a58f64f39e63de3094e0fa8bd95b369550e';
    const account = 'TSTDRV1804026';
    console.log("Request Params:" + req.params.count);
    var count_from_req = Number(req.params.count);

    if (isNaN(count_from_req) == false) {
        const oauth = new NetSuiteOauth(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account);
        const data = { count: count_from_req };

        oauth.post(data).then(response => res.send(response));
        
    }
});

app.get("/redirect/:otherRoute", function (req, res) {
    const url = 'https://tstdrv1804026.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=2377&deploy=1';
    const method = 'GET';
    const consumerKey = '85f8d2cdc0925f6c126716d5de96d906c02faff1271b6d18e98580bbf6c218cb';
    const consumerSecret = '79a7c63a96cdc136c0011b794cda7f53da4a041af3fee66059184c9587465880';
    const tokenId = '5d566b4f11842b0cc2cd2d1442d250a43c8c6fbff6314c2507567186652184d8';
    const tokenSecret = 'b469546722acffa1ebd04dfc70945a58f64f39e63de3094e0fa8bd95b369550e';
    const account = 'TSTDRV1804026';
    const oauth = new NetSuiteOauth(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account);
    //const data = {count: count_from_req};

    oauth.get().then(response => res.send("Received Response:" + response));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Listening to port 3000");
})
