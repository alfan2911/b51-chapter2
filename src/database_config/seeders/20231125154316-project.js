"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "projects",
      [
        {
          img: "https://img.freepik.com/premium-photo/manager-engineer-control-innovation-robotics-automation-robot-ai-business-data-analytics-process-management_36325-3471.jpg?w=996",
          projectName: "Project 1",
          startDate: "2022-08-02",
          endDate: "2022-12-11",
          duration: "2 month",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga, asperiores quae ut, placeat aspernatur laboriosam rem nulla dicta eos quas animi? Impedit quia perspiciatis eveniet id beatae adipisci blanditiis.",
          technologies: [
            "fab fa-node fa-xl",
            "fab fa-vuejs fa-xl",
            "fab fa-react fa-xl",
            "fab fa-js-square fa-xl",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
          projectName: "Project 2",
          startDate: "2022-08-02",
          endDate: "2022-12-11",
          duration: "3 month",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga, asperiores quae ut, placeat aspernatur laboriosam rem nulla dicta eos quas animi? Impedit quia perspiciatis eveniet id beatae adipisci blanditiis.",
          technologies: [
            "fab fa-node fa-xl",
            "fab fa-vuejs fa-xl",
            "fab fa-react fa-xl",
            "fab fa-js-square fa-xl",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
