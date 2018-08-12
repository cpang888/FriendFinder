/*
   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
*/
const friends = require('../data/friends.js');

function apiRoutes(app) {
    app.get("/api/friends", (request, response) => {
        response.json(friends);
    });

    app.post("/api/newFriend", (request, response) => {
        // let newFriend = request.body;
        // apiRoutes.addFriend(newFriend);
        let newFriend = request.body;
        // friends.addFriend(newFriend);
        score = (newFriend.scores).map(Number) ;
        newFriend.totalsum = score.reduce(getSum);

        response.json(startSearching(newFriend));
    });

    function getSum(total, num) {
        return total + num;
    };

    function startSearching(friend) {

        friends.forEach(element => {
            score = (element.scores).map(Number);
            objName = element.name;
            objImg = element.photo;

            // element.totalsum = score.reduce(getSum);  
            
        });

        var bestMatchPosition = 0;
        // var current = Math.abs(friend.totalsum - friends[0].totalsum);

        // var bestMatchPosition = 0; // assume its the first person to start
        for(var i=0; i < friends.length; i++){
        
        var temp = Math.abs(friend.totalsum - friends[i].totalsum);

        // Lower number in comparison difference means better match
        console.log("temp " + temp);
        var temp2 = Math.abs(friend.totalsum - friends[bestMatchPosition].totalsum)
        console.log("tem2 " + temp2);
        if(temp <= temp2){
            bestMatchPosition = i;
        }
        }

        var bestFriendMatch = friends[bestMatchPosition];
        
        console.log("retrun bestFriendWatch");
        console.log(bestFriendMatch);
        
        friends.push(friend);

        console.log("retrun friends");
        console.log(friends);

        // return json object
        // res.json(bestFriendMatch);
        return bestFriendMatch;
    }

}

// Export for use in main server.js file
module.exports = apiRoutes;
