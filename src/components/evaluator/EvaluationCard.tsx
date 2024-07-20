import React from 'react';
import { IEvaluation } from '@/interfaces/IEvaluation';
import Link from 'next/link';

interface EvaluationCardProps {
  evaluation: IEvaluation;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({ evaluation }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{evaluation.subject}</h2>
        <p>{evaluation.questions.length} questions</p>
        <div className="card-actions justify-end">
          <Link href={`/evaluation/${evaluation.id}`}>
            <button className="btn btn-primary">Start Evaluation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;