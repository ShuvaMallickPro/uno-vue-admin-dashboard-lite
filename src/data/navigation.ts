export const miniSidebarNavigation = [
  {
    id: 1,
    label: "Course",
    route: "/course",
    icon: "material-symbols:cast-for-education-outline",
  },
  {
    id: 2,
    label: "Analytics",
    route: "/analytics",
    icon: "material-symbols:analytics-outline",
    isPro: true,
  },
  {
    id: 3,
    label: "Finance",
    route: "/finance",
    icon: "material-symbols:money-bag-outline-rounded",
    isPro: true,
  },
  {
    id: 4,
    label: "Career",
    route: "/career",
    icon: "material-symbols:work-history-outline-rounded",
    isPro: true,
  },
  {
    id: 5,
    label: "Sales",
    route: "/sales",
    icon: "fluent:arrow-growth-24-filled",
    isPro: true,
  },
  {
    id: 6,
    label: "Users",
    route: "/users",
    icon: "cuida:users-outline",
    children: [
      { label: "List", route: "/users" },
      { label: "Edit", route: "/users/3", isPro: true },
      { label: "Create", route: "/users/create", isPro: true },
      { label: "Profile", route: "/users/profile" },
    ],
  },
  {
    id: 7,
    label: "Products",
    route: "/products",
    icon: "cuida:box-outline",
    isPro: true,
    children: [
      { label: "List", route: "/products", isPro: true },
      { label: "Edit", route: "/products/1", isPro: true },
      { label: "Create", route: "/products/create", isPro: true },
      { label: "Details", route: "/products/1/overview", isPro: true },
    ],
  },
  {
    id: 8,
    label: "Orders",
    route: "/orders",
    icon: "solar:cart-4-outline",
    isPro: true,
    children: [
      { label: "List", route: "/orders", isPro: true },
      { label: "Details", route: "/orders/1", isPro: true },
    ],
  },
  {
    id: 9,
    label: "Invoices",
    route: "/invoices",
    icon: "nimbus:invoice",
    isPro: true,
    children: [
      { label: "List", route: "/invoices", isPro: true },
      { label: "Edit", route: "/invoices/INV-0012", isPro: true },
      { label: "Create", route: "/invoices/create", isPro: true },
      { label: "Details", route: "/invoices/INV-0012/details", isPro: true },
    ],
  },
  {
    id: 10,
    label: "Invoices",
    route: "/invoices",
    icon: "nimbus:invoice",
    isPro: true,
    children: [
      { label: "List", route: "/invoices", isPro: true },
      { label: "Edit", route: "/invoices/INV-0012", isPro: true },
      { label: "Create", route: "/invoices/create", isPro: true },
      { label: "Details", route: "/invoices/INV-0012/details", isPro: true },
    ],
  },
  {
    id: 10,
    label: "App",
    route: "/kanban",
    icon: "nimbus:invoice",
    isPro: true,
    children: [{ label: "Kanban", route: "/kanban", isPro: true }],
  },
  {
    id: 11,
    label: "Account Settings",
    route: "/settings",
    icon: "mdi:account-cog-outline",
    isPro: true,
    children: [
      { label: "Profile Info", route: "/settings", isPro: true },
      { label: "Security", route: "/settings/security", isPro: true },
      { label: "Plan & Billing", route: "/settings/plan-billing", isPro: true },
      {
        label: "Two Factor Authentication",
        route: "/settings/two-factor-authentication",
        isPro: true,
      },
      { label: "Notification", route: "/settings/notification", isPro: true },
      {
        label: "Social Media Links",
        route: "/settings/social-media-links",
        isPro: true,
      },
      {
        label: "Account Deactivation",
        route: "/settings/account-deactivation",
        isPro: true,
      },
    ],
  },
  {
    id: 12,
    label: "Authentication",
    route: "/sessions",
    icon: "material-symbols:fingerprint",
    children: [
      { label: "Login", route: "/login" },
      { label: "Register", route: "/register" },
      { label: "Forget Password", route: "/forget-password" },
      { label: "Verify Email", route: "/verification" },
      { label: "Not Found", route: "/avscsf" },
      { label: "Server Error", route: "/server-error" },
      { label: "Maintenance", route: "/maintenance" },
    ],
  },
  {
    id: 13,
    label: "Support",
    route: "/support",
    icon: "ri:headphone-line",
    isPro: true,
    children: [
      { label: "Overview", route: "/support", isPro: true },
      { label: "Tickets", route: "/support/tickets", isPro: true },
      { label: "Create Ticket", route: "/support/create-ticket", isPro: true },
      { label: "FAQs", route: "/support/faqs", isPro: true },
      { label: "Contact", route: "/support/contact", isPro: true },
    ],
  },
];

