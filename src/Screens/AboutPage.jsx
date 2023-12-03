import "./styles/AboutScreen.css";
import "./styles/HomeScreen.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import User1 from "../assets/images/Memoji-03.png"
import User2 from "../assets/images/Memoji-05.png"
import User3 from "../assets/images/Memoji-10.png"
import User4 from "../assets/images/Memoji-13.png"
import User5 from "../assets/images/Memoji-23.png"
import {Card, Heading, Text, Box} from '@radix-ui/themes';
import {Button} from "@radix-ui/themes";
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
                <Box>
                <Card style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>    
                <Heading color="crimson" size="6" mb="2">About Our University</Heading>
                <Text>
                    The University of Texas at Arlington is a public research university located in Arlington, Texas. It is part of
                    the University of Texas System. UTA was founded in 1895 as Arlington College and became part of the UT System in
                    1965. UTA is the second largest institution in the UT System with over 45,000 students enrolled. The university is
                    classNameified as an R1 doctoral university with very high research activity. UTA offers over 180 bachelor's, master's
                    and doctoral degree programs across 10 colleges and schools.

                </Text>
                </Card>
                </Box>
                
            </section>

            <section>
            <Box mt="3">
                <Card style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>   
                <Heading color="blue" size="6" mb="2">Our Vision</Heading>
                <Text>
                    The University of Texas at Arlington aims to be a model 21st century urban research university dedicated to
                    excellence in education, discovery, community service and commercialization of knowledge. We seek to provide
                    access and opportunity to students from diverse backgrounds, foster innovation and creative experimentation,
                    collaborate with industry and community partners, and serve the needs of the North Texas region, the state, nation
                    and world.
                </Text>
                </Card>
                </Box>
            </section>

            <section>
            <Box mt="3">
                <Card style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>   
                <Heading color="green" size="6" mb="2">Our History</Heading>
                <Text>
                    UTA was established in 1895 as Arlington College, the first municipal junior college in Texas. It became Arlington
                    State College in 1959 and joined the UT System in 1965 as Arlington State College. The school was renamed The
                    University of Texas at Arlington in 1967. UTA was initially a commuter school but began expanding rapidly in the
                    1990s and 2000s, adding on-campus housing and increasing research expenditures. Key milestones include becoming a
                    national research university in 2009 and opening the $125 million Science & Engineering Innovation & Research
                    building in 2019.
                </Text>
                </Card>
                </Box>
            </section>

            <section >
            <Box mt="3">
                <Card style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>   
                <Heading color="indigo" size="6" mb="2">Our Developers</Heading>

                <div className="about-user grid">
                    <div>
                        <img src={User2} />
                        <Heading highContrast color ="indigo" size="4">Siva Sri Harsha Suthapalli</Heading>
                        <Text highContrast color="indigo">UTA ID : 1001906596</Text>
                    </div>

                    <div>
                        <img src={User1}/>
                        <Heading highContrast color ="indigo" size="4">Rakesh Kollavenu</Heading>
                        <Text highContrast color="indigo">UTA ID :1002004238 </Text>
                    </div>



                    <div>
                        <img src={User5} />
                        <Heading highContrast color ="indigo" size="4">Sai Sharath Reddy Koppula</Heading>
                        <Text highContrast color="indigo">UTA ID : 1002081785</Text>
                    </div>



                    <div>
                        <img src={User3} />
                        <Heading highContrast color ="indigo" size="4">Seshu Babu Padavala</Heading>
                        <Text highContrast color="indigo">UTA ID : 1002153120</Text>
                    </div>

                    <div>
                        <img src={User4} />
                        <Heading highContrast color ="indigo" size="4">Hari kiran Goud Ediga</Heading>
                        <Text highContrast color="indigo">UTA ID : 1002005439</Text>
                    </div>
                </div>
                </Card>
            </Box>
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