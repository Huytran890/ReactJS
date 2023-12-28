# Typescript

##💥 Basic type

1. `Boolean`

   - Explanation: Represents a true or false value.
   - Code Example:

   ```ts
   let isTrue: boolean = true;
   let isFalse: boolean = false;
   ```

2. `Number`

   - Explanation: Represents numeric values, including integers and floating-point numbers.
   - Code Example:

   ```ts
   let integerNumber: number = 42;
   let floatingPointNumber: number = 3.14;
   ```

3. `String`

   - Explanation: Represents textual data enclosed in single or double quotes.
   - Code Example:

   ```ts
   let singleQuoted: string = "Hello, TypeScript!";
   let doubleQuoted: string = "Hello, TypeScript!";
   ```

4. `Array`

   - Explanation: Represents a list of values of the same type. You can specify the type of elements inside the array.
   - Code Example:

   ```ts
   let numbers: number[] = [1, 2, 3, 4, 5];
   let fruits: string[] = ["apple", "banana", "cherry"];
   ```

5. `Tuple`

   - Explanation: A fixed-size array where each element can have its own data type.
   - Code Example:

   ```ts
   let person: [string, number] = ["Alice", 30];
   let coordinates: [number, number] = [42, 12];
   ```

6. `Enum`

   - Explanation: A way to give friendly names to a set of numeric values.
   - Code Example:

   ```ts
   enum Color {
     Red,
     Green,
     Blue,
   }
   let selectedColor: Color = Color.Green;
   ```

7. `Any`

   - Explanation: A type that can hold values of any data type. It's the most flexible type but should be used with caution.
   - Code Example:

   ```ts
   let data: any = "This can be anything";
   data = 42;
   ```

8. `Void`

   - Explanation: Typically used as the return type of functions that don't return any value.
   - Code Example:

   ```ts
   function sayHello(): void {
     console.log("Hello, world!");
   }
   ```

9. `Null and Undefined`

   - Explanation: Represent the absence of a value. They can be assigned to variables of any type.
   - Code Example:

   ```ts
   let noValue: null = null;
   let notDefined: undefined = undefined;
   ```

10. `Never`

    - Explanation: Represents a type that never occurs. It's typically used as the return type for functions that always throw errors or never return.
    - Code Example:

    ```ts
    function throwError(message: string): never {
      throw new Error(message);
    }
    ```

11. `Object`

    - Explanation: Represents any JavaScript object type.
    - Code Example:

    ```ts
    let personObject: object = { name: "Alice", age: 30 };
    let car: object = { make: "Toyota", model: "Camry" };
    ```

12. `Unknown`

- In TypeScript, `unknown` is used for variables or parameters whose type is not yet explicitly determined. `unknown` is similar to any but requires type checking before using it.

```ts
function processValue(value: unknown) {
  if (typeof value === "number") {
    console.log("Value is a number:", value);
  } else if (typeof value === "string") {
    console.log("Value is a string:", value);
  } else {
    console.log("Value is of an unknown type");
  }
}

let value1: unknown = 5;
let value2: unknown = "Hello";
let value3: unknown = true;

processValue(value1); // Output: Value is a number: 5
processValue(value2); // Output: Value is a string: Hello
processValue(value3); // Output: Value is of an unknown type
```

## 💥 Union type `|`

A union type in TypeScript is a way to specify that a variable or parameter can hold values of multiple, possibly different, data types. It is represented by separating the individual types with the pipe (`|`) symbol. This allows you to declare a variable that can accept values of one or more specified types.

### Syntax

The syntax for defining a union type is as follows:

```typescript
let variableName: Type1 | Type2 | ... | TypeN;
```

variableName: The name of the variable or parameter.
Type1, Type2, ..., TypeN: The possible data types the variable can hold.

Example: Here's an example of a union type in TypeScript:

```ts
// A variable that can hold either a string or a number
let value: string | number;

value = "Hello, TypeScript"; // ✅Valid
value = 42; // ✅ Valid
value = true; // ❌Error: Type 'boolean' is not assignable to type 'string | number'.
```

## 💥 Intersection type `&`

An intersection type in TypeScript allows you to combine multiple types into one, creating a new type that contains all the properties and methods from each of the individual types. It is represented using the ampersand (`&`) symbol to connect the types. Intersection types provide a way to express the idea that an object must satisfy all the specified types.

### Syntax

The syntax for defining an intersection type is as follows:

```typescript
type CombinedType = Type1 & Type2 & ... & TypeN;

// Combining two types to create a new type
type Person = { name: string; age: number };
type Address = { city: string; zipCode: string };

type Contact = Person & Address;

const contactInfo: Contact = {
  name: "Alice",
  age: 30,
  city: "New York",
  zipCode: "10001",
};

```

## 💥Type assertions

- `✅as const`
  `✅as Type`

