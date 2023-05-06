import React, { createContext, useState } from 'react';

// Create the context
export const ExperienceContext = createContext();

// Create the provider component
export const ExperienceProvider = ({ children }) => {
  // Define the shared state and its initial value
  const [experienceLevel, setExperienceLevel] = useState('Intermediate');

  return (
    // Provide the value to the components in the hierarchy
    <ExperienceContext.Provider value={{ experienceLevel, setExperienceLevel }}>
      {children}
    </ExperienceContext.Provider>
  );
};
