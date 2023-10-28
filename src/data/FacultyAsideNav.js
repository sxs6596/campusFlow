import { ImHome } from "react-icons/im";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudentBold, PiExamFill } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { IoMdChatboxes } from "react-icons/io";
export default [
    {
        id: "home",
        title: "Home",
        path: "/dashboard",
        icon: ImHome,
    },
    {
        id: "manage-course",
        title: "Manage Course",
        path: "/dashboard/manage-course",
        icon: BsFillJournalBookmarkFill,
    },
    {
        id: "exam",
        title: "Manage Exam",
        path: "/dashboard/exam",
        icon: PiExamFill,
    },
    {
        id:"students",
        title:"Students",
        path:"/dashboard/students",
        icon:PiStudentBold,
    },
    {
        id: "create-course",
        title: "Create Course",
        path: "/dashboard/create-course",
        icon: PiStudentBold,
    },
    {
        id: "create-exam",
        title: "Create Exam",
        path: "/dashboard/create-exam",
        icon: PiStudentBold,
    },
    {
        id: "admin-chat",
        title: "Admin Chat",
        path: "/dashboard/message/admin",
        icon: IoMdChatboxes
    },
    {
        id:"cord-chat",
        title:"Cord Chat",
        path:"/dashboard/message/cord",
        icon: IoMdChatboxes
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
    }

]