import BaseAction from "./action";


class FineOrOpportunity extends BaseAction {
	constructor(fine) {
		super();
		this.fine = fine;
	}

	do(game, player) {
		// ask player to pay this.fine or pick up opportunity card
		console.log(player);
	}
}

export default FineOrOpportunity;