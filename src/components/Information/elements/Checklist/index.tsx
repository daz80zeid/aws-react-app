import React, {FC} from 'react';

interface IChecklist {
    title: string
    description: string
    id: string
    checklistItems: string[]
}

export const Checklist:FC<IChecklist> = ({title, description, id, checklistItems}) => {
    return (
        <section className="checklist" id={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {checklistItems.map((item, index) => <li key={index}>{item}</li> )}
            </ul>
        </section>
    );
};
