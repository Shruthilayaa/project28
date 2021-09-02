class Launcher{
    constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        length: 10
    }
        this.pointB=pointB
        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
}
attach(body){
    this.launcherObj.bodyA = body;
    
}
fly(){
    this.launcherObj.bodyA=null
}



display(){
    if(this.launcherObj.bodyA){
    var pointA = this.launcherObj.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}
    
