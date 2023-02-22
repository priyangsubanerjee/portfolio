const routes = [
  {
    path: "/",
    title: "Home",
    match: "/",
  },
  {
    path: "/about",
    title: "About",
    match: "/about",
  },
  {
    path: "/articles",
    title: "Articles",
    match: "/articles/*",
  },
  {
    path: "/projects",
    title: "Projects",
    match: "/projects/*",
  },
  {
    path: "/bookmarks",
    title: "Bookmarks",
    match: "/uses",
  },
];

export default routes;
