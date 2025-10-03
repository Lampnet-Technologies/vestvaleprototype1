export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

// For static routes, add more granular loading states
export const generateStaticParams = async () => {
  return [
    { slug: 'door-handles' },
    { slug: 'wallpapers' },
    { slug: 'lights' },
    { slug: 'doors' },
    { slug: 'tiles' },
  ];
};