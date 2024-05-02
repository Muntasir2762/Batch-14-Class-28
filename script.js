let twoDimensionalArray = [
    ['Rahim', 'Karim', 'Rakib', 'Bablu'],
    ['Abul', 'Kabir', 'Rocky', 'Hablu'],
    ['Tamim', 'Nasir', 'Shanto', 'Joy'],
]
// console.log(twoDimensionalArray[0][0]);
// console.log(twoDimensionalArray[0][1]);
// console.log(twoDimensionalArray[0][2]);
// console.log(twoDimensionalArray[0][3]);

// console.log(twoDimensionalArray[1][0]);
// console.log(twoDimensionalArray[1][1]);
// console.log(twoDimensionalArray[1][2]);
// console.log(twoDimensionalArray[1][3]);

// console.log(twoDimensionalArray[2][0]);
// console.log(twoDimensionalArray[2][1]);
// console.log(twoDimensionalArray[2][2]);
// console.log(twoDimensionalArray[2][3]);

// for(i=0; i<=2;i++){ //i=0,1,2
//     for(j=0; j<=3;j++){ //j=0,1,2,3 j=0,1,2,3 j=0,1,2,3
//         console.log(twoDimensionalArray[i][j]);
//     }
// }

let class8 = [
    [60, 50, 91, 32],
    [60, 75, 31, 80],
    [80, 20, 21, 10],
]

for(i=0; i<=2; i++){  //i=0, 1, 2
    if(i == 0){
        console.log('Section A:');
    }
    else if(i == 1){
        console.log('Section B:');
    }
    else if(i == 2){
        console.log('Section C:');
    }
    for(j=0; j<=3; j++){
        if(class8[i][j]>=79){
            console.log( class8[i][j]+'=A+');
        }
        if(class8[i][j]>=69){
            console.log( class8[i][j]+'=A');
        }
        else{
            console.log(class8[i][j]+'=Fail');
        }
    }
}