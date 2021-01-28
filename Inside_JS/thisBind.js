var relationship1 = {
    name: 'zero',
    friends: ["nero", "hero", "xero"],
    logFriends: function(){
        var that = this
        this.friends.forEach(function(friend){
            console.log(that.name, friend); //this.name이면 undefined 
        })
    }
}

relationship1.logFriends()

var relationship2 = {
    name: 'zero',
    friends: ["nero", "hero", "xero"],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        })
    }
}

relationship2.logFriends()