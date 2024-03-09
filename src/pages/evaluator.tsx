import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const Evaluator = () => {
  return (
    <MainLayout>
      <div className="flex flex-wrap p-4 gap-2">
        <div>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-accent">Button</button>
        </div>

        <div className="flex flex-wrap p-4">
          <button className="btn btn-success">Button</button>
          <button className="btn btn-info">Button</button>
          <button className="btn btn-warning">Button</button>
          <button className="btn btn-error">Button</button>
          <button className="btn btn-neutral">Neutral</button>
        </div>

        <div className="bg-white p-2 flex gap-2">
          <button className="bg-base-100">Text</button>
          <button className="bg-base-200">Text</button>
          <button className="bg-base-300">Text</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Evaluator;
