import React from 'react';
import styles from '../styles/Toggle.module.css';

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({ checked, onChange }: ToggleProps): JSX.Element => (
  <span className={styles['toggle-control']}>
    <input
      className={styles.check}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="check"
    />
    <label htmlFor="check" />
  </span>
);

export default Toggle;
