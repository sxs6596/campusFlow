import "./styles/HomeScreen.css";
import { Link } from "react-router-dom";
import LandingBannerVid from "../assets/videos/ww.mp4";
import { GiHamburgerMenu } from "react-icons/gi";
export default function HomeScreen() {
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
        <div className="topnav" id="myTopnav">
            <Link className="active" to="#home">Home</Link>
            <Link to="/about">About</Link>
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
        <div id="container">
            <video autoPlay id="video-bg" loop muted playsInline>
                <source src={LandingBannerVid} type="video/mp4" />
            </video>
            <img alt="The University of Texas at Arlington" id="centered-logo" src='https://cdn.web.uta.edu/-/media/project/website/homepage/hero-images/logos/new-uta-centered-shadow-logo.ashx?revision=60a2fe12-3739-403f-83d9-ff6e256f8447' />
        </div>
        <main>
            <div className="card" id="welcome-section">
                <h2 className="vertical-listing-header">Welcome to Campus Flow!</h2>
                <div className="card-content">
                    <p>🎓 <strong>Embark on Your Academic Journey!</strong></p>
                    <p>Welcome to Campus Flow, your comprehensive guide to the Computer Science academic program! Whether
                        you’re a student, educator, or stakeholder, delve into a world of knowledge designed to enlighten
                        and guide you through every step of your academic journey.</p>
                </div>
            </div>
            <div className="card" id="why-section">
                <h2 className="vertical-listing-header">Why Campus Flow?</h2>
                <div className="card-content">
                    <ul>
                        <li><strong>In-depth Program Overview:</strong> Explore the essence and objectives of the Computer
                            Science program and understand the pivotal role it plays in shaping future technologists.</li>
                        <li><strong>Extensive Course Insights:</strong> Dive deep into the varied courses offered, each
                            detailed with objectives, content, and additional resources, aiding in informed decision-making.
                        </li>
                        <li><strong>Performance Measurement:</strong> Emphasize the importance of assessing knowledge and
                            skills accurately with our innovative tools and resources focused on creating relevant exams and
                            assessments.</li>
                        <li><strong>Visual Mapping:</strong> Visualize the alignment between individual courses and program
                            objectives with our unique mapping system, enhancing your understanding of the curriculum
                            structure.</li>
                    </ul>
                </div>
            </div>
            <div className="card" id="explore-section">
                <h2 className="vertical-listing-header">🌐 Explore the World of Computer Science!</h2>
                <div className="card-content">
                    <p>At University of Texas At Arlington, the Computer Science program is meticulously structured to
                        foster innovative thinking, ethical considerations, and a profound understanding of computer science
                        theory and practice. Campus Flow is here to ensure you navigate through this academic landscape with
                        ease and proficiency.</p>
                </div>
            </div>
            <div className="card" id="get-started-section">
                <h2 className="vertical-listing-header">🚀 Get Started with Campus Flow!</h2>
                <div className="card-content">
                    <p>Ready to flow through the journey of academic excellence? Start exploring now and uncover the
                        intricate layers of the Computer Science academic program. Campus Flow is your partner in this
                        enlightening journey, opening doors to a world of opportunities and learning!</p>
                </div>
            </div>
        </main>
        <footer>
            <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
            <div className="social-icons">
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                <Link to="#"><i className="fas fa-times"></i></Link>
            </div>
        </footer>
    </>
}