- `as const`:

  - The as const assertion is used to make TypeScript infer a literal type for a variable or property, ensuring that it cannot be modified or widened to a broader type.
  - It's often used with arrays, objects, or values to lock them into their exact types.

  ```ts
  const colors = ["red", "green", "blue"] as const;
  // colors is inferred as type: ['red', 'green', 'blue']

  const person = {
    name: "Alice",
    age: 30,
  } as const;
  // person is inferred as type: { readonly name: "Alice"; readonly age: 30; }

  // Attempting to modify a property will result in a TypeScript error.
  // person.name = 'Bob'; // ❌Error: Cannot assign to 'name' because it is a read-only property.
  ```

- `as Type`:

  - The as Type assertion allows you to assert a value to a specific type, overriding TypeScript's inference.
  - The as Type assertion allows you to assert a value to a specific type, overriding TypeScript's inference.

  ```ts
  const value: any = 42;
  const strValue = value as string;
  // strValue is now treated as a string, even though it's assigned to a number

  // This can be useful for type casting in situations where TypeScript's inference is too strict.
  ```

## 💥Type guards

Type guards in TypeScript are a mechanism to narrow down the type of a value within a conditional block, allowing you to work with specific types in a type-safe manner. They help you make more precise assertions about the type of a variable, parameter, or expression at runtime.

### Why Use Type Guards?

TypeScript uses static type checking to catch type errors at compile time. However, there are situations where the type of a value is not known until runtime, such as when working with data from user inputs or external APIs. Type guards enable you to perform runtime type checks and provide type safety when working with dynamic data.

### Common Type Guards

1. **Typeof**

   The `typeof` type guard is used to check the type of a variable or expression. It checks for primitive types like `"string"`, `"number"`, `"boolean"`, etc.

   ```typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }

   if (isString(input)) {
     // Now TypeScript knows that 'input' is a string
     input.length; // Type-safe access to string methods
   }
   ```

2. **Instanceof**

   The instanceof type guard checks if an object is an instance of a particular class or constructor function.

   ```typescript
   class Animal {}
   class Dog extends Animal {}

   function isDog(animal: Animal): animal is Dog {
     return animal instanceof Dog;
   }

   if (isDog(myPet)) {
     // Now TypeScript knows that 'myPet' is a Dog
     myPet.bark(); // Type-safe access to Dog methods
   }
   ```

3. **in**

   The in type guard checks if an object has a particular property, using that to differentiate between different types.

   ```typescript
   interface Pupil {
     ID: string;
   }
   interface Adult {
     SSN: number;
   }
   interface Person {
     name: string;
     age: number;
   }
   let person: Pupil | Adult | Person = {
     name: "Britney",
     age: 6,
   };
   const getIdentifier = (person: Pupil | Adult | Person) => {
     if ("name" in person) {
       return person.name;
     } else if ("ID" in person) {
       return person.ID;
     }
     return person.SSN;
   };
   ```

4. **Type predicates**

   Type predicates in TypeScript are functions that return a type predicate (value is Type) and are commonly used with custom type guards to narrow down the type of a variable or expression. Here's an example of a type predicate in TypeScript.

   ```typescript
   // Define the Cat and Dog types
   type Cat = { kind: "cat"; name: string };
   type Dog = { kind: "dog"; breed: string };

   // Custom type guards with type predicates
   function isCat(pet: Cat | Dog): pet is Cat {
     return pet.kind === "cat";
   }

   function isDog(pet: Cat | Dog): pet is Dog {
     return pet.kind === "dog";
   }

   // Function that interacts with pets
   function petInteraction(pet: Cat | Dog) {
     if (isCat(pet)) {
       // now 'pet' is Cat
       console.log(`You have a cat named ${pet.name}.`);
     } else if (isDog(pet)) {
       // now 'pet' is Dog
       console.log(`You have a dog of breed ${pet.breed}.`);
     } else {
       // now 'pet' is Cat | Dog
       console.log(`Unknown pet type.`);
     }
   }

   const fluffy: Cat = { kind: "cat", name: "Fluffy" };
   const rover: Dog = { kind: "dog", breed: "Golden Retriever" };
   const unknownPet = { kind: "unknown" };

   petInteraction(fluffy); // Output: You have a cat named Fluffy.
   petInteraction(rover); // Output: You have a dog of breed Golden Retriever.
   petInteraction(unknownPet); // Output: Unknown pet type.
   ```

## 💥 Type and Interface in TypeScript

In TypeScript, both `type` and `interface` are used to define custom data structures, but they have some differences in their usage and capabilities.

### `type`

- **Definition**: The `type` keyword is used to create custom types by combining existing types. It allows you to define new types, unions, intersections, and mapped types.
- **Usage**: `type` is especially useful for creating complex, union, and intersection types. It can represent primitive types, object types, and even function types.
- **Example**:

  ```typescript
  type Person = {
    name: string;
    age: number;
  };

  type Point = { x: number; y: number };
  type Circle = Point & { radius: number };
  type Result = string | null;
  ```