export const navigation = [
  {
    id: 1,
    menu: [
      {
        route: "/course",
        icon: "cuida:dashboard-outline",
        label: "Dashboard",
        children: [
          { label: "Analytics", route: "/analytics", isPro: true },
          { label: "Finance", route: "/finance", isPro: true },
          { label: "Career", route: "/career", isPro: true },
          { label: "Course", route: "/course" },
          { label: "Sales", route: "/sales", isPro: true },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Management",
    menu: [
      {
        label: "Users",
        route: "/users",
        icon: "cuida:users-outline",
        children: [
          { label: "List", route: "/users" },
          { label: "Edit", route: "/users/3", isPro: true },
          {
            label: "Create",
            route: "/users/create",
            isPro: true,
          },
          {
            label: "Profile",
            route: "/users/profile",
          },
        ],
      },
      {
        label: "Products",
        route: "/products",
        icon: "cuida:box-outline",
        isPro: true,
        children: [
          { label: "List", route: "/products", isPro: true },
          {
            label: "Edit",
            route: "/products/1",
            isPro: true,
          },
          {
            label: "Create",
            route: "/products/create",
            isPro: true,
          },
          {
            label: "Details",
            route: "/products/1/overview",
            isPro: true,
          },
        ],
      },
      {
        label: "Orders",
        route: "/orders",
        icon: "solar:cart-4-outline",
        isPro: true,
        children: [
          { label: "List", route: "/orders", isPro: true },
          { label: "Details", route: "/orders/1", isPro: true },
        ],
      },
      {
        label: "Invoices",
        route: "/invoices",
        icon: "nimbus:invoice",
        isPro: true,
        children: [
          { label: "List", route: "/invoices", isPro: true },
          {
            label: "Edit",
            route: "/invoices/INV-0012",
            isPro: true,
          },
          {
            label: "Create",
            route: "/invoices/create",
            isPro: true,
          },
          {
            label: "Details",
            route: "/invoices/INV-0012/details",
            isPro: true,
          },
        ],
      },
      {
        label: "App",
        route: "/kanban",
        icon: "tdesign:app",
        isPro: true,
        children: [
          { label: "Kanban", route: "/kanban", isPro: true },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Others",
    menu: [
      {
        label: "Account Settings",
        route: "/settings",
        icon: "mdi:account-cog-outline",
        isPro: true,
        children: [
          {
            label: "Profile Info",
            route: "/settings",
            isPro: true,
          },
          {
            label: "Security",
            route: "/settings/security",
            isPro: true,
          },
          {
            label: "Plan & Billing",
            route: "/settings/plan-billing",
            isPro: true,
          },
          {
            label: "Two Factor Authentication",
            route: "/settings/two-factor-authentication",
            isPro: true,
          },
          {
            label: "Notification",
            route: "/settings/notification",
            isPro: true,
          },
          {
            label: "Social Media Links",
            route: "/settings/social-media-links",
            isPro: true,
          },
          {
            label: "Account Deactivation",
            route: "/settings/account-deactivation",
            isPro: true,
          },
        ],
      },
      {
        label: "Authentication",
        route: "/sessions",
        icon: "material-symbols:fingerprint",
        children: [
          { label: "Login", route: "/login" },
          {
            label: "Register",
            route: "/register",
          },
          {
            label: "Forget Password",
            route: "/forget-password",
          },
          {
            label: "Verify Email",
            route: "/verification",
          },
          {
            label: "Not Found",
            route: "/avscsf",
          },
          {
            label: "Server Error",
            route: "/server-error",
          },
          {
            label: "Maintenance",
            route: "/maintenance",
          },
        ],
      },
      {
        label: "Support",
        route: "/support",
        icon: "ri:headphone-line",
        isPro: true,
        children: [
          { label: "Overview", route: "/support", isPro: true },
          {
            label: "Tickets",
            route: "/support/tickets",
            isPro: true,
          },
          {
            label: "Create Ticket",
            route: "/support/create-ticket",
            isPro: true,
          },
          { label: "FAQs", route: "/support/faqs", isPro: true },
          {
            label: "Contact",
            route: "/support/contact",
            isPro: true,
          },
        ],
      },
    ],
  },
];
