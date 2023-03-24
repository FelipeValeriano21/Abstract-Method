// Interface de Fabrica Abstrata 

class AnimalFactory{
    createAnimal(){
        throw new Error("O método create animal deve ser implementado");
    }
}

// Fabrica Conreta

class DogFactory extends AnimalFactory{
    createAnimal(){
        return new Dog();
    }
}

class CatFactory extends AnimalFactory{
    createAnimal(){
        return new Cat();
    }
}

// Interface de produtos abstratos

class Animal{
    makeSound(){
        throw new Error("O método makesound deve ser implementado")
    }
}

//Produtos concretos

class Dog extends Animal{
    makeSound(){
        return "Woof"
    }
}

class Cat extends Animal{
    makeSound(){
        return "Miau"
    }
}

//Criação da Fabrica de cachorro e de gato


//fabrica concreta de dog
const dogFactory = new DogFactory(); 
const dog = dogFactory.createAnimal(); 
console.log(dog.makeSound()); 

//fabrica concreta de cat
const catFactory = new CatFactory(); 
const cat = catFactory.createAnimal(); 
console.log(cat.makeSound()); 





