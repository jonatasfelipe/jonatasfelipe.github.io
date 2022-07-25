function exibeMenu() {
    var x = document.getElementById("navbarTopo");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function selectMenu(id) {
    var home = document.getElementById("home");
    var projects = document.getElementById("projects");
    var about = document.getElementById("about");
    var experience = document.getElementById("experience");

    if (id == "home") {
        home.className = "active";
        projects.className = "disable";
        about.className = "disable";
        experience.className = "disable";
    } else if (id == "projects") {
        home.className = "disable";
        projects.className = "active";
        about.className = "disable";
        experience.className = "disable";
    } else if (id == "about") {
        home.className = "disable";
        projects.className = "disable";
        about.className = "active";
        experience.className = "disable";
    } else {
        home.className = "disable";
        projects.className = "disable";
        about.className = "disable";
        experience.className = "active";
    }

    var x = document.getElementById("navbarTopo");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
