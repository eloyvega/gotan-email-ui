Template.access.events({
    "submit .username": function (event) {
        event.preventDefault();

        var text = event.target.text.value;
        var username = text+"@"+domain_name;
        User.upsert(
            {_id:username},
            {$set:{last_access: new Date()}}
        );
        event.target.text.value = "";
        Router.go('inbox', {_id: text});
    }
});

Template.access.helpers({
    domain: function(){
        return domain_name;
    }
});