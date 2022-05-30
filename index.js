// NO ONE - COLOUR ADDING
document.getElementById('col').style.color = "white"

// NUMBER TWO: GROUP MEMEBERS NAME
let word = ["Toba", "Demand", "Mitems", "Jhenna", "Emmanuel", "Jayjay"]
console.log(word[3])

//NUMBER THREE: OBJECT
const athenna = {
    Fname: "Ezike",
    Lname: "Jane",
    BestMovie: "Stranger Things",
    BestFood: "Indomie",
    State: 'Enugu',
    complextion: 'Black',
    birthmonth : "March",
    GroupName: 'Anthenna'

}
console.log("Best movie is " + athenna.BestMovie)

//NUMBER FOUR: CREATING VARIABLE
let noun = "Jane"
let verb = "eat"
let adjective = 'much'

console.log(noun + ' do ' + verb + " " + adjective)
console.log(noun + verb + ' alot')
console.log('Bola' + ' do ' + verb + " " + adjective)
console.log(noun + ' loves playing  ' + adjective + ' games')
console.log('He' + ' do ' + verb + " " + adjective)


// NUMBER FIVE: FUNCTIONS THAT PRINTS OUT remainder of a division
function remainder(num1, num2){
        let ans = num1 % num2
        console.log(ans)
}
remainder(19, 4)

// NUMBER SIX:  FUNCTION THAT SOLVES QUADRATIC EQUATIONS
let root1;
let root2;
function myfunc(a, b, c){
    let numerator = b*b - (4*a*c)
    if(numerator > 0){
        root1 = -b + (Math.sqrt(numerator))/(2*a)
        root2 = -b - (Math.sqrt(numerator))/(2*a)
        console.log(rest1, rest2)
    }
    else{
        console.log('try again')
    }
 

}
myfunc(5,4,6)

// NUMBER SEVEN: VARIABLE 2
const myNoun = "dog"
const myAdjective = 'big'
const myVerb = 'ran'
const myAdverb = 'quickly'
const wordBlanks =  ('the ' + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb)
console.log(wordBlanks)

// NUMBER 8: AREA OF A CIRCLE

function Area(r){
    const pi = 3.142
    area = pi * r * r
    console.log(area)

}
Area(5)

// NUMBER 9: SIMPLE INTEREST
function simpleInterest(P, T, R){
    console.log(P * T * R )/100

}
simpleInterest(10, 12, 13)
// NUMBER 10: MODULUS
console.log(10 % 4 )
// NUMBER 11: BMI
let meritWeight = 92;
let nutjobWeight = 78;

let meritHeight = 1.95;
let nutjobHeight = 1.69;


function bmi(m1, h1, m2, h2){
    meritBMI = m1/h1 ** 2;
    nutjobBMI = m2/h2 ** 2;

    if (meritBMI > nutjobBMI){
        return ('True')
    }
    else{
        return('False')
    }
}
answer = bmi(meritWeight, meritHeight, nutjobWeight, nutjobHeight)
console.log(answer)



