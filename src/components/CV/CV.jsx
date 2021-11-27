import s from './CV.module.css'

const CV = () => {
    return (
        <div className={s.cv}>
            <div className={s.personalInformation}>
                <div className={s.name}>
                    <h1>Piotr Shumski</h1>
                    <h3>Beginner Front-end developer</h3>
                </div>
                <div className={s.contactInfo}>
                    Adress: Wrocław, Spiżowa 10/18<br/>
                    Phone number: +48 793-736-708<br/>
                    Email: petr.1k2794@gmail.com<br/>
                </div>

                {/*<h3>Skills</h3>*/}
                {/*HTML<br/>*/}
                {/*CSS(Flexbox, Grid,<br/>*/}
                {/*JS<br/>*/}
                {/*React.JS<br/>*/}

                {/*<h3>Interests</h3>*/}
                {/*Coding<br/>*/}
                {/*Skydiving<br/>*/}
                {/*Space and astrophoto<br/>*/}
            </div>
            <div className={s.skills}>
                <div className={s.title}><h3>Skills</h3></div>
                <div>
                    <div className={s.skillItem}><strong>HTML</strong></div>
                    <div className={s.skillItem}><strong>CSS</strong></div>
                    <div className={s.skillItem}><strong>JS</strong></div>
                    <div className={s.skillItem}><strong>React</strong></div>
                    <div className={s.skillItem}><strong>Flex</strong></div>
                    <div className={s.skillItem}><strong>Grid</strong></div>
                    <div className={s.skillItem}><strong>Redux</strong></div>
                    <div className={s.skillItem}><strong>Thunk</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                    <div className={s.skillItem}><strong>REST api</strong></div>
                </div>

            </div>
            <div className={s.languages}>
                <div className={s.title}><h3>Languages</h3></div>
                <div className={s.item}><strong>English</strong><br/>A2-B1</div>
                <div className={s.item}><strong>Polish</strong><br/>A1</div>
                <div className={s.item}><strong>Russian</strong><br/>C2</div>
            </div>
        </div>
    )
}

export default CV;