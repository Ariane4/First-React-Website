import React from 'react';
import './CodeLanguagesList.css';
import CodingLanguages from './ReuseCodeLanguages.js';

const BestCodeLanguages = () => {
    return (
        <ul className="styleUl">
            <CodingLanguages listItem="Vue" />
            <CodingLanguages listItem="React.js" />
            <CodingLanguages listItem="Angular" />
        </ul>
    )
}

export default BestCodeLanguages