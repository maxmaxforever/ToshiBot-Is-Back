class ShipSelectedHandler {
	static get ID() {
		return 3877; 
	}

	constructor() {
		this._handler = function (e, a) {
			let parsedJson = JSON.parse(e.detail);

			let ship = a.ships[parsedJson.userId];
			if(ship != null){
				ship.maxHp = parsedJson[Variables.selectMaxHp];
				ship.maxShd = parsedJson[Variables.selectMaxShd];
				ship.hp = parsedJson[Variables.selectHp];
				ship.shd = parsedJson.shield;

				window.attackWindow.hp(ship.hp);
				window.attackWindow.shd(ship.shd);
				window.attackWindow.targetName(ship.name);
				window.attackWindow.ship(ship.ship);

				
				a.lockedShip = ship;
				if (!api.attacking && !a.isShipOnBlacklist(parsedJson.userId) &&(window.settings.settings.killNpcs && ship.isNpc && !window.settings.settings.pause) || (window.settings.settings.autoAttack && ship.isEnemy && !ship.isNpc) || (window.settings.settings.autoAttackNpcs && ship.isNpc)) {
					setTimeout(() => {
						api.startLaserAttack();
						a.lastAttack = $.now();
						api.attacking = true;
					}, 250);
				}
			}
		}
	}

	get handler() {
		return this._handler;
	}
}