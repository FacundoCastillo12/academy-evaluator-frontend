import React from 'react';
import Card from './Card';
import Link from 'next/link';
import backgroundImage from '../../../../public/20944169.jpg';
import Image from 'next/image';
const LandingSection = () => {
  const cards = [
    {
      title: 'Create quizzes easily',
      description:
        'Design customized assessments in minutes with our intuitive interface.',
      icon: null,
    },
    {
      title: 'Create assessments easily',
      description:
        'Create assessments with ease by using our intuitive interface.',
      icon: null,
    },
    {
      title: 'Create assessments easily',
      description:
        'Create assessments with ease by using our intuitive interface.',
      icon: null,
    },
  ];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={backgroundImage}
        quality={100}
        alt="Background"
        className="opacity-70 absolute top-[-1px] object-cover"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 opacity-70" />
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-4">Academy Evaluator</h1>
            <p className="text-xl mb-8">
              A simple and efficient way to evaluate your students.
            </p>
            <Link className="btn btn-primary btn-lg" href="/evaluations">
              Get started
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                className="w-80 bg-base-300 shadow-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
