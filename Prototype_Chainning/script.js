const animal = {
    dna: 'ATCG',
  };
  
  const dog = {
    face: '🐺',
  }
  
  console.log(Object.setPrototypeOf(dog, animal));
  
  console.log(Object.getPrototypeOf(dog) === animal) // true
  
 console.log( Object.getPrototypeOf(animal) === Object.prototype); // true
  
 console.log( Object.getPrototypeOf(Object.prototype) === null); // true
 console.log(Object.prototype)