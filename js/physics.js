class PhysicsObject {
	constructor(element, position, velocity, acceleration, controller){
		this.element = element;
		this.element.style.position = "absolute";
		this.position = position != null ? position : [0,0];
		this.velocity = velocity != null ? velocity : [0,0];
		this.acceleration = acceleration != null ? acceleration : [0,0];
		this.controller = controller;
		this.size = [this.element.offsetWidth, this.element.offsetHeight];
	}
		
	step(deltaTime, gravity){
		let controllerAcceleration = this.controller != null ? this.controller.acceleration : [0,0];
		//console.log(controllerAcceleration);
		let accelerationX = this.acceleration[0] + controllerAcceleration[0];
		let accelerationY = this.acceleration[1] + controllerAcceleration[1];
		this.position[0] += this.velocity[0]*deltaTime + .5*accelerationX*deltaTime**2;
		this.position[1] += this.velocity[1]*deltaTime + .5*accelerationY*deltaTime**2;
		this.velocity[0] += accelerationX*deltaTime;
		this.velocity[1] += accelerationY*deltaTime;
	}
	addVelocity(velocity){
		this.velocity[0] += velocity[0];
		this.velocity[1] += velocity[1];
	}
	addAcceleration(acceleration){
		this.acceleration[0] += acceleration[0];
		this.acceleration[1] += acceleration[1];
	}
}

class PhysicsEngine {
	constructor(gravity){
		this.gravity = gravity;
		// time at last step
		this.timeALS = (new Date()).getTime();
		this.physicsObjects = [];
		// render physics AFAP (as fast as possible ;) )
		this.physicsLoop = setInterval(()=>{
			this.step();
		}, 0);
	}
	addObject(physicsObject){
		physicsObject.acceleration[1] += this.gravity;
		this.physicsObjects.push(physicsObject);
	}
	step(){
		let deltaTime = (new Date()).getTime() - this.timeALS;
		for(let i = 0; i < this.physicsObjects.length; i++){
			this.physicsObjects[i].step(deltaTime)
		}
		this.timeALS = (new Date()).getTime();	
	}
}
class Renderer {
	constructor(physicsEngine, msRenderInterval){
		this.physicsEngine = physicsEngine;
		this.renderLoop = setInterval(()=>{
			this.render();
		}, msRenderInterval);
	}
	render(){
		for(let i = 0; i < this.physicsEngine.physicsObjects.length; i++){
			let physicsObject = this.physicsEngine.physicsObjects[i];
			physicsObject.element.style.left = physicsObject.position[0]+'px';
			physicsObject.element.style.top = physicsObject.position[1]+'px';
		}	
	}
}
