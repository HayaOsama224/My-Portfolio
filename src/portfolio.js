const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Junior Developer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haya Osama Nabil',
  role: 'Backend Developer intern',
  description:
     "I'm a Senior computer science student and backend developer intern passionate about building robust, scalable APIs and modern backend systems. I enjoy working with python, SQL, and clean architecture principles to create reliable solutions.",
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/haya-osama-nabil/?trk=public-profile-join-page',
    github: 'https://github.com/HayaOsama224',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
     name: 'Taqyim',
    description:
      'A Yelp-like platform to rate and review nearby places using React, .NET, and SQL Server.',
    stack: ['React', 'ASP.NET Core', 'SQL Server'],
    sourceCode: 'https://github.com/iMalakAhmed/Taqyim',
   // livePreview: 'https://github.com',
  },
  {
    name: 'Emoji Detection',
    description:
      'Classifies emoji expressions using CNN and OpenCV preprocessing techniques.',
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    sourceCode: 'https://github.com/iMalakAhmed/Emoji-Detection-System',
    // livePreview: '',
  },
  {
    name: 'Portfolio',
    description:
      'A personal portfolio website showcasing my projects and skills.',
    stack: ['React', 'CSS'],
    // sourceCode: ' 
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Problem Solving',
  'Machine Learning',
  'Git',
  'Github',
  'Java',
  'C# .NET ',
  'Agile Methodologies',
  'SQL',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'h.osama2298@mail.com',
}

export { header, about, projects, skills, contact }
