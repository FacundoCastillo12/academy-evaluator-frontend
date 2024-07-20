import React from 'react';

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  className?: string;
};
const Card = ({
  description,
  title,
  icon,
  className = 'bg-primary-100 shadow-xl flex-shrink-0 w-80',
}: CardProps) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body items-center text-center">
        {icon && icon}
        <h2 className="card-title text-xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
