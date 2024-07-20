import EvaluatorEngine from '@/components/evaluator/EvaluatorPage';
import { useRouter } from 'next/router';

const EvaluationPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  return <EvaluatorEngine evaluationId={id} />;
};

export default EvaluationPage;
