Template.inbox.helpers({
    mails: function () {
        return Inbox.find({recipient:this._id},{sort: {arrive_date: -1}});
    }
});