export interface ProjectSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}
export interface ProjectMedia {
  path: string;
  alt: string;
  caption: string;
}
export interface Project {
  id: string;
  title: string;
  name: string;
  category: string;
  context: string;
  description: string;
  technologies: string[];
  sections: ProjectSection[];
  highlight?: string;
  note?: string;
  flow?: { label: string; steps: string[] };
  comparison?: { name: string; detail: string }[];
  media?: ProjectMedia[];
  video?: { path: string; label: string; caption: string };
  awards?: string[];
  sources?: { label: string; url: string }[];
}
export const profile = {
  name: 'Ophir Maor',
  github: 'https://github.com/Ophir-Maor',
  email: 'ophir.maor10@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ophir-maor/',
  portrait: 'ophir.jpg',
  aboutParagraphs: [
    'Outside of work, I love surfing, getting a workout in, and spending time with friends.',
    'I also love traveling and exploring new places. In summer 2026, I got to visit New York. The summer before, I spent a month traveling through Asia, primarily Japan, Thailand, and the Philippines.',
    'When I’m staying in, I enjoy playing video games. Recently I’ve been getting back into Counter-Strike: Global Offensive, and I’ve always loved Grand Theft Auto and Call of Duty. I’m looking forward to Grand Theft Auto VI on PC!',
  ],
  photoNote:
    'That’s me in the photo at the Charlotte, North Carolina airport at 5 a.m., on a layover on my way to New York in summer 2026 :)',
  contact: {
    heading: 'Feel free to reach out!',
    description:
      'Send me an email, message me on LinkedIn, or find my projects on GitHub.',
  },
  headline: 'Building intelligent systems, from models to products.',
  description:
    'I’m currently an undergraduate computer science student, and I’ll begin a master’s in computer science in 2027. My work spans machine learning, computer vision, and full-stack development.',
  about:
    'Thank you for taking a minute to look through my site! I’m Ophir, pronounced “o-fear.”',
};
export const projects: Project[] = [
  {
    id: 'xometrics',
    title: 'Automated Video Segmentation & Processing',
    name: 'Xometrics video pipeline',
    category: 'Computer vision',
    video: {
      path: 'projects/xometrics/video-demo.mp4',
      label: 'Xometrics video-processing demonstration',
      caption: 'Video demonstration supplied by Ophir Maor.',
    },
    context: 'Xometrics · Software Engineering Intern · Summer 2025',
    description:
      'Built a desktop computer vision pipeline combining segmentation, compositing, and batch processing. Adopted by Xometrics to reduce manual editing across large video collections.',
    technologies: [
      'Python',
      'OpenCV',
      'FFmpeg',
      'SAM2',
      'Robust Video Matting',
      'PySide6',
    ],
    sections: [
      {
        id: 'section-0',
        heading: 'The problem',
        paragraphs: [
          'Preparing instructional exercise videos meant manually isolating people from their backgrounds, roughly two to four minutes of editing per video. Repeating that work across a video collection made it a natural candidate for automation.',
          'Detecting a person was only part of the problem. Ropes, benches, and exercise balls needed to remain visible, but segmentation models could classify them as background.',
        ],
      },
      {
        id: 'section-1',
        heading: 'What I built',
        paragraphs: [
          'I developed a Python application that connected pretrained segmentation models to a complete video-processing workflow, with a PySide6 interface for selecting input and output folders.',
        ],
        bullets: [
          'Person segmentation and background removal with SAM2 and Robust Video Matting.',
          'Mask processing, compositing, and video reconstruction using OpenCV and FFmpeg.',
          'Batch processing across collections of videos, reducing repeated manual editing.',
        ],
      },
      {
        id: 'section-2',
        heading: 'Engineering challenges',
        paragraphs: [
          'I first explored contours, thresholding, and edge detection in OpenCV. These techniques required extensive tuning and struggled with complicated scenes. Pretrained segmentation models offered a more practical starting point.',
          'Model integration brought its own tradeoffs: preserving exercise equipment, keeping masks stable, and balancing processing time against segmentation quality. I worked on debugging, profiling, and mask refinement while keeping the desktop workflow straightforward to operate.',
        ],
      },
      {
        id: 'section-3',
        heading: 'Results and impact',
        paragraphs: [
          'Xometrics adopted the tool. In the reported batch workflow, the pipeline processed approximately 200 videos in under ten minutes, replacing a repetitive manual editing process.',
        ],
      },
      {
        id: 'section-4',
        heading: 'Lessons learned',
        paragraphs: [
          'Integrating a model is different from building a dependable application around it. The useful result was a workflow the team could operate, not just a segmentation output.',
          'Difficult scenes also made the limits of the models visible. Understanding why objects disappear or masks become unstable is a question I want to pursue beyond application-level integration.',
        ],
      },
    ],
    highlight: '≈200 videos in under 10 minutes · reported batch workflow',
    flow: {
      label: 'Conceptual processing flow · not actual video frames',
      steps: [
        'Input folders',
        'Segmentation models',
        'Mask refinement',
        'Composite & reconstruct',
        'Batch output',
      ],
    },
  },
  {
    id: 'brandes',
    title: 'SQL Server Execution Service (SSES)',
    name: 'SQL Server Execution Service',
    category: 'Full-stack engineering',
    context:
      'Brandes Investment Partners · Software Engineering Intern · Summer 2026',
    description:
      'Contributed Blazor interfaces, REST APIs, access-control features, and workflow automation to a production SQL execution and code-review application.',
    technologies: [
      'C#',
      '.NET 10',
      'Blazor',
      'SQL',
      'REST APIs',
      'Telerik UI',
      'Authentication & authorization',
    ],
    sections: [
      {
        id: 'section-0',
        heading: 'The problem',
        paragraphs: [
          'A legacy internal application supported SQL execution, review, and approval. Modernization had to preserve controlled access and existing operational processes while coordinating requests across people with different responsibilities.',
        ],
      },
      {
        id: 'section-1',
        heading: 'My contribution',
        paragraphs: [
          'As a Software Engineering Intern, I contributed to the broader team’s modernization work using C#, .NET 10, Blazor, SQL, and Telerik UI.',
        ],
        bullets: [
          'Developing and modernizing user-interface functionality.',
          'Building REST API functionality and CRUD operations.',
          'Working with certificate-based and identity-token authentication, and implementing role-based authorization features.',
          'Supporting SQL request, review, approval, execution, and notification workflows.',
          'Automating workflow email notifications.',
        ],
      },
      {
        id: 'section-2',
        heading: 'Engineering challenges',
        paragraphs: [
          'Frontend changes needed to fit backend APIs, authorization rules, and existing business processes. A usable screen alone was not enough: requests also had to reach the right people and respect their permissions.',
          'Working within a production enterprise environment made integration, maintainability, and operational reliability central concerns rather than details to add later.',
        ],
      },
      {
        id: 'section-3',
        heading: 'Results and impact',
        paragraphs: [
          'My contributions supported the modernization of an internal production application. Automated workflow functionality helped reduce manual coordination around requests and notifications. The work was part of the broader engineering team’s modernization effort.',
        ],
      },
      {
        id: 'section-4',
        heading: 'Lessons learned',
        paragraphs: [
          'The experience connected user experience to backend architecture, security, and operational requirements. Maintainable enterprise software has to work within the organization’s existing systems and responsibilities.',
        ],
      },
    ],
    highlight: 'Production enterprise engineering · team contribution',
    note: 'Confidentiality: this overview stays at the level of responsibilities and technologies. No proprietary screens, source code, internal configuration, or implementation-specific security details are shown.',
  },
  {
    id: 'airbnb',
    title: 'Machine Learning for Airbnb Price Prediction',
    name: 'Airbnb price prediction',
    category: 'Machine learning',
    context: 'UCSD CSE 151A · Fall 2026 · Machine Learning Course Competition',
    description:
      'Developed and tested model ensembles for a UCSD CSE 151A competition predicting NYC Airbnb prices, using feature engineering, gradient boosting, cross-validation, and blending.',
    technologies: [
      'Python',
      'CatBoost',
      'LightGBM',
      'Feature engineering',
      'Cross-validation',
      'Model blending',
      'Tabular neural networks',
    ],
    sections: [
      {
        id: 'section-0',
        heading: 'The challenge',
        paragraphs: [
          'For UC San Diego’s CSE 151A course competition, I worked on predicting nightly prices for New York City Airbnb listings from structured listing data. The dataset contained approximately 33,538 training rows and 17,337 test rows.',
          'Predictions were evaluated using root mean squared error (RMSE). Squaring each error makes large misses particularly costly, so expensive listings could have a disproportionate effect on the overall score.',
        ],
      },
      {
        id: 'section-1',
        heading: 'Technical approach',
        paragraphs: [
          'I started with baseline models and progressively compared more sophisticated alternatives. Each experiment needed to justify itself on measured holdout performance.',
        ],
        bullets: [
          'CatBoost and LightGBM regression with feature engineering.',
          'Cross-validation and comparisons between raw-price and transformed-target objectives.',
          'Model blending and ensemble weighting to combine predictions.',
          'Evaluation by listing-price range, including the expensive tail.',
          'Additional experiments with tabular neural-network models.',
        ],
      },
      {
        id: 'section-2',
        heading: 'Validation and generalization',
        paragraphs: [
          'A central challenge was improving RMSE without overfitting to one validation split. I investigated performance on previously unseen hosts and compared validation strategies to better understand generalization outside the training distribution.',
          'Model blending combined predictions through weighted contributions. Choosing the weights was another validation decision, not a reason to assume an ensemble would automatically outperform its components.',
        ],
      },
      {
        id: 'section-3',
        heading: 'Experiments, not final rankings',
        paragraphs: [
          'The project progressed through repeated rounds of model development, validation, and ensembling during Fall 2026. I compared holdout results and performance across price ranges rather than choosing models solely for their sophistication.',
          'The Model Evolution chart shows selected historical public leaderboard checkpoints reported during the competition. These scores are separate from local holdout results and do not establish a private leaderboard score or final placement.',
        ],
      },
    ],
    highlight: 'UCSD CSE 151A · RMSE evaluation · ongoing Fall 2026',
    flow: {
      label: 'Experimental workflow · methodology, not measured model rankings',
      steps: [
        'Listing features',
        'Baseline & boosting models',
        'Holdout / cross-validation',
        'Compare errors by price range',
        'Weighted blend & re-evaluate',
      ],
    },
    comparison: [
      {
        name: 'CatBoost / LightGBM',
        detail:
          'Compare gradient-boosting models on the same validation setup.',
      },
      {
        name: 'Raw / transformed targets',
        detail:
          'Test how the target objective affects errors across price ranges.',
      },
      {
        name: 'Individual / blended predictions',
        detail: 'Evaluate whether weighted combinations improve holdout RMSE.',
      },
    ],
  },
  {
    id: 'study-agent',
    title: 'AI Study Copilot',
    name: 'AI Study Copilot',
    category: 'Applied AI',
    context: 'DiamondHacks 2026 · Three-person team · Hackathon prototype',
    description:
      'Built a local AI study prototype that monitors activity, tracks topics and application switching, detects inactivity, and generates contextual summaries using OCR and a local language model.',
    technologies: [
      'Python',
      'Ollama',
      'Llama 3.1',
      'OCR',
      'Desktop activity monitoring',
    ],
    sections: [
      {
        id: 'section-0',
        heading: 'The idea',
        paragraphs: [
          'Study tools often ask students to manually record what they are learning. Our idea was to collect useful signals from a study session and connect that context to assistance and review with less manual effort.',
        ],
      },
      {
        id: 'section-1',
        heading: 'What we built',
        paragraphs: [
          'During DiamondHacks 2026, our three-person team developed an AI Study Copilot. It was a hackathon prototype, not a mature commercial product.',
        ],
        bullets: [
          'Local Llama 3.1 inference through Ollama.',
          'OCR and contextual text extraction, with application and window-activity monitoring.',
          'Topic and keyword tracking, inactivity detection, and reminders.',
          'Study-session summaries and review documents.',
          'A desktop control panel for enabling and managing assistant functionality.',
        ],
      },
      {
        id: 'section-2',
        heading: 'How it works',
        paragraphs: [
          'The desktop application monitors relevant study activity. OCR and contextual signals help identify topics; activity and topic changes contribute to the session history.',
          'The locally hosted model uses session context to support assistance. The application then produces a study-session summary with observed topics and activity.',
        ],
      },
      {
        id: 'section-3',
        heading: 'Engineering challenges',
        paragraphs: [
          'The work involved bringing activity monitoring, topic extraction, local inference, and a desktop interface together into a functioning prototype. Each component produced a different kind of information; making that information useful in a session summary was as important as connecting the components.',
          'The hackathon scope centered on connecting these components into a working study-session workflow.',
        ],
      },
    ],
    flow: {
      label: 'Prototype flow · conceptual overview',
      steps: [
        'Desktop activity',
        'OCR & topics',
        'Session history',
        'Local Llama 3.1',
        'Study summary',
      ],
    },
    media: [
      {
        path: 'projects/study-agent/control-panel.png',
        alt: 'AI Study Copilot control panel showing monitoring status, keyword counts, application switching, inactivity, and assistant controls.',
        caption:
          'Authentic prototype control panel. Counters describe one example session, not overall performance.',
      },
      {
        path: 'projects/study-agent/session-summary.png',
        alt: 'Generated study-session summary showing observed topics, time spent, and identified keywords.',
        caption:
          'An example generated session summary from the hackathon prototype. Session information is illustrative of this recorded session only.',
      },
    ],
  },
  {
    id: 'rov',
    title: 'Below the Surface · MATE ROV World Championship',
    name: 'MATE ROV World Championship',
    category: 'Robotics',
    media: [
      {
        path: 'projects/rov/sub.jpg',
        alt: 'The team’s remotely operated underwater vehicle in a pool.',
        caption: 'Our ROV in the water. Photo supplied by Ophir Maor.',
      },
    ],
    context: 'San Diego Miramar College Engineering Club · 2025',
    description:
      'Helped lead engineering efforts at Miramar College, whose Water Jets team earned 2nd place in the Pioneer Class at the 2025 MATE ROV World Championship.',
    technologies: [
      'Underwater robotics',
      'System integration',
      'Testing',
      'Technical communication',
    ],
    sections: [
      {
        id: 'section-0',
        heading: 'The challenge',
        paragraphs: [
          'The MATE ROV competition asks student teams to build remotely operated underwater vehicles for missions inspired by marine science and engineering. It brings mechanical, electrical, software, testing, and communication work into a single integrated project.',
        ],
      },
      {
        id: 'section-1',
        heading: 'Sleepy Fishy 2.0',
        paragraphs: [
          'Miramar College’s Water Jets developed Sleepy Fishy 2.0 to navigate obstacles, handle objects, capture video, and support scientific observation and sampling tasks. The vehicle had to bring the team’s work together as an operational system.',
        ],
      },
      {
        id: 'section-2',
        heading: 'Leadership and collaboration',
        paragraphs: [
          'My background includes leadership in the Miramar College Engineering Club, helping lead engineering efforts within a multidisciplinary student team.',
          'Organizing that work means coordinating contributors, testing integrated systems, and communicating design decisions across disciplines. The vehicle and competition results reflect collective contributions across the Water Jets team.',
        ],
      },
      {
        id: 'section-3',
        heading: 'Results and impact',
        paragraphs: [
          'At the 2025 MATE ROV World Championship, held June 19–21 in Alpena, Michigan, the Miramar Water Jets earned second place overall in the Pioneer Class and the Best Marketing Display Award.',
          'The results reflect both the engineering effort and the team’s technical communication. The college’s annual report confirms the division placement and marketing-display result.',
        ],
      },
    ],
    highlight: '2nd Place · 2025 World Championship, Pioneer Class',
    awards: [
      '2nd place overall · Pioneer Class',
      'Best Marketing Display Award',
    ],
    sources: [
      {
        label: 'Miramar College annual report · page 16',
        url: 'https://sdmiramar.edu/sites/default/files/2025-12/2025%20Annual%20ReportV9.pdf#page=16',
      },
      {
        label: '2025 competition coverage',
        url: 'https://www.competitionsciences.org/2025/08/27/how-2025-became-the-year-of-the-underdog-at-mate-rov-world-championship/',
      },
    ],
  },
];
export const experience = [
  [
    'Current',
    'i4NS · UC San Diego',
    'Software Engineering Intern',
    'A UC San Diego program working with the Department of War.',
  ],
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
