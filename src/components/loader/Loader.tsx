import React from 'react';
import './Loader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

interface LoaderProps {
  color?: string;
  className?: string;
}

export const Loader = ({
  color = 'white',
  className = 'inline',
}: LoaderProps) => (
  <div>
    <FontAwesomeIcon
      icon={faSpinner}
      spin={true}
      color={color}
      className={className}
    />
  </div>
);
