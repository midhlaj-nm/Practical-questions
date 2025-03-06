function family(members,houseName){
    return{
    members: members,
    houseName: houseName,
    great(){
        console.log(`I have ${members} in my family and my house name is ${houseName}`)
        }
    };
}

const family1 = family(4,'Valiyakath Korissery');
const family2 = family(4,'Muslim veettil Korissery');

family1.great()
family2.great();