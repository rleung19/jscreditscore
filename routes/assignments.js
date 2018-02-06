var resultData = require('../data/assignments');

exports.getAssignments = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultData));    
}