function myFunction(input) {
    let capacity = Number(input[0]);
    let fens = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 0; i < capacity; i++) {
        let symbol = (input[i]);

        if(symbol === "A") {
            sectorA++;
        } 
        if (symbol === "B") {
            sectorB++;
        }
        if (symbol === "V") {
            sectorV++;
        }
        if (symbol === "G") {
            sectorG++;
        }
    }

    let sectorAProcents = (sectorA / fens) * 100;
    let sectorBProcents = (sectorB / fens) * 100;
    let sectorVProcents = (sectorV / fens) * 100;
    let sectorGProcents = (sectorG / fens) * 100;
    let totalFens = (sectorA + sectorB + sectorV + sectorG) / capacity * 100;
    

    console.log(`${sectorAProcents.toFixed(2)}%`);
    console.log(`${sectorBProcents.toFixed(2)}%`);
    console.log(`${sectorVProcents.toFixed(2)}%`);
    console.log(`${sectorGProcents.toFixed(2)}%`);
    console.log(`${totalFens.toFixed(2)}%`);
}

myFunction(["1000","12","A","A","V","V","A","G","A","A","V","G","V","A"]);