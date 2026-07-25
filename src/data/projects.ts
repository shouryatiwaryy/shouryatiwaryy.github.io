export interface Project {
  title: string;
  url: string;
  date: string;
  summary: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: 'Marketing Campaign Prediction for Banking Products',
    url: 'https://github.com/shouryatiwaryy/Internship_Banking_ML-project',
    date: '2022-12-01',
    summary:
      'Built a machine learning model to identify customers with a high probability of purchasing personal loan products. Used customer demographics, banking relationships, and campaign history to improve marketing efficiency while reducing campaign costs.',
    category: 'Machine Learning',
  },
  {
    title: 'QuizBuzz',
    url: 'https://github.com/shouryatiwaryy/QuizBuzz',
    date: '2020-08-01',
    summary:
      'Developed an Android quiz application in Java that presents 20 questions, calculates the final score, and provides an interactive learning experience for students.',
    category: 'Android Development',
  },
  {
    title: 'ToDo List',
    url: 'https://github.com/shouryatiwaryy/ToDos-List',
    date: '2021-01-01',
    summary:
      'Built a responsive task management web application using React, HTML, CSS, JavaScript, and Bootstrap to help users organize daily tasks with titles and descriptions.',
    category: 'Web Development',
  },
  {
    title: 'Miwok App',
    url: 'https://github.com/shouryatiwaryy/Miwok-App',
    date: '2021-02-01',
    summary:
      'Developed an Android application for learning the Miwok language using Java and Android Studio, demonstrating UI design, navigation, and multimedia integration.',
    category: 'Android Development',
  },
];