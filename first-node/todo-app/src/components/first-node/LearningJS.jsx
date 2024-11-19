//Step 5.1
const person = {
    name: "John",
    email: "john@example.com",
    address: {
        street: "Baker Street",
        city: "Berlin",
        state: "East Germany"
    },
    profiles: ['twitter', 'github', 'linkedin'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
       // console.log(person.profiles[0])
    }
}

//Step 5.2
export default function LearningJS() {
    return (
        <>
            <div>Learning JavaScript</div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.address.street}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}