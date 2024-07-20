import React from 'react';

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">{question}</div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const faqs = [
    {
      question: 'How does Academy Evaluator work?',
      answer:
        'Academy Evaluator provides a platform for creating, distributing, and analyzing assessments. Teachers can create quizzes, students take them online, and results are automatically calculated and presented in easy-to-understand reports.',
    },
    {
      question: 'Is Academy Evaluator suitable for all educational levels?',
      answer:
        'Yes, our platform is designed to be flexible and can be used from primary education through university level. The interface and features can be adapted to suit different age groups and subjects.',
    },
    {
      question: 'How secure is the student data on your platform?',
      answer:
        'We take data security very seriously. All data is encrypted, stored securely, and we comply with educational data protection regulations. We never share or sell user data.',
    },
    {
      question:
        'Can I integrate Academy Evaluator with other educational tools?',
      answer:
        'Yes, we offer APIs and integrations with popular Learning Management Systems (LMS) and other educational tools. Contact our support team for specific integration inquiries.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 30-day free trial for educators to explore all features of Academy Evaluator. No credit card is required to start the trial.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We provide 24/7 email support, live chat during business hours, and comprehensive documentation. Premium plans also include dedicated phone support.',
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">
          FAQs
        </h2>
        <h3 className="text-4xl font-bold text-center mb-4">
          You have <span className="text-primary">Questions</span>?
        </h3>
        <p className="text-center text-base-content mb-12 max-w-2xl mx-auto">
          We&apos;ve got answers to all of them. If you don&apos;t find what
          you&apos;re looking for, feel free to contact our support team.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
