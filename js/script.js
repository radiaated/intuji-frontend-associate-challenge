const HTML_SIDEBAR = document.querySelector("#sidebar");
const HTML_BACKDROP = document.querySelector("#backdrop");
const HTML_BUTTON_PROFILE_DROPDOWN = document.querySelector(
  "#page-header-button-profile"
);
const HTML_HEADER_PROFILE_DROPDOWN = document.querySelector(
  "#page-header-profile-dropdown"
);

const HTML_BUTTON_SIDEBAR_COLLAPSE_NODES = document.querySelectorAll(
  ".btn-sidebar-collapse"
);

// Sidebar collapse handler
function sidebarCollapseHandler(event) {
  HTML_SIDEBAR.classList.toggle("sidebar-collapsed");
  if (HTML_SIDEBAR.classList.contains("sidebar-collapsed")) {
    // HTML_SIDEBAR.style.left = "0";
    HTML_BACKDROP.style.display = "block";
  } else {
    // HTML_SIDEBAR.style.left = `-${HTML_SIDEBAR.scrollWidth}px`;
    HTML_BACKDROP.style.display = "none";
  }
}

HTML_BUTTON_SIDEBAR_COLLAPSE_NODES.forEach((item) => {
  item.addEventListener("click", sidebarCollapseHandler);
});
HTML_BACKDROP.addEventListener("click", sidebarCollapseHandler);

window.addEventListener("resize", function (event) {
  if (document.body.clientWidth > 740) {
    HTML_SIDEBAR.style.left = "0";
    HTML_SIDEBAR.classList.remove("sidebar-collapsed");
  } else {
    HTML_SIDEBAR.style.left = `-${HTML_SIDEBAR.scrollWidth}px`;
    HTML_BACKDROP.style.display = "none";
    HTML_SIDEBAR.classList.add("sidebar-collapsed");
  }
  HTML_BACKDROP.style.display = "none";
});

const dropdownMenuHandler = (dropDownBtn, dropDownElement, collapsedClass) => {
  dropDownBtn.addEventListener("click", function () {
    dropDownElement.classList.toggle(collapsedClass);
  });

  document.addEventListener("click", (event) => {
    if (
      !dropDownElement.contains(event.target) &&
      event.target !== dropDownBtn
    ) {
      dropDownElement.classList.add(collapsedClass);
    }
  });
};

dropdownMenuHandler(
  document.querySelector("#page-header-notification-container button"),
  document.querySelector("#page-header-notification-dropdown"),
  "collapsed"
);
dropdownMenuHandler(
  document.querySelector("#btn-header-menu"),
  document.querySelector("#page-header-buttons"),
  "collapsed"
);
dropdownMenuHandler(
  document.querySelector("#btn-header-menu"),
  document.querySelector("#page-header-buttons"),
  "collapsed"
);
