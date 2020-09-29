const STATE = {
    users: [
        {id: 1, name: 'Yudi Tamashiro'},
        {id: 2, name: 'Priscila Alcantara' },
    ],
    types: [
        {id: 1, title: 'Bem'},
        {id: 2, title: 'Procedimento'},
        {id: 3, title: 'Predial'},
    ]
}

// Disponível para uma possível atualização onde seja possível modificar usuários
function config(state = STATE, action){
    switch (action.type){
        default:
            return state;
    }
}

export default config;