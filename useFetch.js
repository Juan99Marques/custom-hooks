import { useState, useEffect } from 'react';


export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    
        const getFetch = async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setState({
                    loading: false,
                    error: null,
                    data
                });
            } catch (error) {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            }
        }

        useEffect(() => {
            getFetch();
        }
        , [url]);

    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    };
}

