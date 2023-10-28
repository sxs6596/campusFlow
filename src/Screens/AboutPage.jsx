import "./styles/AboutScreen.css";
import "./styles/HomeScreen.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import User1 from "../assets/images/Memoji-03.png"
import User2 from "../assets/images/Memoji-05.png"
import User3 from "../assets/images/Memoji-10.png"
import User4 from "../assets/images/Memoji-13.png"
import User5 from "../assets/images/Memoji-23.png"

export default function AboutPage() {
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
            console.log("responsive")
        } else {
            x.className = "topnav";
            console.log("not responsive")
        }
    }
    return <>
        <header>
            <div className="topnav" id="myTopnav">
                <Link to="/">Home</Link>
                <Link className="active" to="/about">About</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
                <Link to="/services">Services</Link>
                <Link to="https://johngreesh12.wordpress.com/">Blog </Link>
                <Link className="icon" to="" onClick={() => {
                    myFunction()
                }}>
                    <GiHamburgerMenu />
                </Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
        <main>
            <section>
                <h2 className="about-h2">About Our University</h2>
                <p>
                    The University of Texas at Arlington is a public research university located in Arlington, Texas. It is part of
                    the University of Texas System. UTA was founded in 1895 as Arlington College and became part of the UT System in
                    1965. UTA is the second largest institution in the UT System with over 45,000 students enrolled. The university is
                    classNameified as an R1 doctoral university with very high research activity. UTA offers over 180 bachelor's, master's
                    and doctoral degree programs across 10 colleges and schools.
                </p>
            </section>

            <section>
                <h2 className="about-h2">Our Vision</h2>
                <p>
                    The University of Texas at Arlington aims to be a model 21st century urban research university dedicated to
                    excellence in education, discovery, community service and commercialization of knowledge. We seek to provide
                    access and opportunity to students from diverse backgrounds, foster innovation and creative experimentation,
                    collaborate with industry and community partners, and serve the needs of the North Texas region, the state, nation
                    and world.
                </p>
            </section>

            <section>
                <h2 className="about-h2">Our History</h2>
                <p>
                    UTA was established in 1895 as Arlington College, the first municipal junior college in Texas. It became Arlington
                    State College in 1959 and joined the UT System in 1965 as Arlington State College. The school was renamed The
                    University of Texas at Arlington in 1967. UTA was initially a commuter school but began expanding rapidly in the
                    1990s and 2000s, adding on-campus housing and increasing research expenditures. Key milestones include becoming a
                    national research university in 2009 and opening the $125 million Science & Engineering Innovation & Research
                    building in 2019.
                </p>
            </section>

            <section >
                <h2 className="about-h2">Our Developers</h2>

                <div className="about-user grid">
                    <div>
                        <img src={User2} />
                        <h3>Siva Sri Harsha Suthapalli</h3>
                        <p>UTA ID : 1001906596</p>
                    </div>

                    <div>
                        <img src={User1}/>
                        <h3>Rakesh Kollavenu</h3>
                        <p>UTA ID :1002004238 </p>
                    </div>



                    <div>
                        <img src={User5} />
                        <h3>Sai Sharath Reddy Koppula</h3>
                        <p>UTA ID : 1002081785</p>
                    </div>



                    <div>
                        <img src={User3} />
                        <h3> Seshu Babu Padavala</h3>
                        <p>UTA ID : 1002153120</p>
                    </div>

                    <div>
                        <img src={User4} />
                        <h3>Hari kiran Goud Ediga</h3>
                        <p>UTA ID : 1002005439</p>
                    </div>
                </div>
            </section>

        </main>
        <footer>
            <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fas fa-times"></i></a>
            </div>
        </footer>
    </>
}