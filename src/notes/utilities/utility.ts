function delay(res: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I\'m awaited type ');
        }, res)
    })
}
type delayedType = Awaited<ReturnType<typeof delay>>;
async function firstResponse(): Promise<unknown> {
    return "First"
}
async function delayedResponse(): Promise<delayedType> {
    const response = await delay(2000);
    return response;
}

async function main() {

    await delayedResponse();
    await firstResponse();

}

console.log(main());


// <Partial>

interface Animal {
    wild: string,
    pet: string,
    sea: string,
    desert: string,


}
type PartialAnimalType = Partial<Animal>;

const wildAnimal: PartialAnimalType = { wild: 'wolf' };
const seaAnimal: PartialAnimalType = { sea: 'shark ' };

// <Required>

type RequiredAnimalType = Required<Animal>
const requiredAnimal: RequiredAnimalType = { wild: 'lion' };
// error TS2739: Type '{ wild: string; }' is missing the following properties from type 'Required<Animal>': pet, sea, desert

// Readonly
interface IMyname {
    name: string;
}
const newName: Readonly<IMyname> = {
    name: 'Mashkhura',

};
console.log(newName.name = "Shodia");
// Cannot assign to 'name' because it is a read-only property.


//Record<Keys,Type>
type BooksEditionYear = Record<string, number>

const books: BooksEditionYear = {
    "Chexov": 1998,
    "Pushkin": 2000,
}
console.log(books)


// Pick<Type,Keys>
interface ToDo {
    title: string,
    description: string,
    completed: boolean,
}

type ToDoPreview = Pick<ToDo, "title">;

const todo: ToDoPreview = {
    title: "Hello WOrlds",

}
todo


// Omit<Type,Keys>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type ToDoOmit = Omit<Todo, "description" | "title">

const todo: ToDoOmit = {
    createdAt: 232,
    completed: false,

}
console.log(todo)


//Exclude<UnionKeys,ExcludedMembers>

type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "triangle" }>


// Extract<Type,Union>
type Animal = "Dog" | "Cat" | "Bird" | "Fish";

type Pet = Extract<Animal, 'Dog' | 'Cat'>;
let myPet: Pet;
console.log(myPet = 'Fish')

// NonNullable<Type>
type Things = string | null | undefined | boolean
type CheckNull = NonNullable<Things>

// Parameter
type Sleep = { x: string, y: number };
type SleepParams = Parameters<Sleep>;


// ConstructorParameters<Type>

class Person {
    constructor(name: string, age: number) { }
}

// ReturnType<Type>
type PersonConstructorParams = ConstructorParameters<typeof Person>;
type AddFunction = (x: number, y: number) => number;

type AddFunctionResult = ReturnType<AddFunction>;


//InstanceType<Type>
class Person {
    constructor(name: string, age: number) { }
}

type PersonInstance = InstanceType<typeof Person>;

