getUsername=function(){
	if (Meteor.user()) {
		return Meteor.user().username;
	};
	return '';
};
isAdmin=function(){
	return true;
}