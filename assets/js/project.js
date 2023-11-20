let projects = [];

function addProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let startDate = document.getElementById("start-input").value;
  let endDate = document.getElementById("end-input").value;
  let description = document.getElementById("description").value;
  let javascript = document.getElementById("js");
  let nodeJs = document.getElementById("node");
  let react = document.getElementById("react");
  let vue = document.getElementById("vue");
  let image = document.getElementById("upload");

  let renderIcon = "";
  if (javascript.checked == true) {
    renderIcon += '<i id="js" class="fa-brands fa-js fa-xl"></i>';
  }
  if (nodeJs.checked == true) {
    renderIcon += '<i id="node" class="fa-brands fa-node-js fa-xl"></i>';
  }
  if (react.checked == true) {
    renderIcon += '<i id="react" class="fa-brands fa-react fa-xl"></i>';
  }
  if (vue.checked == true) {
    renderIcon += '<i id="vue" class="fa-brands fa-vuejs fa-xl"></i>';
  }
  console.log(renderIcon);

  image = URL.createObjectURL(image.files[0]);
  endDate = new Date(endDate);
  startDate = new Date(startDate);

  let renderProject = {
    projectName,
    startDate,
    endDate,
    description,
    renderIcon,
    image,
  };

  projects.push(renderProject);
  console.log(projects);
  displayProject();
}

function displayProject() {
  //   let projectContainer = document.getElementById("project-list");

  document.getElementById("project-list").innerHTML = "";

  //   let lengthProject = projects.length;

  for (i = 0; i < projects.length; i++) {
    // console.log(projects);
    document.getElementById("project-list").innerHTML += `
    <div class="card shadow border border-black" style="width: 18rem;">
    <img src="${projects[i].image}" class="card-img-top" alt="..." style="width: 90%; margin: 8px auto;">
    <div class="card-body">
      <h5 class="card-title">${projects[i].projectName}</h5>
      <p>${countDuration(
        projects[i].endDate,
        projects[i].startDate
      )}</p>
      <p class="card-text">${projects[i].description}</p>
      <div class="d-flex gap-3 my-5">
      ${projects[i].renderIcon}
      </div>
      <div class="d-flex gap-5 justify-content-center" style=" margin-bottom: 0px;">
        <a href="#" class="btn btn-dark d-flex justify-content-center align-items-center" style="width: 80px; height: 30px;">Edit</a>
        <a href="#" class="btn btn-dark d-flex justify-content-center align-items-center" style="width: 80px; height: 30px;">Delete</a>
      </div>
      
    </div>
  </div>
        `;
  }
}

function countDuration(endDate, startDate) {
  let startDay = new Date(startDate);
  let endDay = new Date(endDate);
  let dayDuration = Math.abs(endDay - startDay);
  let day = Math.ceil(dayDuration / (1000 * 60 * 60 * 24));
  let startMonth = new Date(startDate);
  let endMonth = new Date(endDate);
  let monthDuration = Math.abs(endMonth - startMonth);
  let month = Math.floor(monthDuration / (1000 * 60 * 60 * 24 * 30));
  let startYear = new Date(startDate);
  let endYear = new Date(endDate);
  let yearDuration = Math.abs(endYear - startYear);
  let year = Math.ceil(yearDuration / (1000 * 60 * 60 * 24 * 30 * 12));

  if (day < 30) {
    return `Duration ${day} day`;
  } else if (day >= 30) {
    return `Duration ${month} month`;
  } else if (month >= 12) {
    return `Duration ${year} year`;
  }

  console.log(year);
}
