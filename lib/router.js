Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'access'});

Router.route('/inbox/:_id',{
    name: 'inbox',
    data: function(){
        var un = this.params._id+"@"+domain_name;
        return User.findOne({_id:un});
    }
});