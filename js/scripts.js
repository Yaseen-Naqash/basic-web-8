// print('hello world)
console.log('hello world')

// age = 18
// name = 'john'
// isActive = False
// score = 12.64
// courses = ['data structure', 'python', 'OS']
// course_scores = { 'data structure':12.5 , 'python':18, 'OS':20}
age = 20 
ligal_age = 18
name = 'john'
isActive = false
score = 12.64
courses = ['data structure', 'python', 'OS']
course_scores = { 'data structure':12.5 , 'python':18, 'OS':20}
course_number = 2
console.log(`User : ${name} age : ${age} course : (${courses[course_number]} ${course_scores[courses[course_number]]})`)

// if age<18:
//      print('verfied')
// elif age==18:
//      print('edge case')
// else:
//      print('under age')

if(age<=18){
    console.log('verfied')
}
else if (age==18){
    console.log('edge case')

}
else{
    console.log('under age')
}

// for i in range(len(courses)):
//      print(courses[i])

for(i=0 ; i<courses.length ; i=i+1){
    console.log(courses[i])

}
// def SomeName(a, b, c):
//      print('test')
//      return a+b+c
function SomeName(a, b, c){
    SomeName()
    return a+b+c
}


// task1 js
product = 'something'
price = 100
count = 3
discount = 10
console.log(`final price : ${ (price*count) - (((price*count)/100) * discount) }`)

// task2 js

email = 'johndoe@gamil.com'

if (email.includes('@') && email.indexOf('@')<email.indexOf('.') && email.length >= 8){

    console.log('passed')

}
else{
    console.log('failed')
}
// task3 js
// *
// **
// ***
// ****
// *****
// ******

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const rows = 12;
row_string = ''
for(i=1; i<=rows ; i++){
    row_string += '*'
    console.log(row_string)
}

row_spaces = '';
row_stars = '';
for(i=1; i<=rows ; i++){
    for(j=1; j<=rows-i ; j++){
        row_spaces+=' ';
    }
    for(j=1; j<=i*2-1 ; j++){
        row_stars+='*';
    }
    console.log(row_spaces+row_stars)
    row_spaces = '';
    row_stars = '';
}
