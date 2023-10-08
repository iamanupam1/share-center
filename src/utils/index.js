import { MEROLAGANI_LATEST_STOCK_URL } from "../../config";

export const URL_MAPPER = {
  MEROLAGANI_URL: MEROLAGANI_LATEST_STOCK_URL,
};

export const CORE_SIDE_NAV = [
  { name: "Dashboard", url: "/core", icon: "ClipboardDocumentIcon" },
  { name: "My Stocks", url: "/core/stocks", icon: "RectangleStackIcon" },
  {
    name: "Manage Notifier",
    url: "/core/manage",
    icon: "AdjustmentsHorizontalIcon",
  },
  { name: "Profile", url: "/core/user/profile", icon: "UserIcon" },
];
