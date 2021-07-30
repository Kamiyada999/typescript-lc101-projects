import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';



export class Rocket {
    name:string;
    totalCapacityKg:number;
    cargoItems: Cargo[] = [];
    artronauts: Astronaut[] = [];
}



constructor(name:string, 
    totalCapacityKg:number, 
    cargoItems: Cargo[], 
    Astronaut[]) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
}

sumMass(items:Payload[]):number {
    let totalMass
    for(let i=0; i<items.length; i++) {
        totalMass += items[i].massKg;
    }
    return totalMass;
}

currentMassKg(): number {
    let astronautMass: number = this.sumMass(this.astronauts);
    let cargoMass: number = this.sumMass(this.cargoMass);
    return astronautMass + cargoMass;
}