import { ImHome } from "react-icons/im";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { BsChatSquareTextFill } from "react-icons/bs";
export default [
    {
        id:"home",
        title:"Home",
        path:"/dashboard",
        icon:ImHome,
    },
    {
        id: "students",
        title: "Students",
        path: "/dashboard/students",
        icon: PiStudentBold,
    },
    {
        id: "manage-course",
        title: "Manage Course",
        path: "/dashboard/manage-course",
        icon: BsFillJournalBookmarkFill,
    },
    {
        id:"faculty-message",
        title:"Faculty Message",
        path:"/dashboard/message/faculty",
        icon:BsChatSquareTextFill
    },
    {
        id:"Policies",
        title:"Policies",
        path:"/dashboard/policies",
        icon:BsChatSquareTextFill
    },
    {
        id:"CourseReview", 
        title:"Course Review",
        path:"/dashboard/course-review",
        icon: BsFillJournalBookmarkFill
    },
    {
        id: "admin-message",
        title: "Admin Message",
        path: "/dashboard/message/admin",
        icon: BsChatSquareTextFill
    },
    {
        id:"settings",
        title:"Settings",
        path:"/dashboard/settings",
        icon:HiOutlineCog,
    },
    {
        id:"logout",
        title:"Logout",
        path:"/dashboard/logout",
        icon:BiLogOutCircle,
    }
]