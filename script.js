// //1
// function FindBiggestNumber(arr){
    
//     let BiggestNumber = arr[0]
//     for(index of arr){
//         if(index > BiggestNumber){
//             BiggestNumber = index
//         }
//     }
//     alert(`${BiggestNumber}`)
// }
// FindBiggestNumber([55, 12, 54, 76, 98])

// //2
// function CheckDigit(){
//     let num1 = +prompt("please enter a positive number from 1 to 99 ")
//     let num2 = +prompt("And enter a positive number from 1 to 99 ")
//     let num3 = +prompt("Now enter a positive number from 1 to 99 ")
//     let Lastdigit1 = num1 % 10
//     let Lastdigit2 = num2 % 10
//     let Lastdigit3 = num3 % 10
//     if(Lastdigit1 === Lastdigit2 && Lastdigit2 === Lastdigit3){
//         console.log(`these numbers are equal (${Lastdigit1}, ${Lastdigit2}, ${Lastdigit3})`)
//     }else{
//         console.log(`these numbers are not equal (${Lastdigit1}, ${Lastdigit2}, ${Lastdigit3})!`)
//     }
// }
// CheckDigit()

// //3
// function OneToFifteen(){
//     let toq = []
//     let juft = []
//     for(let i = 0; i <= 15; i++){
//         if(i % 2 === 0){
//             juft.push(i)
//         }else if(i % 2 === 1){
//             toq.push(i)
//         }
//     }
//     console.log(`juft sonlar: ${juft}`)
//     console.log(`toq sonlar: ${toq}`)
// }
// OneToFifteen()   

// //4
// function FindFizzBuzz(){
//     let Fizz = []
//     let Buzz = []
//     let FizzBuzz = []
//     for(let i = 1; i <= 100; i++){
//         if( i % 3 === 0 && i % 5 === 0){
//             FizzBuzz.push(i)
//         }else if( i % 5 === 0){
//             Buzz.push(i)
//         }else if(i % 3 === 0){
//             Fizz.push(i)
//         }
//     }
//     console.log(`Fizz numbers are: ${Fizz} (3ga karrali)`)
//     console.log(`Buzz numbers are: ${Buzz} (5ga karrali)`)
//     console.log(`FizzBuzz numbers are: ${FizzBuzz} (3 va 5 ga karrali)`)
// }
// FindFizzBuzz()