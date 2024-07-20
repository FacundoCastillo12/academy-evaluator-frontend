import React from 'react';
import {
  LucideIcon,
  ClipboardCheck,
  CheckCircle,
  Eye,
  Mail,
  Users,
  Calendar,
} from 'lucide-react';

interface IFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}
const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}) => (
  <div
    className="flex flex-col items-center text-center mb-8"
    data-cy={`feature-${title}`}
  >
    <div className="bg-purple-100 p-3 rounded-full mb-4">
      <Icon className="w-6 h-6 text-purple-600" />
    </div>
    <h3
      className="text-xl font-semibold mb-2"
      data-cy={`feature-title-${title}`}
    >
      {title}
    </h3>
    <p className="text-gray-300" data-cy={`feature-description-${title}`}>
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const features: IFeature[] = [
    {
      icon: ClipboardCheck,
      title: 'Easy Quizzes',
      description:
        'Create and take quizzes effortlessly with our user-friendly interface.',
    },
    {
      icon: CheckCircle,
      title: 'Automatic Correction',
      description:
        'Instant and accurate grading of quizzes to save you time and effort.',
    },
    {
      icon: Calendar,
      title: 'Scheduled Quizzes',
      description:
        'Schedule quizzes in advance to fit your teaching timeline and curriculum.',
    },
    {
      icon: Eye,
      title: 'Progress Monitoring',
      description:
        'Keep track of student progress and performance with detailed analytics.',
    },
    {
      icon: Mail,
      title: 'Private Invitations',
      description:
        'Send private quiz invitations to students securely and easily.',
    },
    {
      icon: Users,
      title: 'Group Management',
      description:
        'Easily manage student groups and classes for organized teaching.',
    },
  ];

  return (
    <section className="py-16 bg-base-100 w-full" data-cy="features-section">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-2 text-white"
          data-cy="features-title"
        >
          FEATURES
        </h2>
        <h3
          className="text-4xl font-bold text-center mb-4 text-white"
          data-cy="features-subtitle"
        >
          We have Amazing <span className="text-purple-500">Service.</span>
        </h3>
        <p
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          data-cy="features-description"
        >
          Academy Evaluator provides cutting-edge tools to streamline your
          assessment process and enhance educational outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
