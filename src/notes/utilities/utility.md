<Awaited> means await in async functions
<Partial> useful when you create types based on existing types with optional properties
<Required> containing all properties of Type set required opposite of <Partial>

<ReadOnly> set all properties of Type set to readonly, which means they cannot be reassigned, while runtime when attemting reassigned happen "frozen object" that freezes object, Object.freeze() is static method prevents extensions,makes objects non editable and non-writable

Record<Keys, Type> used when we want specific structure for objects with known types and keys. It provides safety shapes of object 

Pick<Type, Keys> create type by picking set of properties Keys from Type with using string literals or unions

Omit <Type, Keys>  contstructs types by picking all properties from Type and removing Keys from type using string literal or unions .Opposite of <Pick>

Exclude<UnionTypes,ExcludedMembers> constructs exluding from <UnionTypes> all unions assigned to  <ExcludedMembers>

Extract<Type,Union> constructs type extracts from <Type > to assignable Union

NonNullable<Type> constructs type excluding null and undefined from <Type>

Parameters<Type> constructs type extracts parameter type from one function and  we can use them into other codes

ConstructorParameters<Type> extracts parameter type from constructor function type

ReturnType<Type> constructs type consisting of function <Type> or constructor function<Type>

Instance<Type> consisting all instance types of constructor function in <Type>