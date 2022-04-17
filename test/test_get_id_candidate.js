var fake_candidate = require("../get_candidate.js");

fake_candidate.getIdCandidate("+33601020304")
.then(result => {
    console.log(result.id+ " "+result.first_name+" "+result.last_name);
});