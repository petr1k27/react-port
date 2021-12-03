import s from './CV.module.css'
import locationPin from "../../assets/location-pin.png"
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"

const CV = () => {
    return (
        <div className={s.cv}>
            <div className={s.personalInformation}>
                <div className={s.careerObjective}>
                    <h1>Piotr Shumski</h1>
                    <h3>Beginner Front-end developer</h3>
                    <div className={s.career}>
                        <strong>Job titles</strong> : React/Front-end Developer<br/>
                        <strong>Workplaces</strong> : On-site · Hybrid · Remote<br/>
                        <strong>Start date</strong> : Flexible, I’m casually browsing<br/>
                        <strong>Job types</strong> : Full-time · Contract · Internship
                    </div>
                </div>
                <div className={s.contactInfo}>
                    <strong>Address:</strong> Wrocław, 10 Spiżowa Street, apt. 18<img className={s.contactIcon} src={locationPin} alt={"Location"}/><br/>
                    <strong>Phone number:</strong> +48 793-736-708<img className={s.contactIcon} src={phone} alt={"Location"}/><br/>
                    <strong>Email:</strong> petr.1k2794@gmail.com<img className={s.contactIcon} src={email} alt={"Location"}/><br/>
                </div>
            </div>
            <div className={s.education}>
                <div className={s.title}><h3>Education</h3></div>
                <div className={s.edEstablishment}>
                    <div><strong> Telecommunications Technician</strong></div>
                    <div>Belorussian Higher State College of Communication</div>
                    <div className={s.terms}>09/2010 - 06/2014</div>
                </div>
            </div>
            <div className={s.skills}>
                <div className={s.title}><h3>Skills</h3></div>
                <div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>HTML</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>CSS</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>JS</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>React</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Flex</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Grid</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Redux</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Thunk</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Java</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>OOP</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>TDD</strong></div>
                    <div className={s.skillItem + " " + s.hardSkill}><strong>Git</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Hardworking</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Initiative</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Open-minded</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Initiative</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Ability to work under pressure</strong>
                    </div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Quick learning skills</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Strong analytical thinking</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Willingness to learn</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Problem-solving skills</strong></div>
                    <div className={s.skillItem + " " + s.softSkill}><strong>Critical thinking skills</strong></div>
                </div>
            </div>
            <div className={s.languages}>
                <div className={s.title}><h3>Languages</h3></div>
                <div className={s.item}><strong>English</strong><br/>A2-B1</div>
                <div className={s.item}><strong>Polish</strong><br/>A1</div>
                <div className={s.item}><strong>Russian</strong><br/>C2</div>
            </div>
            <div className={s.itEducation}>
                <div className={s.title}><h3> Sources</h3></div>
                <div className={s.source}>
                    <div><strong> Head First HTML and CSS. A Learner's Guide to Creating Standards-Based Web Pages. 2nd
                        Edition</strong></div>
                    <div>Elisabeth Robson, Eric Freeman</div>
                </div>
                <div className={s.source}>
                    <div><strong>Thinking in Java</strong></div>
                    <div>Bruce Eckel</div>
                </div>
                <div className={s.source}>
                    <div><strong>Data Structures and Algorithms in Java</strong></div>
                    <div>Robert Lafore</div>
                </div>
                <div className={s.source}>
                    <div><strong>Clean code</strong></div>
                    <div>Robert Martin</div>
                </div>
                <div className={s.source}>
                    <div><strong><a href={"https://reactjs.org/tutorial/tutorial.html"}>React. Tutorial</a></strong>
                    </div>
                    <div><a href="https://meta.com">Copyright © 2021 Meta.</a></div>
                </div>
                <div className={s.source}>
                    <div><strong><a href={"https://youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"}>Course
                        "React JS Lessons"</a></strong></div>
                    <div><a href="https://www.linkedin.com/in/kuzyuberdin">Dmitry Kuzyuberdin</a></div>
                </div>
                <div className={s.source}>
                    <div><strong><a href={"https://learn.javascript.ru/"}> "The Modern JavaScript Tutorial"</a></strong>
                    </div>
                    <div>Ilya Kantor</div>
                </div>
            </div>

        </div>
    )
}

export default CV;