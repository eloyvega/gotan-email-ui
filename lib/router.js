Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'access'});

Router.route('/inbox/:_id',{
    name: 'inbox',
    data: function(){
        var id = this.params._id;
        if(id===false){
            id = "lol";
        }
        id = id.toLowerCase();
        var username = id+"@"+domain_name;
        User.upsert(
            {_id:username},
            {$set:{last_access: new Date()}}
        );
        return User.findOne({_id:username});
    }
});