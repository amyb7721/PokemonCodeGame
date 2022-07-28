// you are a Pokemon Master 
// you are on a journey 

console.log('\n\nThis is the story of Ethan, the Pokemon master.\n')

const myParty = []

const myStarterPokemon = 'Bulbasaur'
console.log('prof. Oak lets you chose a Pokemon: "I choose you, ' + myStarterPokemon + '!"')
myParty.push(myStarterPokemon)
console.log('Your party is: ' + myParty)
console.log()

console.log('You walk through the grass and find some cool guys.')
myParty.push('Pidgey')
myParty.push('pidgey')
myParty.push('Ratatta')
myParty.push('Pidgey')
myParty.push('Pidgey')
console.log('Your party is: ' + myParty)
console.log()

console.log('You relize that Bulbasaur was the wrong choice and is holding you back.' , 'So you release him.')
myParty.splice(0,1)
console.log('"Bye, \'lil B..."')
console.log('Your party is: ' + myParty)
console.log()

console.log('Your decide you like Gary\'s charmander better, so you seize it after thoroughly destroying him in battle.')
console.log('You want to put Charmander first in your party.')
myParty.unshift('Charmander')
console.log('Your party is: ' + myParty)
console.log()

console.log('You are hungry and the last pidgey in your party appears to be the juciest.')
console.log('"Trainer gotta east!"')
let dinner = myParty.pop()
console.log('You just ate ' + dinner + ' for dinner.')
console.log('Your party is: ' + myParty)
console.log()

console.log('"How many Pokemon do I have?" you wonder.')
console.log('You check and it appears you have ' + myParty.length + '.')

console.log('You see a Youngster in the woods who just had serval of his pokemon stolen.','You decide to help him.')
console.log('"Hello young man, I\'m going to give you three Pokemon for your troubles," you say.')
console.log('You gift him with three of your worst Pokemon')
const youngsterParty = myParty.splice(1, 3, 'Tyranitar')
console.log('Your party is: ' + myParty)
console.log('Youngester\'s party is: ' + youngsterParty)
console.log()

console.log('Long story short, you realize this Tyranitar wrecks and you release your Charmander.')
myParty.splice(0,1)
console.log('Your party is: ' + myParty)
console.log()

console.log('After much discipline, your Pidgey evolves and turns into Pidgeotto')
myParty[1] = 'Pigeotto'
console.log('Your party is: ' + myParty)
console.log()

console.log('Someone ask you what your second Pokemon is.')
const indexOfSecondPokemon = 1
console.log('So you show him your ' + myParty[indexOfSecondPokemon] + '.')
console.log()

console.log('A short, bald man sells you four Magikarp for $2000.')
for (let i=0; i < 4; i++) {
    myParty.push('Magikarp')
}
console.log('Your party is: ' + myParty)
console.log()

console.log('Fin.\n\n\n')

for (let i = 0; i < 3; i++) {
    console.log(myParty[i])
}