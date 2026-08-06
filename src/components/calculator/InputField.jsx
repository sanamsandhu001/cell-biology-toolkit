import React from 'react';
import styles from './calculator.module.css';

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "number",
  unit = "",
  unitOptions = [],
  onUnitChange
}) {
  return (
    <div className={styles.inputGroup}>

      <label>{label}</label>

      <div className={styles.inputWrapper}>

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {unitOptions.length > 0 && (
          <select
            value={unit}
            onChange={onUnitChange}
            className={styles.unitSelect}
          >
            {unitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

      </div>

    </div>
  );
}