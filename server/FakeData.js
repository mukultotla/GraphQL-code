const UserList = [
    {
        id: 1,
        name: "Mukul", 
        username: "mukultotla",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "David", 
                username: "david",
                age: 19,
                nationality: "BRAZIL"
            },
            {
                id: 3,
                name: "Austin", 
                username: "austin",
                age: 32,
                nationality: "MEXICO"
            }
        ]
    },
    {
        id: 2,
        name: "David", 
        username: "david",
        age: 19,
        nationality: "BRAZIL"
    },
    {
        id: 3,
        name: "Austin", 
        username: "austin",
        age: 32,
        nationality: "MEXICO"
    },
    {
        id: 4,
        name: "Kylian", 
        username: "kylian",
        age: 58,
        nationality: "FRANCE",
        friends: [
            {
                id: 3,
                name: "Austin", 
                username: "austin",
                age: 32,
                nationality: "MEXICO"
            }   
        ]
    }
];

const MovieList = [
    {
      id: 1,
      name: "Avengers Endgame",
      releaseYear: 2019,
      isInOTT: true,
    },
    {
      id: 2,
      name: "Interstellar",
      releaseYear: 2007,
      isInOTT: true,
    },
    {
      id: 3,
      name: "Superbad",
      releaseYear: 2009,
      isInOTT: false,
    },
    {
      id: 4,
      name: "Covid- The Movie",
      releaseYear: 2020,
      isInOTT: true,
    },
  ];
  

module.exports = { UserList, MovieList }