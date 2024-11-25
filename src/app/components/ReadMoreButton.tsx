// components/ReadMoreButton.tsx

import React from 'react';
import styles from './ReadMoreButton.module.css';

type ReadMoreButtonProps = {
  onClick: () => void;
};

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Read More
    </button>
  );
};

export default ReadMoreButton;
