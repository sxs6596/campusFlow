import "./styles/Account.css"
export default function Accounts() {
    const first_name = localStorage.getItem("first_name");
    const email = localStorage.getItem("email");
    
    // let fullname = localStorage.getItem("loggedinusername");
    // userData = JSON.parse(userData)
    return <>
        <div>
            <h1>Account</h1>
        </div>
        <div class="user-profile-dashboard row">
            {/* <div class="user-profile-img">
                <img src={userData.image} alt="" />
            </div> */}
            <div class="user-profile-info col">
                <div>
                    <h3>{first_name}</h3>
                    {/* <p>{userData.roll ? userData.roll : ''}</p> */}
                    {/* <p>{userData.address ? userData.address : ''}</p> */}
                    <p><a href={"mailto:" + email}>{email}</a></p>
                </div>
            </div>
        </div>
    </>
}