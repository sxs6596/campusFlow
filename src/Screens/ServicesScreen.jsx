import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import AcademicManagement from "../assets/images/academics-management.png"
import Analytics from "../assets/images/analytic.png"
import "./styles/Service.css"
export default function ServicesScreen(){
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
                <Link to="/about">About</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
                <Link to="/services" className="active">Services</Link>
                <Link to="https://johngreesh12.wordpress.com/">Blog </Link>
                <Link to="/contact   ">Contact</Link>
                <Link to="#" class="icon" onClick={()=>{
                    myFunction()
                }}>
                    <GiHamburgerMenu />
                </Link>
            </div>
        </header>
        <main>
            <section>
                <h1 className="service-h1">Overview</h1>
                <p>Our platform offers a range of services to support academic programs, including academic program
                    information, course management, assessment services, user account management, reporting and analytics,
                    and feedback and communication mechanisms.</p>
            </section>
            <section>
                <h1 className="service-h1">Detailed Services</h1>
                <p>Our platform offers a range of services to support academic programs, including academic program </p>
                <br />
                <div class="services-container">
                    <div class="service">
                        <h2 className="service-h1">Academic Program Information</h2>
                        <p>We provide detailed information about our academic programs, including their objectives and
                            learning outcomes.</p>
                        <img className="service-img" src={AcademicManagement} alt="Academic Program Information" />
                    </div>
                    <div class="service">
                        <h2 className="service-h1">Course Management</h2>
                        <p>Our platform offers a comprehensive course management system, allowing instructors to manage
                            course content, assignments, and assessments.</p>
                    </div>
                    <div class="service">
                        <h2 className="service-h1">Assessment Services</h2>
                        <p>We offer a range of assessment services, including quizzes, exams, and assignments, all aligned
                            with course and program objectives.</p>
                    </div>
                    <div class="service">
                        <h2 className="service-h1">User Account Management</h2>
                        <p>Our platform supports multiple user roles, including students, instructors, and administrators,
                            each with their own capabilities and permissions.</p>
                    </div>
                    <div class="service">
                        <h2 className="service-h1">Reporting and Analytics</h2>
                        <p>We provide detailed reporting and analytics, allowing instructors and administrators to track
                            student progress and identify areas for improvement.</p>
                        <img className="service-img" src={Analytics} alt="Reporting and Analytics" />
                    </div>
                    <div class="service">
                        <h2 className="service-h1">Feedback and Communication</h2>
                        <p>Our platform offers a range of communication and feedback mechanisms, including discussion
                            forums, messaging, and feedback forms.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="service-h1">User Roles</h1>
                <p>We support multiple user roles, including students, instructors, and administrators, each with their own
                    capabilities and permissions.</p>
            </section>
            <section>
                <h1 className="service-h1">Accessibility and Responsiveness</h1>
                <p>We are committed to making our platform accessible and responsive to all users, regardless of their
                    abilities or devices.</p>
            </section>
            <section>
                <h1 className="service-h1">Contact and Support</h1>
                <p>If you need help or have any questions, please contact our support team at support@ourplatform.com or
                    visit our help center at help.ourplatform.com.</p>
            </section>
            <section>
                <h1 className="service-h1">Call to Action</h1>
                <p>Sign up or log in to our platform today to start exploring our services and supporting your academic
                    goals.</p>
                <div class="dbl">
                    <button className="button" style={{ width: '49%', backgroundColor: "#2196F3"}}>Sign Up</button>
                    <button className="button" style={{width:'49%',backgroundColor: "#2196F3"}}>Log In</button>
                </div>
            </section>
            <section>
                <h1 className="service-h1">Testimonials and Reviews</h1>
                <div class="testimonials-container">
                    <blockquote class="testimonial">
                        <p>"Our platform has been a game-changer for our academic programs. The course management system is
                            intuitive and easy to use, and the assessment services have helped us align our assessments with
                            our learning objectives."</p>
                        <p class="author">- Jane Smith, Professor</p>
                    </blockquote>
                    <blockquote class="testimonial">
                        <p>"The reporting and analytics features have been invaluable for tracking student progress and
                            identifying areas for improvement. We highly recommend this platform to any academic
                            institution."</p>
                        <p class="author">- John Doe, Administrator</p>
                    </blockquote>
                </div>
            </section>
        </main>
        <footer style={{
            backgroundColor: '#2196F3'}}>
            <p>© 2023 Campus Flow. All Rights Reserved. | Designed by Group 13</p>
            <div class="social-icons">
                <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                <Link to="#"><i class="fab fa-instagram"></i></Link>
                <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                <Link to="#"><i class="fas fa-times"></i></Link>
            </div>
        </footer>
    </>
}