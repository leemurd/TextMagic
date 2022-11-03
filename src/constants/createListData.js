import MessageIcon from "@/components/icons/MessageIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import CallIcon from "@/components/icons/CallIcon.vue";
import CampaignsIcon from "@/components/icons/CampaignsIcon.vue";
import TasksIcon from "@/components/icons/TasksIcon.vue";
import DealsIcon from "@/components/icons/DealsIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import OrganizationIcon from "@/components/icons/OrganizationIcon.vue";
import ContactsIcon from "@/components/icons/ContactsIcon.vue";
import SegmentIcon from "@/components/icons/SegmentIcon.vue";

export default [
  [
    {label: "Text message", icon: MessageIcon},
    {label: "Email", icon: MailIcon},
    {label: "Call", icon: CallIcon},
  ],
  [
    {label: "Campaign", icon: CampaignsIcon},
    {label: "Task", icon: TasksIcon},
    {label: "Deal", icon: DealsIcon},
  ],
  [
    {label: "Contact", icon: UserIcon},
    {label: "Organization", icon: OrganizationIcon},
    {label: "List", icon: ContactsIcon},
    {label: "Segment", icon: SegmentIcon},
  ],
]
