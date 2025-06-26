// for nav 
const anchorMenu = document.getElementsByClassName("link");
const menu = document.querySelector(".menu");


//============= Create Element Dynamic Render =======================

const createEl = (tag, {
    classList = [],
    text = "",
    attributes = {}
} = {}) => {

    //add class into tag through class list
    const el = document.createElement(tag);

    if (classList.length) {
        el.classList.add(...classList)
    }

    //add innerText into tag
    if (text) {
        el.innerText = text;
    }

    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }

    return el;
}



//==============List Render===============
const menuContainer = document.querySelector(".menu-container");


function menuList1() {
    const menuUl = createEl("ul", {
        classList: ["flex-ul"]
    });

    function menuLis({ anchorText, hrf }, index) {
        let menuLi = createEl("li");

        const classNames = ["anchor", "link"];

        if(index === 0){
            classNames.push("active");
        }

        let menuAnchor = createEl("a", {
            classList: classNames,
            text: anchorText,
            attributes: {
                href: hrf
            }
        });

        menuLi.appendChild(menuAnchor);    
        menuUl.appendChild(menuLi);
    }
    menuBox.forEach(menuLis);
    menuContainer.appendChild(menuUl);
}


menuList1();



//==========Open and Close Menu Logic Render====================
menu.addEventListener("click", () => {
    const openMenu = document.querySelector(".flex-ul");
    let menuCheck = openMenu.style.display;
    if (menuCheck === "block") {
        openMenu.style.display = "none";
    } else {
        openMenu.style.display = "block";
    }
});



//======menuList jumping logic Render===============
const menuList = Array.from(anchorMenu);
menuList.forEach(active => {
    active.addEventListener("click", () => {
        menuList.forEach(btn => {
            btn.style.borderBottom = "2px solid black";
            btn.style.transition = "0s";
            btn.style.color = "white";
        });

        active.style.borderBottom = "2px solid #0071ff";
        active.style.transition = "0.3s";
        active.style.color = " #0071ff";
    });

});


// ===========Skill Render============

function skillPart({ skillIcon }) {
  const progressSection = document.querySelector(".progress-section");

  const progressPart = createEl("div", {
    classList: ["progress-part", "flex-class"]
  });

  const progress = createEl("div", {
    classList: ["progress", "flex-class"]
  });

  const i1 = createEl("i", {
    classList: [skillIcon]
  });

  progress.appendChild(i1);
  progressPart.appendChild(progress);
  progressSection.appendChild(progressPart);
}

// call the function 
skillValue.forEach(skillPart);



// =========Feature Render======
function featurePart({ featureColor, featureIcon, featureLang }) {

    const featureSection = document.querySelector(".feature-container-section");

    const featurePart1 = createEl("div", {
        classList: ["feature-part"]
    });

    const feature = createEl("div", {
        classList: ["feature"]
    });

    const featureIntersted = createEl("div", {
        classList: ["feature_intersted", "flex-class", featureColor]
    });

    const i2 = createEl("i", {
        classList: [featureIcon]
    });

    const span1 = createEl("span", {
        text: featureLang
    });

    featurePart1.appendChild(feature);
    feature.appendChild(featureIntersted);
    featureIntersted.appendChild(i2);
    featureIntersted.appendChild(span1);
    featureSection.appendChild(featurePart1);
}

//call the function of featureValue
featureValue.forEach(featurePart);




//=========Project Render===============
function projectPart({ heading, src, link }) {
    const projectContainer = document.querySelector(".project-container-section");

    const project = createEl("div", {
        classList: ["project"]
    });

    const projectContent = createEl("div");
    project.appendChild(projectContent);

    const h4 = createEl("h4", {
        text: heading
    });

    const image = createEl("img", {
        attributes: {
            src: src,
            alt: heading,
            style: "width: 100%;"
        }
    });

    projectContent.appendChild(h4);
    projectContent.appendChild(image);


    const div = createEl("div");

    const projectDiv = createEl("div", {
        classList: ["project-btn", "flex-class"]
    });

    div.appendChild(projectDiv);

    const button = createEl("button");

    projectDiv.appendChild(button);

    const anchorTag = createEl("a", {
        text: "View",
        attributes: {
            href: link,
            target: "_blank"
        }
    });

    button.appendChild(anchorTag);

    project.appendChild(div);

    projectContainer.appendChild(project);
}

projectSection.forEach(projectPart);