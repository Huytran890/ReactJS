//! Example of Type alias vs Interface
// type TUserProps = {
//     name: string;
//     age: number;
// };

// interface IUserProps {
//     name: string;
//     age: number;
// }

// export const User = ({ name, age, role }: IAdminProps) => {
//     return (
//         <div>
//             Card: {name}, {age}, {role}
//         </div>
//     )
// }

//! combining a base with additional properties
// type TUserProps = {
//     name: string;
//     age: number;
// };

// type TAdminProps = TUserProps & {
//     role: string;
// }

// interface IUserProps {
//     name: string;
//     age: number;
// }

// interface IAdminProps extends IUserProps {
//     role: string;
// }

//! -----------------------------------------------------------------
// interface can only describe object - Type all describe object and everything else
// type TAddress = string | string[];

// interface IAddress {
//     address: string;
// } //? not true

// const address1: TAddress = '123 nguyen duy hieu';
// const address2: TAddress = ['123 nguyen duy hieu', '456 do ba'];
// console.log(address1);
// console.log(address2);

//! -----------------------------------------------------------------
// type alias can easily use utility types - interface can too but only with ugly syntax

// type UserProps = {
//     name: string;
//     age: number;
//     createdAt: Date;
// }
// // name and age is removed
// type GuestProps = Omit<UserProps, "name" | "age">

// interface GuestProps extends Omit<UserProps, "name" | "age">{}

//! -----------------------------------------------------------------
// type alias can easily describe tuples - interface can too but only with ugly syntax

// type TAddress = [number, string];

// interface IAddress extends Array<number | string> {
//     0: number;
//     1: string;
// }
// const address: IAddress = [1, "32 do ba"];
// console.log('««««« address »»»»»', address);

//! -----------------------------------------------------------------
// extracting type from something else
// const project = {
//     title: "Tran The Huy",
//     specification: {
//         areaSize: 100,
//         room: 3
//     },
// } as const;

// type Specification = typeof project["specification"];

//! -----------------------------------------------------------------
// interface can be merged,
// "interface are open" and "type aliases are closed"
// interface IUser {
//     name: string;
//     age: number;
// }

// interface IUser {
//     role: string;
// }

// type TUser = {
//     name: string;
//     age: number;
// }

// type TUser2 = TUser & {
//     role: string;
// } //? true

// type TUser {
//     role: string;
// } //? not true

// const user: TUser2 = {
//     name: "Tran The Huy",
//     age: 15,
//     role: "Admin"
// }
// console.log(user);

//! --------Doi sang dung unknown thay vi any-------------
// export const ProductPage = async () => {
//     fetch("https://dummyjson.com/products/1")
//         .then((res) => res.json())
//         .then((data: unknown) => console.log(data));
// }

// export const SendEmail = async () => {
//     try {
//         await ProductPage()
//     } catch (error) {
//         let message;
//         if (error instanceof Error) {
//             message = error.message;
//         } else if (error && typeof error === 'object' && 'message' in error) {
//             message = String(error.message);
//         } else if (typeof error === 'string') {
//             message = error;
//         } else {
//             message = "Some thing went wrong!";
//         }
//         return {
//             message,
//         }
//     }
// }

//! -------- Generic -------------
//? Example 1
// const convertToArray = <T extends number | string>(input: T): T[] => {
//     return [input]
// }

// convertToArray('hello');

//? Example 2
// const getIndexOfArrayItem = <T,>(array: T[], arrayItem: T) => {
//     return array.findIndex((item) => item === arrayItem);
// };

// const arr = [55, 99, 77];
// getIndexOfArrayItem(arr, 77);

//? Example 3
// const createArrayPair = <T, K>(input: T, input2: K): [T, K] => {
//     return [input, input2];
// }

// createArrayPair("Hello", 10);