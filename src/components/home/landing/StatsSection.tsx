import React from 'react';

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold mb-2">{value}</h3>
    <p className="text-xl">{label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <section
      className="bg-gradient-to-t from-base-100 to-base-300 text-white py-16 w-full"
      data-cy="stats-section"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-8"
          data-cy="stats-title"
        >
          Over 1000 Institutions Trust Us
        </h2>
        <p
          className="text-center text-xl mb-12 max-w-3xl mx-auto"
          data-cy="stats-description"
        >
          Academy Evaluator has revolutionized student assessment, providing
          educators with powerful tools to measure and enhance learning
          outcomes.
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <StatItem value="500K+" label="Students Evaluated" />
          <StatItem value="10M+" label="Quizzes Completed" />
          <StatItem value="98%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
