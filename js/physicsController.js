
class PhysicsController {
	constructor(magnitude){
		this.magnitude = magnitude != null ? magnitude : .001;
		this.acceleration = [0,0];
		document.onkeydown = event => this.updateKeyDown(event,this.acceleration);
		document.onkeyup = event => this.updateKeyUp(event, this.acceleration);
	}
	updateKeyUp(event, acceleration){
		switch(event.keyCode){
			// Up
			case 38:
			case 87:
			// Down
			case 40:
			case 83:
				acceleration[1] = 0;
				break;
			// Left
			case 37:
			case 65:
			// Right
			case 39:
			case 68:
				acceleration[0] = 0;
				break;
		}
	}
	updateKeyDown(event, acceleration){
		console.log("KEYDOWN");
		switch(event.keyCode){
			// Up
			case 38:
			case 87:
				acceleration[1] = -this.magnitude;
				break;
			// Down
			case 40:
			case 83:
				acceleration[1] = this.magnitude;
				break;
			// Left
			case 37:
			case 65:
				acceleration[0] = -this.magnitude;
				break;
			// Right
			case 39:
			case 68:
				acceleration[0] = this.magnitude;
				break;
		}
	}
}

