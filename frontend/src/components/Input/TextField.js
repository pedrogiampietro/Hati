import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <span>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? 'form-control is-invalid' : 'form-control'}
          autoComplete="off"
        />
        <ErrorMessage component="span" name={field.name} className="text-danger" />
      </span>
    </>
  );
};
