
let oil: string | number; //unions

//Type Alias not able to extend and reopen, cannot be duplicated

type User = {
    name: number | string;
}
function callUser=(props: User) => {
    console.log(`Hello ${props.name} `)
}
callUser(34);

// Interface can be extended, added. They only used to declare shapes (add,change properties) not rename primitives

// Type assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// or
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
// union literals
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}


// Non - null Assertion Operator(Postfix!) removing null or undefined
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}


// enums not type-level extension of JS, they have impact on runtime
enum Direction {
    up = 1,
    down,
    left,
    right
}
// enums without initializers should come first or have to come after numeric enums with numeric
// contants.Numeric enums are auto incremented

// string enums each member has to strict initializer string


// mapped types modifiers readonly and optional