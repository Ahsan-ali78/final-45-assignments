// *Question 45:* Cars: Create detailed car objects with flexible properties.
interface Car {
    manufacturer: string;
    model: string;
    year: number;
    color: string;
    [key: string]: any;
}
const car1: Car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "blue",
    mileage: 5000, 
    isAutomatic: true 
};
const car2: Car = {
    manufacturer: "Tesla",
    model: "Model S",
    year: 2021,
    color: "red",
    batteryCapacity: "100 kWh"
};
console.log(car1.manufacturer); 
console.log(car2.model); 
console.log(car1.mileage); 
console.log(car2.batteryCapacity); 
