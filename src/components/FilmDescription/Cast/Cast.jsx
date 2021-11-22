const Cast = (props) => {
    return (
        <div>
            {props.actors &&
            <ul><strong>Actors:</strong>
                {props.actors.split(',').map(actor => <li>{actor}</li>)}
            </ul>
            }
            {!props.actors &&
            <ul>Actors:

            </ul>
            }
        </div>
    )
}

export default Cast;