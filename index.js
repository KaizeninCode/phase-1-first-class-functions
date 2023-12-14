// function Monday() {
//     console.log('Go for a five mile run')
//     console.log('Pump iron')
// }
// function Tuesday() {
//     console.log('Go for a five mile run')
//     console.log('Swim 40 laps')
// }
// function Wednesday() {
//     console.log('Go for a five mile run')
//     console.log('Go for a five mile run')
// }
// function Thursday() {
//     console.log('Go for a five mile run')
//     console.log('Pump iron')
// }
// function Friday() {
//     console.log('Go for a five mile run')
//     console.log('Swim 40 laps')
// }

// //shortening code Monday ()
// function runFiveMiles() {
//     console.log('Go for a five mile run')
// }
// function liftWeights() {
//     console.log('Pump iron')
// }
// function swimFortyLaps() {
//     console.log('Swim 40 laps')
// }

// //now Monday() becomes
// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

// //because there are two activities every day and running is one of them, we can pass the second activity as a parameter 
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles()
//     postRunActivity() //a callback function called after we call runFiveMiles
// }

// //that would make Monday() look like this
// function Monday() {
//     exerciseRoutine(liftWeights); //when we want to pass a function as a parameter, we pass it by reference (omitting the parentheses at the end)
// }


// //if we only need to use our function one time, there is no need to assign it to a variable  or give it a name. Instead, we define it as an anonymous function, passing it as the argument when we call it
// exerciseRoutine(() => console.log('Stretch! Work that core!')) //like that

// //returning functions is important when we want to package up a function and its environment but we don't want to call it just yet

// //say our morning routine involves drinking a cup of coffee, exercising immediately then at some point (depending on how we're feeling), eating breakfast. What we'll have for breakfast will depend on the kind of exercise we do. Let's put that into a function.
// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = 'protein bar'
//     } else if (exercise === swimFortyLaps) {
//         breakfast = 'kale smoothie'
//     } else {
//         breakfast = 'granola'
//     }
//     exerciseRoutine(exercise)

//     //we could give this function a name if we wanted to but because it's only available inside morningRoutine(), we don't need to
//     return function () {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`)
//     }
// }

// //now when we call morningRoutine, not only will our exercise routine be logged as before, but we'll also get a function back
// const afterExercise = morningRoutine(liftWeights)
// afterExercise

// //and we can call that function later
// afterExercise()

function curse() {
    return 'What the hell?!'
}
function receivesAFunction(curse) {
    curse()
}

function returnsANamedFunction() {
    return function stopIt() {
        return 'Don\'t curse, bro.'
    }
}

function returnsAnAnonymousFunction() {
    return () => 'My bad, bro.'
}