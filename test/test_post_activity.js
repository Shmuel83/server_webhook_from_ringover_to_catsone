var fake_activity = require("../post_activity.js");

fake_activity.postActivity({id:123456789,activity:"call_talked"})
.then(result => {
    console.log(result);
});