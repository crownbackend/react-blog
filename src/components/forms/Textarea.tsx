import React from 'react';

interface TextAreaProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Note que le type change pour TextArea
  required: boolean;
}

export default function TextArea({ placeholder, value, name, onChange, required }: TextAreaProps) {
  return (
    <>
      <label className="form-control">
          <div className="label">
            <span className="label-text">{placeholder}</span>
          </div>
          <textarea
               className="textarea textarea-bordered h-24"
               value={value}
               placeholder={placeholder}
               name={name}
               onChange={onChange}  // Appelle la fonction de gestion de changement
               required={required}
          ></textarea>
        </label>
    </>
  );
}