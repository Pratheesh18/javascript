function createNewPerson(name){
    const obj = {};
    obj.name=name;
    obj.greeting = function(){
        console.log('Hi! I\'m' + obj.name + '.');
    };
    return obj;
}

const salva = createNewPerson('Salva');
salva.name;
salva.greeting();