// EPISODE 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The output will be "The murderer is Miss Scarlet"



// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The output will be an error - murderer variable is constant. Can't change Professor Plum



// EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The outputs will be 'First Verdict: Mrs Peacock' because you are calling the declareMurderer function which contains a block scope variable for murderer (Mrs. Peacock) and 'Second Verdict: Professor Plum' because the murderer variable was set as Professor Plum outside the function. The console.log can't see Mrs. Peacock.



// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// The outputs will be 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.'
// 'Suspect three is Mrs. Peacock' for same reasons as Episode 3. The second console.log can't see Colonel Mustard as it's a block scope variable inside the declareAllSuspects function. 



// EPISODE 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The output will be 'The weapon is the Revolver' as you are calling the function changeWeapon which changes the value of weapon to the parameter that you give it, in this case 'Revolver'. 



// EPISODE 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The output will be 'The murderer is Mrs White' because the original murderer Colonel Mustard is not a const variable, and therefore can be changed. It is also declared outside of any function so it can be seen throughout the code. 
// The changeMurderer function is called which, first of all, sets the murderer to Mr. Green, however it also contains a new function (plotTwist) which changes the murderer to Mrs. White, and this function is called inside the changeMurderer function. The murderer changes from Colonel Mustard to Mr. Green and then to Mrs. White. 



// EPISODE 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The output will read 'The murderer is Mr Green.' When the changeMurderer function is called the murderer changes from Prof Plum to Mr. Green. Inside that function the plotTwist function is called which changes the murderer to Colonel Mustard. The unexpectedOutcome function is then called which changes the local murderer to Miss Scarlet, however this is a let variable and can't be accessed outwith the plotTwist function. Therefore the murderer outside the function is still Mr Green. The declareMurderer function can only see the global variable at the top, which now reads Mr. Green.



// EPISODE 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// The output will read 'The weapon is Candle Stick. This is because the changeScenario function has an if statement which checks to see if the scenario.room is the same as the room given; it is so this in turn mutates the murderer in the object to Colonel Mustard. When the unexpectedOutcome function is called, the murderer matches the parameter given which mutates the weapon value to "Candle Stick".



// EPISODE 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The output will read 'The murderer is Professor Plum' because the global variable remains unchanged. Only the local variable will change and cannot be accessed by the declareMurderer function. 

// EXTENSION EPISODE 10

let murderer = 'Peter Quiznose'

const changeMurderer = function() {
  if (murderer === 'Peter Quiznose')
    murderer = 'Gareth Gravehorse'

  const plotTwist = function(){
    if (murderer === 'Gareth Gravehorse')
      murderer = 'Paul Pippingsworth'

    const omgMoment = function(){
      let murderer = "William Waldingstone"
    }
    omgMoment()
  }
  plotTwist()
}

const declareMurderer = function(){
  return `The real murderer got away with it because the jury couldn't see all the evidence and ${murderer} has been charged in their place`
}

changeMurderer()
const verdict = declareMurderer()
console.log(verdict)

// The murderer is Paul Pippingsworth because despite the local murderer variable changing to William Waldingstone after omgMoment, it can't be accessed outside of the function, so after changeMurderer and plotTwist have both been called, Paul Pippingsworth is the global variable that the declareMurderer function can see. 