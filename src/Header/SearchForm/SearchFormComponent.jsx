import s from './SearchFormComponent.module.css'
import {Field, reduxForm} from "redux-form";

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'filmTitle'} component={'input'} placeholder={'Find a ..'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}

const SearchReduxForm = reduxForm({form: 'searchFilm'})(SearchForm)

const SearchFormComponent = (props) => {

    let findFilm = (values) => {
        props.getFilmInfo(values.filmTitle)
    }
    return (
        <div className={s.searchForm}>
            <SearchReduxForm onSubmit={findFilm}/>
        </div>
    )
}

export default SearchFormComponent;