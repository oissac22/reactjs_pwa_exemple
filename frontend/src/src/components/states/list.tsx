import * as React from 'react';
import { states, TStates } from '../../sys/connect';


export default function ListStates(){

    const [listStates, setListStates] = React.useState<TStates[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>('');

    React.useEffect(() => {
        setLoading(true)
        setError('')
        states()
            .then( result => {
                setLoading(false)
                setListStates(
                    result.data
                        .sort((a,b) => a.nome < b.nome ? -1 : 1 )
                )
            } )
            .catch(error => {
                setError(error+'')
            })
    },[])

    if(error)
        return <div className='h100 center'>{error}</div>

    if(loading)
        return <div className='h100 center'>Carregando...</div>

    return <div className='flex-column flex1 h100'>
        <p>
            Lista de estados
        </p>
        <div className='overflow flex1'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStates.map( state => {
                            return <tr key={state.id}>
                                <td>{state.id}</td>
                                <td>{state.nome}</td>
                                <td>{state.sigla}</td>
                            </tr>
                        } )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3}>{listStates.length} estados</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

}