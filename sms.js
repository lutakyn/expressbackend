const axios = require('axios');
const qs = require('qs');

const createUser = async () => {
    try {
        // set the url
        const url = 'https://api.wittyflow.com/v1/messages/send';

        // request data object
        const data = {
            app_id:"d9abc02c-6960-43f1-b4f4-f14992a3ce1c",
           app_secret:'H61h4q6xtUDs7voBbeP0IJUf42eSjjpC13m3BJLuGw',
           from:"Witty",
           to:'+37258938074',
           type:1,
           message:'This is a test from Luther'
        };

        // set the headers
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const res = await axios.post(url, qs.stringify(data), config);
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};

createUser();