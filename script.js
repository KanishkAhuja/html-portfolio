document.addEventListener("DOMContentLoaded", function() {
    const projectGallery = document.querySelector(".project-gallery");
    const socialIcons = document.querySelectorAll(".social-icon");
    const timelineContents = document.querySelectorAll(".timeline-content");
    const popUpButton= document.getElementById("open");
    const popUp=document.getElementById("popup-content");
    const closePopUp=document.getElementById("close");

    const projects = [
        { 
            title: "Project-1",
            image: "project1.png",
            description: "Association Membership Form"
        },
        { 
            title: "Project-2",
            image: "project2.png",
            description: "Athlete Registration Form"
        },
        { 
            title: "Project-3",
            image: "project3.png",
            description: "CGPA Calculator"
        }
    ];

    projects.forEach(project=> {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card", "fly-in"); 

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.title;
        image.className = "project-image"

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        projectCard.appendChild(image);
        projectCard.appendChild(title);
        projectCard.appendChild(description);

        projectGallery.appendChild(projectCard);
    });

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        );
    }
    
    function handleScroll() {
        const flyInElements = document.querySelectorAll(".fly-in");
        flyInElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add("show"); 
            }
            else {
                element.classList.remove("show"); 
            }
        });
        const enlargeElements = document.querySelectorAll(".enlarge");
        //const temp=document.getElementById("message");
        //if (isInViewport(temp)) {
        //    temp.classList.add("large"); 
        //}
        //else {
         //   temp.classList.remove("large"); 
        //}
        enlargeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add("large"); 
            }
            else {
                element.classList.remove("large"); 
            }
        });

    }
    
    window.addEventListener("scroll", handleScroll);

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Please fill out all fields.");
        }
    });
    
    popUpButton.addEventListener("click",function(event){
        event.preventDefault();
        popUpButton.style.visibility = "hidden";
        popUp.style.visibility ="visible";
    })
    closePopUp.addEventListener("click",function(event){
        event.preventDefault();
        popUpButton.style.visibility = "visible";
        popUp.style.visibility ="hidden";
    })
});
