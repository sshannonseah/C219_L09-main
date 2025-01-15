const diplomas = [
    {
      name: "Information Technology",
      id: "R47",
      modules: [
        {
          name: "UI/UX Design for Apps",
          id: "C218",
          desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
          lecturer: {
            name: "Azhar Kamar",
            title: "Lecturer",
          },
        },
        {
          name: "Mobile App Development",
          id: "C346",
          desc: "In this module, students will learn the basics of creating Android Applications.",
          lecturer: {
            name: "Derek Lee",
            title: "Lecturer",
          },
        },
      ],
    },
    {
      name: "Financial Technology",
      id: "R18",
      modules: [
        {
          name: "Software Application Development",
          id: "C237",
          desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
          lecturer: {
            name: "Hannah Lim",
            title: "Lecturer",
          },
        },
        {
          name: "Payment Technologies",
          id: "C372",
          desc: "This module introduces students to different payment technologies and systems.",
          lecturer: {
            name: "Magdalene Lim",
            title: "Senior Lecturer",
          },
        },
      ],
    },
  ];
  
  export function getModule({ moduleId, dipId }) {
    return diplomas
      .find(({ id }) => id === dipId)
      .modules.find(({ id }) => id === moduleId);
  }
  
  export function getDiploma(dipId) {
    return diplomas.find(({ id }) => id === dipId);
  }
  
  export function getDiplomas() {
    return diplomas.map(({ name, id }) => ({ name, id }));
  }
  