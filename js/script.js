document.addEventListener("DOMContentLoaded", function () {
  // Variable declarations

  const htmlSidebar = document.querySelector("#sidebar");
  const htmlBackdrop = document.querySelector("#backdrop");
  const htmlSidebarCollpaseButtons = document.querySelectorAll(
    ".btn-sidebar-collapse"
  );
  const htmlDropdownButtons = document.querySelectorAll(".btn-dropdown");
  const htmlDropdownContainer = document.querySelectorAll(
    ".dropdown-container__dropdown"
  );
  const htmlHeaderMenuDropdown = document.querySelector("#page-header-buttons");
  const htmlHeaderMenuDropdownButton =
    document.querySelector("#btn-header-menu");

  // Sidebar collapse handler
  function sidebarCollapseHandler(event) {
    htmlSidebar.classList.toggle("sidebar-collapsed");
    if (htmlSidebar.classList.contains("sidebar-collapsed")) {
      htmlBackdrop.style.display = "block";
    } else {
      htmlBackdrop.style.display = "none";
    }
  }

  // Add event listeners

  htmlSidebarCollpaseButtons.forEach((item) => {
    item.addEventListener("click", sidebarCollapseHandler);
  });
  htmlBackdrop.addEventListener("click", sidebarCollapseHandler);

  window.addEventListener("resize", function (event) {
    if (document.body.clientWidth > 740) {
      htmlSidebar.style.left = "0";
      htmlSidebar.classList.remove("sidebar-collapsed");
    } else {
      htmlSidebar.style.left = `-${htmlSidebar.scrollWidth}px`;
      htmlBackdrop.style.display = "none";
      htmlSidebar.classList.add("sidebar-collapsed");
    }
    htmlBackdrop.style.display = "none";
  });

  htmlDropdownButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const targetId = button.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);

      if (targetDropdown) {
        htmlDropdownContainer.forEach((dropdown) => {
          if (dropdown.id !== targetId) {
            dropdown.classList.add("collapsed");
          }
        });

        targetDropdown.classList.toggle("collapsed");
      }
    });
  });

  document.addEventListener("click", (event) => {
    htmlDropdownContainer.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.add("collapsed");
      }
    });
  });

  // Hanlde menu drop down
  htmlHeaderMenuDropdownButton.addEventListener("click", function (event) {
    // event.stopPropagation();

    htmlHeaderMenuDropdown.classList.toggle("collapsed");
  });

  document.addEventListener("click", (event) => {
    if (!htmlHeaderMenuDropdown.contains(event.target)) {
      htmlHeaderMenuDropdown.classList.add("collapsed");
    }
  });

  // Handle analytics chart

  const ctx = document.getElementById("analysis-chart");

  new Chart(ctx, {
    type: "line",

    data: {
      labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
      datasets: [
        {
          label: "Label 1",
          data: [12, 19, 3, 5, 2, 3, 8],
          borderWidth: 1,
          fill: false,
          borderColor: "#4745a4",
          tension: 0.1,
          backgroundColor: "#4745a4",
        },
        {
          label: "Label 2",
          data: [9, 8, 5, 33, 44, 55, 99, 44],
          borderWidth: 1,
          fill: false,
          borderColor: "#f9ba33",
          tension: 0.1,
          backgroundColor: "#f9ba33",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true, // Enables round shape
            pointStyle: "circle", // Circle shape for legend items
            boxWidth: 5, // Width of the marker
            boxHeight: 5, // Height of the marker (optional, Chart.js 4+)
            padding: 5, // Optional: space between legend items
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
