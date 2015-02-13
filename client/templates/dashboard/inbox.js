Template.inbox.helpers({
    mails: function () {
        console.log(this._id);
        return Inbox.find({recipient:this._id});
    },
    domain: function(){
        return domain_name;
    },
    username: function(){
        return this._id;
    }
});