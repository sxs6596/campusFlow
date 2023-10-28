import { ImHome } from "react-icons/im";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiChatAlt2, HiOutlineCog } from "react-icons/hi";
import { PiExamFill } from "react-icons/pi";
import { FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
export default [
    {
        id: "home",
        title: "Home",
        path: "/dashboard",
        icon: ImHome,
    },
    {
        id: "courses",
        title: "Courses",
        path: "/dashboard/courses",
        icon: BsFillJournalBookmarkFill,
    },
    {
        id: "faculty",
        title: "Faculty",
        path: "/dashboard/faculty",
        icon: FaChalkboardTeacher,
    },
    {
        id: "discussion",
        title: "Discussion",
        path: "/dashboard/discussion",
        icon: HiChatAlt2,
    },
    {
        id: "exam",
        title: "Exam",
        path: "/dashboard/exam",
        icon: PiExamFill,
    },
    {
        id: "complain",
        title: "Complain",
        path: "/dashboard/complain",
        icon: FaHandsHelping,
    },
    {
        id: "settings",
        title: "Settings",
        path: "/dashboard/settings",
        icon: HiOutlineCog,
    },
    {
        id: "logout",
        title: "Logout",
        path: "/dashboard/logout",
        icon: BiLogOutCircle,
    },
]