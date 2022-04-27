export const db = {
    students : [
        {
            id: 1,
            name: 'Emna Boukhris',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Houssem Saafi ',
            age: 23,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Kedidi Safa',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },

    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL3'
        },{
            id: 3,
            designation: 'GL3'
        },
    ],
    todos : [
        {
            id: "1",
            name:"test1",
            content:"content 1",
            status : "WAITING",
            user: "2"
        },
        {
            id: "2",
            name:"test 2",
            content:"content 2",
            status : "WAITING",
            user : "1"
        },
        {
            id: "3",
            name:"test 3",
            content:"content 3",
            status : "IN_PROGRESS",
            user: "1"
        }
    ],
    users : [
        {
            id: "1",
            name: "houssem",
            email: "houssem@gmail.com",
            todos: ["2","3"]
        },
        {
            id: "2",
            name: "safa",
            email: "safa@gmail.com",
            todos: ["1"]
        },
        {
            id: "1",
            name: "emna",
            email: "emna@gmail.com",
            todos: ["2","1"]
        },
    ]
}
