import { ImHome } from "react-icons/im";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { IoMdChatboxes } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa"; // Importing the feedback icon
export default [
    {
        id: "home",
        title: "Home",
        path: "/dashboard",
        icon: ImHome,
    },

    {
        id: "students",
        title: "Students",
        path: "/dashboard/students",
        icon: PiStudentBold,
    },
    {
        id: "create-course",
        title: "Update Course",
        path: "/dashboard/update-course",
        icon: PiStudentBold,
    },
    {
        id: "enquiries-chat",
        title: "Enquiries",
        path: "/dashboard/enquiries",
        icon: IoMdChatboxes
    },
    {
        id: "faculty",
        title: "Faculty Chat",
        path: "/dashboard/faculty",
        icon: IoMdChatboxes
    },
    {
        id: "admin-chat",
        title: "Admin Chat",
        path: "/dashboard/message/admin",
        icon: IoMdChatboxes
    },
    {
        id: "feedback",
        title: "Feedback",
        path: "/dashboard/feedback",
        icon: FaCommentDots,
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