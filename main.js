 var dashboard = document.querySelector("#dashboard");
 var dashboardTab = document.querySelector("#dashboardTab");
 var transactions = document.querySelector("#transactions");
 var transactionsTab = document.querySelector("#transactionsTab");

 dashboardTab.addEventListener("click", openDashboardView);
 transactionsTab.addEventListener("click", openTransactionsView);
 
if (typeof(Storage) !== "undefined") {
    if (sessionStorage.getItem("hideBanner")) {
        clearBanner();
    }
}

function clearBanner() {
    var banner = document.querySelector("#banner");
    banner.classList.add("hidden");
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("hideBanner", "true");
    }
}

function openDashboardView() {
    // select .selected tab, clear class
    document.querySelector("li.selectedTab").classList.remove("selectedTab");
    // select unhidden tabs, add hidden class
    document.querySelector("main:not(.hidden)").classList.add("hidden");
    // unhide dashboard tab
    dashboard.classList.remove("hidden");
    dashboardTab.classList.add("selectedTab");
}

function openTransactionsView() {
    // select .selected tab, clear class
    document.querySelector("li.selectedTab").classList.remove("selectedTab");
    // select unhidden tabs, add hidden class
    document.querySelector("main:not(.hidden)").classList.add("hidden");
    // unhide dashboard tab
    transactions.classList.remove("hidden");
    transactionsTab.classList.add("selectedTab");
}