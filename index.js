function Car(
  manufacturer,
  model,
  color,
  realaseYer,
  speed,
  maxSpeed,
  fuelConsumption,
  volume
) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.realaseYer = realaseYer;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;
}

function CarPrototype() {
  this.accelerate = function () {
    if (this.speed === 300) {
      return this.speed = 300;
    } else {
      return this.speed += 50;
    }
  };
  this.brake = function () {
    if(this.speed === 0){
       return this.speed = 0;
    } else{
        return this.speed -= 50;
    }
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}
Car.prototype = new CarPrototype();

const tesla = new Car("Tesla", "Model S", "black", 2019, 0, 300, 450, 450);
// const audi = new Car("Tesla", "pickup", "black", 2019, 5, 50);
