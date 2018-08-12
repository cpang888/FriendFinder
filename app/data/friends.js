
let friends = [];

exports.hello = function() {
    return "Hello";
  }

exports.addFriend = function(newFriend) {
    friends.push(newFriend);

    console.log("*** start addFriend");
    console.log(friends);
    console.log("*** end addFriend");
}