const Cast = (props) => {
    return (
        <div>
            {props.actors &&
            <ul>Actors:
                {props.actors.split(',').map(a => <li>{a}</li>)}
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