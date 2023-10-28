import { ImHome } from "react-icons/im";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { IoMdChatboxes } from "react-icons/io";
import { FaTools } from "react-icons/fa"; // Importing the FaTools icon
export default [
    {
        id: "home",
        title: "Home",
        path: "/dashboard",
        icon: ImHome,
    },
    {
        id: "manage-students",
        title: "Manage Students",
        path: "/dashboard/manage-students",
        icon: PiStudentBold,
    },
    {
        id: "manage-faculty",
        title: "Manage Faculty",
        path: "/dashboard/manage-faculty",
        icon: PiStudentBold,
    },
    {
        id: "manage-cord",
        title: "Manage Cord",
        path: "/dashboard/manage-cord",
        icon: IoMdChatboxes
    },
    {
        id: "manage-quality-admin",
        title: "Manage Quality Admin",
        path: "/dashboard/manage-quality-admin",
        icon: IoMdChatboxes
    },
    {
        id: "settings",
        title: "Settings",
        path: "/dashboard/settings",
        icon: HiOutlineCog,
    },
    {
        id: "troubleshoot",
        title: "Troubleshoot",
        path: "/dashboard/troubleshoot",
        icon: FaTools, // Using the FaTools icon for the Troubleshoot route
    },
    {
        id: "logout",
        title: "Logout",
        path: "/dashboard/logout",
        icon: BiLogOutCircle,
    }

]