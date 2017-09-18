initGame(){
	setActive();
	Deal();
}








setActive(){
	for var( i = 0; i < users.length; i++){
		if(users[i].position == Dealer) {
			this.setState({
				isactive: true;
			});
		}
		if (users[i.position != Dealer]{
			this.setState({
				isactive: false;
			});
		});
	}
}

