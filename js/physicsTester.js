function testMeHarder(){
	let physicsEngine = new PhysicsEngine(0);
	let renderer = new Renderer(physicsEngine, 33);
	let skullElement = document.querySelector("#sleep");
	let physicsController = new PhysicsController();
	let skullElementPhysicsObject = new PhysicsObject(skullElement, null, [.5,.5], null, physicsController);
	physicsEngine.addObject(skullElementPhysicsObject);
	constrain(skullElementPhysicsObject);
}
window.onload = testMeHarder;
