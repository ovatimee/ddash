export const homeMenu = {
  intro: {
    id: "intro",
    text: "Intro",
    path: "#intro",
    icon: "Vrpano",
    subMenu: null,
  },
  bootstrap: {
    id: "bootstrap",
    text: "Bootstrap Components",
    path: "#bootstrap",
    icon: "BootstrapFill",
    subMenu: null,
  },
  storybook: {
    id: "storybook",
    text: "Storybook",
    path: "#storybook",
    icon: "CustomStorybook",
    subMenu: null,
  },
  formik: {
    id: "formik",
    text: "Formik",
    path: "#formik",
    icon: "CheckBox",
    subMenu: null,
  },
  apex: {
    id: "apex",
    text: "Apex Charts",
    path: "#apex",
    icon: "AreaChart",
    subMenu: null,
  },
};
export const dashboardMenu = {
  dashboard: {
    id: "dashboard",
    text: "Dashboard",
    path: "/",
    icon: "dashboard",
    subMenu: null,
  },
};
export const demoPages = {
  auth: {
    id: "auth",
    text: "Auth Pages",
    icon: "menu",
  },
  login: {
    id: "login",
    text: "Login",
    path: "auth-pages/login",
    icon: "login",
  },
  signUp: {
    id: "signUp",
    text: "person_add",
    path: "auth-pages/sign-up",
    icon: "person_add",
  },
  page404: {
    id: "Page404",
    text: "404 Page",
    path: "auth-pages/404",
    icon: "report",
  },
};
export const layoutMenu = {
  layoutTypes: {
    id: "layoutTypes",
    text: "Page Layout Types",
  },
  blank: {
    id: "blank",
    text: "Blank",
    path: "page-layouts/blank",
    icon: "check_box_outline_blank ",
  },
  pageLayout: {
    id: "pageLayout",
    text: "Page Layout",
    path: "page-layouts",
    icon: "backup",
    subMenu: {
      headerAndSubheader: {
        id: "headerAndSubheader",
        text: "Header & Subheader",
        path: "page-layouts/header-and-subheader",
        icon: "view_agenda",
      },
      onlyHeader: {
        id: "onlyHeader",
        text: "Only Header",
        path: "page-layouts/only-header",
        icon: "ViewStream",
      },
      onlySubheader: {
        id: "onlySubheader",
        text: "Only Subheader",
        path: "page-layouts/only-subheader",
        icon: "ViewStream",
      },
      onlyContent: {
        id: "onlyContent",
        text: "Only Content",
        path: "page-layouts/only-content",
        icon: "WebAsset",
      },
    },
  },
  asideTypes: {
    id: "asideTypes",
    text: "Aside Types",
    path: "aside-types",
    icon: "vertical_split",
    subMenu: {
      defaultAside: {
        id: "defaultAside",
        text: "Default Aside",
        path: "aside-types/default-aside",
        icon: "view_quilt",
      },
      minimizeAside: {
        id: "minimizeAside",
        text: "Minimize Aside",
        path: "aside-types/minimize-aside",
        icon: "view_compact",
      },
    },
  },
};
export const productsMenu = {
  companyA: {
    id: "companyA",
    text: "Company A",
    path: "grid-pages/products",
    subMenu: null,
  },
  companyB: { id: "companyB", text: "Company B", path: "/", subMenu: null },
  companyC: { id: "companyC", text: "Company C", path: "/", subMenu: null },
  companyD: { id: "companyD", text: "Company D", path: "/", subMenu: null },
};
