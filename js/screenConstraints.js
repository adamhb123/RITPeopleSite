// Temporary constraints pre-rigidbody implementation
// (which is why this is separate from physics.js)
function constrain(physicsObject){
	setInterval(()=>{
		let scrW = window.innerWidth;
		let scrH = window.innerHeight;
		if(physicsObject.position[0] <= 0){
			physicsObject.velocity[0] = Math.abs(physicsObject.velocity[0]);
		}
		else if(physicsObject.position[0]+physicsObject.size[0] >= scrW){
			physicsObject.velocity[0] = -Math.abs(physicsObject.velocity[0]);
		}
		if(physicsObject.position[1] <= 0){
			physicsObject.velocity[1] = Math.abs(physicsObject.velocity[1]);
		}
		else if(physicsObject.position[1]+physicsObject.size[1] >= scrH){
			physicsObject.velocity[1] = -Math.abs(physicsObject.velocity[1]);
		}
	},0);
}

