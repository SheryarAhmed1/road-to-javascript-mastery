// 9. Pattern: Print triangle using *

// let h = prompt('enter number that you want to print in the form of star');
for ( a = 1; a <= 10; a++){
    let storeRow = '';
        for(b = 1 ; b <= a; b++){
            storeRow += "*";
        }
        console.log(storeRow);
}