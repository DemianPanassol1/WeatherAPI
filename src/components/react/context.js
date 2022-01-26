import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';

const context = createContext();
const dispatchContext = createContext();

const initialState = {
    data: null,
    city: localStorage.getItem('weatherCity') || 'Caxias do Sul - RS',
    error: null,
    loading: false
};

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const pesquisaNome = async (data) => {
        try {
            dispatch({ type: 'SET_LOADING' });

            const res = await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.REACT_APP_API_KEY}&city_name=${data}`);

            let array = [];

            for (let i = 0; i < 4; i++) {
                let item = res.data.results.forecast.shift();

                array.push(item)
            };

            res.data.results.forecast = array;

            localStorage.setItem('weatherCity', res.data.results.city);

            dispatch({ type: 'PESQUISA_POR_NOME', data: res.data.results });

        } catch (error) {
            if (error.response.status === 403) {
                error.message = 'Parece que o limite de buscas por cidades foi atingido. Por favor, tente novamente mais tarde'
            };

            dispatch({ type: 'MENSAGEM_ERRO', data: error.message });
        };
    };

    return (
        <context.Provider value={state}>
            <dispatchContext.Provider value={pesquisaNome}>
                {children}
            </dispatchContext.Provider>
        </context.Provider>
    );
};

export { ContextProvider, context, dispatchContext };
