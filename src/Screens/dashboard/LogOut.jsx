export default function LogOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('userData')
    window.location.href = "/"
    return <>
    </>
}