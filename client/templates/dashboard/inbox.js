Template.inbox.helpers({
    mails: function () {
        return Inbox.find({recipient:this._id},{sort: {arrive_date: -1}});
    },
    username: function(){
        return this._id;
    }
});