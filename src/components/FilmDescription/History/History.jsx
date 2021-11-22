import s from './History.module.css'

const History = (props) => {
    return (
        <div>
            {props.history &&
            <ul className={s.historyList} ><strong>History:</strong>
                {props.history.map(film => <li>{film}</li>)}
            </ul>
            }
            {!props.history &&
            <ul>History:

            </ul>
            }
        </div>
    )
}

export default History;