### `interface`

- **Definition**: The interface keyword is used to define the shape or structure of an object. It mainly focuses on the contract or blueprint for objects.
- **Usage**: interface is commonly used when defining the structure of classes, objects, and the public API of a module or library. It's not suitable for creating union or intersection types.
- **Example**:

  ```typescript
  interface Person {
    name: string;
    age: number;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface Circle extends Point {
    radius: number;
  }
  ```

| Feature                  | `type`                                                                                            | `interface`                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Syntax                   | `type` keyword                                                                                    | `interface` keyword                                                                                          |
| Definition               | Used for defining custom type aliases.                                                            | Used for defining object shapes.                                                                             |
| Extends and Implements   | Cannot use `extends` for multiple types.                                                          | Can use `extends` for multiple interfaces.                                                                   |
| Merging Interfaces       | Cannot merge `type` declarations.                                                                 | Can merge multiple `interface` declarations with the same name.                                              |
| Structural vs Nominal    | Structural: types are based on their shape.                                                       | Nominal: identity-based on their name (but their shape still matters).                                       |
| Union/Intersection Types | More flexible in handling union and intersection types.                                           | Typically not used for union/intersection types.                                                             |
| Recommended Use Cases    | Suitable for representing complex data structures, union types, intersection types, mapped types. | Suitable for defining contracts, object structures, classes, or when you need to extend multiple interfaces. |

## 💥 Generic

- Generics are a way to parameterize types and functions, enabling you to write more flexible and type-safe code. Here's an example of how generics work in TypeScript

```ts
function indentity<A>(arg: A): A {
  return arg;
}

indentity<number>(10);
indentity<string>("10");
indentity<boolean>(true);
```

### Constraint in Generic

- Generics in TypeScript can also have constraints, which allow you to restrict the types that can be used as arguments in a generic function or class. This can be useful when you want to ensure that the generic type satisfies certain requirements.

```ts
type GenericType<T extends ConstraintType> = ...
```

```js
  function logLength<T extends {length: number}>(item: T): void {
    console.log(item.length)
  }

  logLength("123"); // 3 ✅
  logLength([1,2,3]); // 3 ✅
  logLength(123); // ❌ Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
```

```ts
function average<T extends number[]>(numbers: T): number {
  const sum = numbers.reduce((acc, value) => acc + value, 0);
  return sum / numbers.length;
}

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [2, 4, 6, 8, 10];
const strings = ["one", "two", "three"];

console.log(average(numbers1)); // ✅  3
console.log(average(numbers2)); // ✅ 6
console.log(average(strings)); // ❌ Argument of type 'string[]' is not assignable to parameter of type 'number[]'.Type 'string' is not assignable to type 'number'
```

## 💥 Conditional type

- They are often used with the extends keyword to create type constraints and branch type definitions based on these conditions

```ts
type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>; // string
export type IsNonString = Check<number>; // non-string
```

## 💥 Utility type

### `Partial<T>`

- Makes all properties of a type T optional, effectively creating a new type where each property can be undefined.

```ts
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;
// PartialPerson is { name?: string; age?: number; }
```

### `Required<T>`

- Makes all properties of a type `T` required, ensuring that each property must have a value.

```ts
type RequiredPerson = Required<PartialPerson>;
// RequiredPerson is { name: string; age: number; }
```

### `Readonly<T>`

- Makes all properties of a type `T` read-only, preventing any changes to their values.

```ts
type ReadonlyPerson = Readonly<Person>;
// ReadonlyPerson is { readonly name: string; readonly age: number; }
```

### `Record<K, T>`

Creates a new type with keys of type `K` and values of type `T`.

```ts
type Dictionary = Record<string, number>;
// Dictionary is an object where all keys are strings and values are numbers
```

### `Pick<K, T>`

Selects specific properties `K` from a type `T` to create a new type.

```ts
type PersonName = Pick<Person, "name">;
// PersonName is { name: string; }
```

### `Exclude<K, T>`

Removes all types from `T` that are assignable to `U`..

```ts
type NumbersOnly = Exclude<number | string | boolean, string | boolean>;
// NumbersOnly is number
```

### `Extract<K, T>`

Selects all types from `T` that are assignable to `U`.

```ts
type StringsOrBooleans = Extract<number | string | boolean, string | boolean>;
// StringsOrBooleans is string | boolean
```

### `NonNullable<K, T>`

Removes null and undefined from a type `T.`

```ts
type NonNullStrings = NonNullable<string | null | undefined>;
// NonNullStrings is string
```

### `ReturnType<K, T>`

Extracts the return type of a function or function-like type `T`.

```ts
type MyFunction = () => number;

type ReturnValueType = ReturnType<MyFunction>;
// ReturnValueType is number
```
