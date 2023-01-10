//_______________________Objeto literal_________________________________________

const fernanda = {
  name: "",
  age: 27,
  coursesApproved: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS",
  ],
  courseApproved(newCourse) {
    // this hace referencia al objeto (person)
    this.coursesApproved.push(newCourse);
  },
};

// person aprove other course

fernanda.coursesApproved.push("Curso de responsive design");

fernanda.name = "Fernanda";
fernanda.age += 1;

fernanda.courseApproved("JavaScript practico");
console.log(fernanda);

//_______________________Prototipo_________________________________________

function Student(name, age, coursesApproved) {
  this.name = name;
  this.age = age;
  this.coursesApproved = coursesApproved;
  //   método por dentro del prototipo
  //   this.courseAprove = function (newCourse) {
  //     this.coursesApproved.push(newCourse);
  //   };
}
// método por fuera del prototipo
Student.prototype.courseApproved = function (newCourse) {
  this.coursesApproved.push(newCourse);
};

const Alejandra = new Student("Alejadra", 27, ["JS practico", "Git y GitHub"]);

console.log(Alejandra);

//_______________________Clases________________________________________________

class StudentP {
  // el constructor tiene a las propiedades
  constructor({ name, age = undefined, email, coursesApproved = [] }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.coursesApproved = coursesApproved;
  }
  // métodos
  courseAprove(newCourse) {
    this.coursesApproved.push(newCourse);
  }
}

const Mirsh = new StudentP({
  name: "Mirsh",
  email: "mirsh@platzi.com",
});

// Mirsh.courseAprove("Curso de BitCoin");
console.log(Mirsh);

//_______________________Ventajas de la POO________________________________________________
// cursos

class course {
  constructor({ nameCourse, teacher }) {
    this.nameCourse = nameCourse;
    this.teacher = teacher;
  }
}

const basicoJS = new course({
  nameCourse: "Curso básico de Javascript",
  teacher: "Diego de Granda",
});
const practicoJS = new course({
  nameCourse: "Curso practico de Javascript",
  teacher: "Juan David Castro",
});
const basicoPY = new course({
  nameCourse: "Curso básico de Python",
  teacher: "Oscar Manuel",
});
const avanzadoPY = new course({
  nameCourse: "Curso avanzado de Python",
  teacher: "Oscar Manuel",
});
const visualizacionPY = new course({
  nameCourse: "Visualización de datos con Python",
  teacher: "Freddy",
});

// escuela
class school {
  constructor({ nameSchool, courses = [] }) {
    this.nameSchool = nameSchool;
    this.courses = courses;
  }
  // método para agregar cursos
  addCourse(newCourse) {
    this.courses.push(newCourse);
  }
}

const escuelaWeb = new school({
  nameSchool: "Escuela de Javascript",
  courses: [basicoJS, practicoJS],
});
const escuelaDS = new school({
  nameSchool: "Escuela de Data Science",
  courses: [basicoPY, avanzadoPY],
});

class platziStudent {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    aprovedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.aprovedCourses = aprovedCourses;
    this.learningPaths = learningPaths;
  }
}

const Daniela = new platziStudent({
  name: "Daniela",
  email: "daniela@platzi.com",
  username: "danielavb",
  learningPaths: [escuelaWeb, escuelaDS],
  aprovedCourses: [basicoJS, practicoJS],
});

console.log(Daniela);
