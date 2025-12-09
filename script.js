var topics = [
  {
    topic: "FE",
    courses: [
      {
        id: 1,
        title: "html, css",
      },
      {
        id: 1,
        title: "JS",
      },
    ],
  },
  {
    topic: "BE",
    courses: [
      {
        id: 1,
        title: "NodeJS",
      },
      {
        id: 2,
        title: "PHP",
      },
    ],
  },
];

const topicCourseNames = topics.reduce((acc, curr) => {
  return acc.concat(curr.courses);
}, []);

// console.log(topicCourseNames);

function myFunction(param) {
  console.log(param());
}

myFunction(() => {
  return 123;
})
