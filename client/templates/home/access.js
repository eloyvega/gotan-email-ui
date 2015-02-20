Template.access.events({
    "submit .username": function (event) {
        event.preventDefault();

        var text = event.target.text.value;
        if(!text){
            text = "lol";
        }
        event.target.text.value = "";
        Router.go('inbox', {_id: text});
    }
});

Template.access.helpers({
    domain: function(){
        return domain_name;
    }
});