import s from './CV.module.css'

const CV = (props) => {
    return (
        <div className={s.cv}>
            <div className={s.personalInformation}>
                <h2>PERSONAL</h2>
                <h3>Name</h3> Piotr Shumski
                <h3>Adress</h3> Spiżowa 10/18 Wrocław
                <h3>Phone number</h3> 793-736-708
                <h3>Email</h3> petr.1k2794@gmail.com

                <h2>Languages</h2>
                <h3>English: * * </h3>
                <h3>Polish: * </h3>
                <h3>Russian: * * * * * </h3>

                <h2>Skills</h2>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JS</h3>
                <h3>React.JS</h3>

                <h2>Interests</h2>
                <h3>Coding</h3>
                <h3>Skydiving</h3>
                <h3>Space and astrophoto</h3>
            </div>
            <div className={s.experienceAndEducation}>
                yoyoyo
            </div>
        </div>
    )
}

export default CV;