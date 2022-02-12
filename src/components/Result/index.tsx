import { ConfrontResult } from '../../model/Confront';
import { ResultContext } from '../../context/ResultContext';
import { useContext } from 'react';

const Result = () => {

    const resultContext = useContext(ResultContext);
    return (
        <table className='table'>
            <thead className='table__head'>
                <tr>
                    <th className='table__data'></th>
                    <th className='table__data'>{resultContext?.result?.jogadorA.name}</th>
                    <th className='table__data'>{resultContext?.result?.jogadorB.name}</th>

                </tr>
            </thead>
            <tbody className='table__body'>
                <tr>
                    <td className='table__data'>Média de Gols</td>
                    <td className='table__data'>{resultContext?.result?.average_goals.jogadorA_average}</td>
                    <td className='table__data'>{resultContext?.result?.average_goals.jogadorB_average}</td>
                </tr>

            </tbody>
        </table>
    )
}

export default Result;