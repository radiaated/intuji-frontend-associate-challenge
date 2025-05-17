const HTML_SIDEBAR = document.querySelector("#sidebar");

const HTML_BUTTON_SIDEBAR_COLLAPSE_COLLECTION = document.querySelector(
  "#btn-sidebar-collapse"
);

// Sidebar collapse handler
function sidebarCollapseHandler(event) {
  if (HTML_SIDEBAR.classList.contains("sidebar-collapsed")) {
    HTML_SIDEBAR.style.left = "0";
    HTML_BACKDROP.style.display = "block";
  } else {
    HTML_SIDEBAR.style.left = `-${HTML_SIDEBAR.scrollWidth + 10}px`;
    HTML_BACKDROP.style.display = "none";
  }
  HTML_SIDEBAR.classList.toggle("sidebar-collapsed");
}
