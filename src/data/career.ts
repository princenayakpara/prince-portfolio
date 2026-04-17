/**
 * Career & education from the deployed site (princenayakpara.vercel.app).
 * Stored oldest → newest; CareerSection reverses for display (most recent first).
 */
export type CareerExperience = {
  id: string;
  period: string;
  title: string;
  detail: string;
  tag?: string;
};

export const careerExperience: CareerExperience[] = [
  {
    id: 'grade-10',
    period: '2022',
    title: '10th Grade',
    detail:
      'Nirmal Vidhyalay — Achieved outstanding academic performance with a strong foundation in mathematics and science. Developed early problem-solving skills and discipline.',
    tag: '92.87%',
  },
  {
    id: 'grade-12',
    period: '2024',
    title: '12th Grade',
    detail:
      'Nirmal Science School – Morbi — Focused on Physics, Chemistry, and Mathematics. Built analytical thinking and clarity toward pursuing a career in engineering and technology.',
    tag: '78%',
  },
  {
    id: 'be-cse',
    period: 'Present',
    title: 'B.E. – Computer Science',
    detail:
      'Swaminarayan University — Currently pursuing Computer Science Engineering with focus on Data Structures, Algorithms, Web Development, and real-world project building. Actively improving coding skills and working toward becoming a full-stack developer.',
    tag: 'Ongoing',
  },
];
