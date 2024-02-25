object is simple javascript way that we can pass data throuth them. objects can be anonymous (simple) , type alias and interface objects.Before creating object you should know which type of object will be needed . 
type alias useful when working with arrays ,tuples,primitives, unions,intersections, they are flexible. e.g you need type that might not be object, so you can declare with string literals unions . Minus types not changable, not extendable and not declaring many declaration at the same time

Interfaces extendable, u may add new properties or methods. it supports declaration merging,allows splitting methods, definitions separate parts then merge all in one single interface.But it cannot define declarations directly using object shapes like tuples,unions and primitives

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

Generic objects

interface Box<Type> {
  contents: Type;
}
let box: Box<string>;
via using generic we can avoid overloading


intersection & combines 2 existing object
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}



tuples is a type of array that knows how many elements contain, and exactly its types in specific positions




