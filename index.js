//Initialice app
function initialiceApp() {
  //Fetch the data on load
  window.addEventListener("load", async function () {
    const data = await fetch("./data.json");
    const result = await data.json();
    console.log(result);
    createComponent(result);
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
    const contract = document.createElement("p");
    contract.innerText = item.contract;
    infoWrapper.appendChild(contract);
    const location = document.createElement("p");
    location.innerText = item.location;
    infoWrapper.appendChild(location);
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
}
