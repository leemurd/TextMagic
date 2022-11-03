import AutomationsIcon from "@/components/icons/AutomationsIcon.vue";
import CampaignsIcon from "@/components/icons/CampaignsIcon.vue";
import DealsIcon from "@/components/icons/DealsIcon.vue";
import FilesIcon from "@/components/icons/FilesIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import MessengerIcon from "@/components/icons/MessengerIcon.vue";
import ReportsIcon from "@/components/icons/ReportsIcon.vue";
import TasksIcon from "@/components/icons/TasksIcon.vue";
import TicketsIcon from "@/components/icons/TicketsIcon.vue";
import ContactsIcon from "@/components/icons/ContactsIcon.vue";

export default [
  {
    label: "Home",
    icon: HomeIcon,
    isActive: false,
  },
  {
    label: "Messenger",
    icon: MessengerIcon,
    isActive: false,
    missed: 5
  },
  {
    label: "Tickets",
    icon: TicketsIcon,
    isActive: false,
  },
  {
    label: "Campaigns",
    icon: CampaignsIcon,
    isActive: false,
  },
  {
    label: "Contacts",
    icon: ContactsIcon,
    isActive: true,
  },
  {
    label: "Tasks",
    icon: TasksIcon,
    isActive: false,
  },
  {
    label: "Deals",
    icon: DealsIcon,
    isActive: false,
  },
  {
    label: "Files",
    icon: FilesIcon,
    isActive: false,
  },
  {
    label: "Automations",
    icon: AutomationsIcon,
    isActive: false,
  },
  {
    label: "Reports",
    icon: ReportsIcon,
    isActive: false,
  },
]
