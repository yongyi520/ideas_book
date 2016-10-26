
Meteor.methods({
   'register-new-idea': function(new_idea) {
       Ideas.insert(new_idea);
       console.log("idea inserted");
       console.log(Ideas.find().fetch());
       return true;
   },

    'update-idea': function(update_idea) {
        Ideas.update(update_idea._id, {
            $set: {
                name: update_idea.name,
                category: update_idea.category,
                purpose: update_idea.purpose,
                features: update_idea.features,
                note: update_idea.note,
                implementation: update_idea.implementation
            }
        });
        return true;
    },

    'delete-idea': function(id) {
        Ideas.remove(id);
    }
});

