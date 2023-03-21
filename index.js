//Initialice app
function initialiceApp() {
  //Fetch the data on load
  window.addEventListener("load", async function () {
    const data = await fetch("./data.json");
    const result = await data.json();
    console.log(result);
    //Create all the components
    createComponent(result);
    //Add clearbutton functionality
    clearButton();
    //Event listeners when adding or removing tags
    addOrRemoveElementsFilterUpdate();
  });
}

initialiceApp();

//Create component
function createComponent(result) {
  result.map((item) => {
    const main = document.querySelector("main");
    const article = document.createElement("article");
    article.classList.add("box");
    main.appendChild(article);
    const featuresWrapper = document.createElement("div");
    featuresWrapper.classList.add("features-wrapper");
    article.appendChild(featuresWrapper);
    const company = document.createElement("h1");
    company.innerText = item.company;
    company.classList.add("company");
    featuresWrapper.appendChild(company);
    if (item.new) {
      const newTag = document.createElement("div");
      newTag.classList.add("new-tag");
      const newTagP = document.createElement("p");
      newTagP.innerText = "NEW!";
      newTag.appendChild(newTagP);
      featuresWrapper.appendChild(newTag);
    }
    if (item.featured) {
      const featuredTag = document.createElement("div");
      featuredTag.classList.add("featured-tag");
      const featuredTagP = document.createElement("p");
      featuredTagP.innerText = "FEATURED";
      featuredTag.appendChild(featuredTagP);
      featuresWrapper.appendChild(featuredTag);
    }
    const position = document.createElement("h2");
    position.innerText = item.position;
    position.classList.add("position");
    article.appendChild(position);
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("info-wrapper");
    article.appendChild(infoWrapper);
    const posted = document.createElement("p");
    posted.innerText = item.postedAt;
    infoWrapper.appendChild(posted);
    const dot1 = document.createElement("p");
    dot1.innerText = "•";
    infoWrapper.appendChild(dot1);
    const contract = document.createElement("p");
    contract.innerText = item.contract;
    infoWrapper.appendChild(contract);
    const dot2 = document.createElement("p");
    dot2.innerText = "•";
    infoWrapper.appendChild(dot2);
    const location = document.createElement("p");
    location.innerText = item.location;
    infoWrapper.appendChild(location);
    const line = document.createElement("hr");
    article.appendChild(line);
    const languagesWrapper = document.createElement("div");
    languagesWrapper.classList.add("languages-wrapper");
    article.appendChild(languagesWrapper);
    const role = document.createElement("div");
    role.classList.add("language-tag");
    role.innerText = item.role;
    languagesWrapper.appendChild(role);
    const level = document.createElement("div");
    level.classList.add("language-tag");
    level.innerText = item.level;
    languagesWrapper.appendChild(level);
    item.languages.map((lang) => {
      const language = document.createElement("div");
      language.classList.add("language-tag");
      language.innerText = lang;
      languagesWrapper.appendChild(language);
    });
    if (item.tools.length > 0) {
      item.tools.map((too) => {
        const tools = document.createElement("div");
        tools.classList.add("language-tag");
        tools.innerText = too;
        languagesWrapper.appendChild(tools);
      });
    }
    const photo = document.createElement("img");
    photo.classList.add("photo");
    photo.src = item.logo;
    article.appendChild(photo);
  });
  //Add filter functionality
  filter();
}

let filterTagsArray = [];
//Function that adds filter functionality and doesnt allow duplicates
function filter() {
  const tags = document.querySelectorAll(".language-tag");
  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      if (!filterTagsArray.includes(tag.innerText)) {
        filterTagsArray.push(tag.innerText);
        const filterBox = document.querySelector(".filter");
        const filterTag = document.createElement("div");
        filterTag.classList.add("filter-tag");
        filterTag.innerText = tag.innerText;
        filterTag.addEventListener("click", function () {
          console.log(filterTagsArray);
          filterTagsArray = filterTagsArray.filter(
            (item) => item !== filterTag.innerText
          );
          filterTag.remove();
        });
        filterBox.appendChild(filterTag);
      }
    });
  });
}

//Event listener for the clear button
function clearButton() {
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", function () {
    filterTagsArray = [];
    const filterBox = document.querySelector(".filter");
    filterBox.innerHTML = "";
  });
}

function addOrRemoveElementsFilterUpdate() {
  const filterBox = document.querySelector(".filter");
  filterBox.addEventListener("DOMNodeInserted", async function () {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const data = await fetch("./data.json");
    const result = await data.json();
    const filteredResult = result.filter((item) => {
      function checkLanguages() {
        const lang = item.languages;
        let count = 0;
        lang.forEach((item) => {
          if (filterTagsArray.includes(item)) {
            count++;
          }
        });
        if (count > 0) {
          return true;
        } else {
          return false;
        }
      }
      return (
        filterTagsArray.includes(item.role) ||
        filterTagsArray.includes(item.level) ||
        checkLanguages() ||
        filterTagsArray.includes(item.tools)
      );
    });
    createComponent(filteredResult);
  });

  filterBox.addEventListener("DOMNodeRemoved", async function () {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const data = await fetch("./data.json");
    const result = await data.json();
    if (filterTagsArray.length > 0) {
      const filteredResult = result.filter((item) => {
        function checkLanguages() {
          const lang = item.languages;
          let count = 0;
          lang.forEach((item) => {
            if (filterTagsArray.includes(item)) {
              count++;
            }
          });
          if (count > 0) {
            return true;
          } else {
            return false;
          }
        }
        return (
          filterTagsArray.includes(item.role) ||
          filterTagsArray.includes(item.level) ||
          checkLanguages() ||
          filterTagsArray.includes(item.tools)
        );
      });
      createComponent(filteredResult);
    } else {
      createComponent(result);
    }
  });
}
