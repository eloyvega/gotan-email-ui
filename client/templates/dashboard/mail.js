Template.mail.events = {
    'click div.mail': function(){
        var contentIsShown = false;
        if(Session.get(this._id.toString())){
            contentIsShown = Session.get(this._id.toString());
        }else{
            Session.set(this._id.toString(), true);
        }
        var mail_content = document.getElementById(this._id);
        if(contentIsShown){
            mail_content.innerHTML = "";
            Session.set(this._id.toString(), false);
        }else{
            mail_content.innerHTML = "<div class=\"shown\">"+this.email.body.content+"</div>";
            Session.set(this._id.toString(), true);
        }

    }
}