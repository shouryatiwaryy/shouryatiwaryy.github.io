export interface Role {
  title: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: Role[] = [
  {
    title: 'Associate - 1',
    company: 'Accordion India',
    period: 'Jan 2025 — Present',
    current: true,
    bullets: [
      'Developed an Excel-driven market intelligence model for a Top 3 global cosmetics brand, enabling competitor benchmarking, demand forecasting, and strategic business insights.',
      'Designed a DAX-based Revenue Recognition forecasting model and re-architected SQL & Power BI data models, reducing dataset size by over 55% and significantly improving dashboard performance.',
      'Built executive Power BI dashboards for $750M and $2.2B healthcare organizations, tracking patient encounters, revenue metrics, and clinical KPIs.',
      'Consolidated three enterprise Power BI dashboards into a unified semantic model, improving reporting consistency and data accessibility.',
      'Led project execution by supervising analyst deliverables, conducting quality reviews, mentoring team members, and collaborating directly with stakeholders.',
      'Designed a Client Retention Model analyzing 18-month revenue behavior to identify churn drivers and support transaction and valuation discussions.',
    ],
  },
  {
    title: 'Analyst - 2',
    company: 'Accordion India',
    period: 'Jun 2023 — Dec 2024',
    current: false,
    bullets: [
      'Developed SQL stored procedures and scalable data models to transform large healthcare datasets into reporting-ready structures.',
      'Engineered optimized SQL data models that reduced Power BI dashboard load time by over 75%.',
      'Reduced Power BI model size by 90% (900 MB → 90 MB), significantly improving refresh speed and usability.',
      'Built interactive Power BI dashboards for enterprise healthcare clients covering revenue cycle, operations, and clinical performance.',
      'Automated Root Cause Analysis (RCA) processes using Excel Macros, reducing manual effort and improving reporting accuracy by 50%.',
    ],
  },
  {
    title: 'Artificial Intelligence Intern',
    company: 'Kinara, Inc.',
    period: 'Jul 2022 — Dec 2022',
    current: false,
    bullets: [
      'Implemented 30+ deep learning kernels customized for Kinara’s proprietary instruction set.',
      'Validated kernels across multiple neural network architectures to ensure production-quality performance.',
      'Developed a Jinja templating engine that automated generation and testing of 700+ AI models.',
    ],
  },
  {
    title: 'Summer Intern',
    company: 'Hindustan Petroleum Corporation Limited',
    period: 'Jun 2021 — Jul 2021',
    current: false,
    bullets: [
      'Researched grease manufacturing processes and evaluated modern technologies to improve production efficiency.',
      'Performed process analysis and presented recommendations based on operational and market research.',
    ],
  },
  {
    title: 'Team Member',
    company: 'MIITJEE Corporation',
    period: 'Nov 2020 — Mar 2021',
    current: false,
    bullets: [
      'Reviewed and validated mathematics questions for quality and accuracy.',
      'Prepared handwritten solutions and educational content for students.',
    ],
  },
];