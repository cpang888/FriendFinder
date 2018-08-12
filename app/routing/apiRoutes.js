/*
   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
*/
const friends = require('../data/friends.js');

function apiRoutes(app) {
    // get the friends array from friends javascript
    app.get("/api/friends", (request, response) => {
        response.json(friends);
    });

    app.post("/api/newFriend", (request, response) => {
        // add new friend 
        let newFriend = request.body;
        // convert each score in scores array to number
        score = (newFriend.scores).map(Number) ;
        // get the total for new friend. 
        // The total will be used to find the best friend match
        newFriend.totalsum = score.reduce(getSum);

        // return json object
        response.json(startSearching(newFriend));
    });

    function getSum(total, num) {
        return total + num;
    };

    function startSearching(friend) {
        // for each of friend in friends array,
        // convert score to number
        friends.forEach(element => {
            score = (element.scores).map(Number);
            objName = element.name;
            objImg = element.photo;
        });

        var bestMatchPosition = 0;

        // for each person in friends array
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

        return bestFriendMatch;
    }

}

// Export for use in main server.js file
module.exports = apiRoutes;
