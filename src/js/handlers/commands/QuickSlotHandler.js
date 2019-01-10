class QuickSlotHandler {
	static get ID() {
		return 8521;
	}
	// Useless for now... git test bot
	// It is supposed to activate everytime something on the quickslot changes state 
	constructor(f) {
		this._handler = function (e, a) {
			let item = JSON.parse(e.detail);
			if(item.iconLootId.indexOf("drone_formation") != -1){
				// Check if drone formation was changed
			}
		}
	}

	get handler() {
		return this._handler;
	}
}
  
  