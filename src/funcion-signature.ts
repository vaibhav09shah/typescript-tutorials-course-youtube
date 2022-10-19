let greetSignature: (name: String, greeting: String ) => void

greetSignature = (name: String, greeting: String) => {
    console.log(`${name} says ${greeting}`)
}