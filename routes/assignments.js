var jobs = require('../data/assignments');

exports.getAssignments = function(req, res){

    var userId = req.params.userId;
    console.log('returning assignments for user: ' + userId);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jobs));    
}

exports.getAssignmentDetails = function (req, res) {
    
}