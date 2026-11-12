export interface Project {
  id: string;
  title: string;
  name: string;
  category: string;
  context: string;
  description: string;
  technologies: string[];
  problem: string;
  approach: string;
  // Add verified challenges, outcomes, lessons, and media as they become available.
  challenges?: string;
  outcome?: string;
  lessons?: string;
}
export const profile = {
  name: 'Ophir Maor',
  github: 'https://github.com/Ophir-Maor',
  email: '',
  linkedin: '',
  headline: 'Building intelligent systems, from models to products.',
  description:
    'Computer Science at UC San Diego. I work across machine learning, computer vision, and full-stack engineering—turning complex ideas into practical software.',
  about:
    "I'm a computer science student and software engineer interested in building intelligent systems that solve real problems. I enjoy working across the stack, from experimenting with machine learning models to developing software that people actually use.",
};
export const projects: Project[] = [
  {
    id: 'xometrics',
    title: 'Xometrics Computer Vision Pipeline',
    name: 'Teaching machines to see.',
    category: 'Computer vision',
    context: 'Xometrics · Software Engineering Intern · Summer 2025',
    description:
      'A computer vision pipeline that turns instructional exercise videos into clean, composited content.',
    technologies: [
      'Python',
      'OpenCV',
      'FFmpeg',
      'SAM2',
      'Robust Video Matting',
      'PySide6',
    ],
    problem:
      'Automatically process instructional exercise videos, isolate people, and composite the results across a batch workflow.',
    approach:
      'Built a Python-based workflow combining batch video processing, human segmentation, compositing, and a graphical interface.',
  },
  {
    id: 'brandes',
    title: 'Brandes Investment Partners',
    name: 'Modernizing the tools behind the work.',
    category: 'Full-stack engineering',
    context:
      'Brandes Investment Partners · Software Engineering Intern · Summer 2026',
    description:
      'Modernization of an internal SQL execution and code-review application with Blazor and .NET.',
    technologies: ['C#', '.NET', 'Blazor', 'SQL', 'REST APIs', 'Telerik UI'],
    problem:
      'Modernize an internal application for SQL execution and code review.',
    approach:
      'Worked on application modernization using Blazor and .NET. This overview intentionally excludes proprietary interfaces and implementation details.',
  },
  {
    id: 'airbnb',
    title: 'Airbnb Price Prediction',
    name: 'Finding the signal in the price.',
    category: 'Machine learning',
    context: 'UC San Diego · Machine learning coursework',
    description:
      'Exploring how feature engineering and model ensembles can predict Airbnb listing prices.',
    technologies: [
      'Python',
      'CatBoost',
      'LightGBM',
      'Ensembling',
      'Cross-validation',
    ],
    problem:
      'Develop and evaluate machine learning models to predict listing prices.',
    approach:
      'Used feature engineering, CatBoost, LightGBM, model ensembling, and cross-validation. Verified evaluation results will be added later.',
  },
  {
    id: 'study-agent',
    title: 'AI Study Agent',
    name: 'A little context. A better study partner.',
    category: 'Applied AI',
    context: 'DiamondHacks 2026',
    description:
      'An AI-assisted study tool connecting local language models, OCR, and contextual desktop interaction.',
    technologies: ['Python', 'Ollama', 'Local LLMs', 'OCR'],
    problem: 'Connect study context with an AI-assisted desktop workflow.',
    approach:
      'Built a study tool involving local language models, optical character recognition, and contextual desktop interaction.',
  },
  {
    id: 'rov',
    title: 'MATE ROV',
    name: 'Engineering below the surface.',
    category: 'Robotics',
    context: 'Miramar Engineering Club · Engineering leadership',
    description:
      'Hands-on robotics and team leadership in the development of a remotely operated underwater vehicle.',
    technologies: ['Robotics', 'ROV', 'Systems engineering'],
    problem:
      'Develop a remotely operated underwater vehicle with a student engineering team.',
    approach:
      'Worked on and led a student robotics team for the MATE ROV competition. Subsystem and implementation details will be documented later.',
  },
];
export const experience = [
  [
    'Summer 2026',
    'Brandes Investment Partners',
    'Software Engineering Intern',
    'Internal application modernization with Blazor and .NET.',
  ],
  [
    'Summer 2025',
    'Xometrics',
    'Software Engineering Intern',
    'Python-based computer vision and batch video processing.',
  ],
  [
    'Education',
    'UC San Diego',
    'Computer Science · BS/MS pathway',
    'Accepted into UCSD’s BS/MS Computer Science pathway.',
  ],
  [
    'Leadership',
    'Miramar Engineering Club',
    'Robotics / Engineering Leadership',
    'Student engineering leadership and remotely operated underwater vehicles.',
  ],
];
