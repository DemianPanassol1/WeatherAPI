function reducer(state, action) {
    switch (action.type) {
        case 'PESQUISA_POR_NOME':
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: !state.loading
            };

        case 'MENSAGEM_ERRO':
            return {
                ...state,
                error: action.data,
                loading: false
            };

        default:
            return state;
    };
};


export default reducer;
