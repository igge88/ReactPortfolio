import React, { createContext, useState } from 'react'

export const ExperienceContext = createContext()

export const ExperienceProvider = ({ children }) => {
    const [experienceLevel, setExperienceLevel] = useState('Intermediate')

    return (
        <ExperienceContext.Provider
            value={{ experienceLevel, setExperienceLevel }}
        >
            {children}
        </ExperienceContext.Provider>
    )
}
