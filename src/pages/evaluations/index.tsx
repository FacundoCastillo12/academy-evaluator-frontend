import EvaluationCard from '@/components/evaluator/EvaluationCard';
import MainLayout from '@/components/layout/MainLayout';
import { mockEvaluations } from '@/data/evaluations';
import { IEvaluation } from '@/interfaces/IEvaluation';
import { useEffect, useState } from 'react';

export default function Evaluations() {
  const [evaluations, setEvaluations] = useState<IEvaluation[]>([]);

  useEffect(() => {
    // This need to be replaced with an API call
    setEvaluations(mockEvaluations);
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Evaluations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evaluations.map((evaluation) => (
            <EvaluationCard key={evaluation.id} evaluation={evaluation} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
