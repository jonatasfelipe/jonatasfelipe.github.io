function typeWriter(elemento) {
    setInterval(() => {
        const textoArray = elemento.innerHTML.split("");
        elemento.innerHTML = "";
        textoArray.forEach((letra, i) => {
            setTimeout(() => (elemento.innerHTML += letra), 150 * i);
        });
    }, 8000);
}

const projects = document.querySelector("#myProjects");
const about = document.querySelector("#aboutMe");
const experience = document.querySelector("#myExperience");
const formation = document.querySelector("#myFormation");
const courses = document.querySelector("#myCourses");

typeWriter(projects);
typeWriter(about);
typeWriter(experience);
typeWriter(formation);
typeWriter(courses);
