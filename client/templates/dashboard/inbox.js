Template.inbox.helpers({
    mails: function () {
        return Inbox.find({recipient:this._id});
    },
    username: function(){
        return this._id;
    }
});