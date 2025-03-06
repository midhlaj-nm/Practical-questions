const person = {
    name: 'Alice',
    greet: function(city, country){
        console.log(`Hi, I'm ${this.name}, from ${city}, ${country}`)
    }
};

//call
person.greet.call({name:'Bob'},'New York', 'USA')

//apply
person.greet.apply({name: 'Midhlaj'}, ['New York', 'USA'])

//bind
const binded = person.greet.bind({name: 'Anshida'}, 'Paris', 'France')
binded()