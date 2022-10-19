type StringOrNumber = String | number
type objectWithName = { uid: StringOrNumber, name: String }
// const greetAlias = (uid: String | number, name: String) => {
//     return `${uid} is id of ${name}`
// }

// const greetAliasAgain = (user: {name: String, uid: String | number}) => {
//     return `${user.name} says Hello`
// }


const greetAlias = (uid: StringOrNumber, name: String) => {
    return `${uid} is id of ${name}`
}

const greetAliasAgain = (user: objectWithName) => {
    return `${user.name} says hello`
}

