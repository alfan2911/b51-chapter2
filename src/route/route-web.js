const Index = (req, res) => {
    res.render("index");
  };
  
  function addNewProject(req, res) {
    const { project_name, start_date, end_date, description } = req.body;
    console.log("Nama Project :", project_name);
    console.log("Start Date :", start_date);
    console.log("End Date :", end_date);
    console.log("Description :", description);
    
  }
  
  const AddProject = (req, res) => {
    res.render("add-project");
  };
  
  const ContactMe = (req, res) => {
    res.render("contact-me");
  };
  
  const Testimonials = (req, res) => {
      res.render("testimonials");
  }
  
  const detailProject = (req, res) => {
      const { id } = req.params
      const title = "Title 1"
      const description = "Description 1";
      const data = {
        id,
        title,
        description
      }
      res.render("detail-project", { data });
  }
  
  export { Index, AddProject, ContactMe, Testimonials, addNewProject, detailProject };
  