// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// let totalBatteries = 0
// batteries = batteryBatches.reduce(function(acc,arr){
//     return  acc + arr; }, totalBatteries);

//     const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// totalBatteries = batteryBatches.reduce(function(acc,arr){
//     return  acc + arr; }, 0);
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(function(acc,arr){
    return  acc + arr; }, 0);
