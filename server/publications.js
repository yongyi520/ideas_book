
Meteor.publish('users', function(id){
    return Meteor.users.find({_id: id});
});

Meteor.publish('ideas', function(id) {
    return Ideas.find({userid: id});
});