// inside of this component i don't want to repeat the h3 element 3 times the length of the array is 3 
// i want to render it only one time for the next two times 
import { PDFToHTMLHOWTOType } from '@/src/how-to';
import { ToolState } from '@/src/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const HowTo = ({ howTo, alt }: { howTo: PDFToHTMLHOWTOType, alt: string; }) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    useEffect(() => {
        console.log(stateShowTool)
    }, [stateShowTool])
    return (
        <>
            <div className={`row align-items-center py-3${stateShowTool ? "" : " d-none"}`}>
                <div className="col">
                    <picture>
                        <source srcSet="/images/pdf-to-html-ad-xs.png" media="(max-width: 575px)" />
                        <source srcSet="/images/pdf-to-html-ad-md.png" media="(min-width: 576px) and (max-width: 1199px)" />
                        <source srcSet="/images/pdf-to-html-ad-xl.png" media="(min-width: 1200px)" />
                        <img src="/pdfequips.png" className="img-fluid" alt={alt} title={alt} />
                    </picture>

                </div>
                <div className="col">
                    <div itemScope itemType="http://schema.org/HowTo">
                        <h2 itemProp="name">{howTo.name}</h2>
                        <p itemProp="description">{howTo.description}</p>
                        {howTo.step.map((step, index) => (
                            <div key={index} itemScope itemType="http://schema.org/HowToStep">
                                {index === 0 ? <h3 itemProp="name">{step.name}</h3> : index === 1 ? <h4 className="h3" itemProp="name">{step.name}</h4> : <h6 className="h3" itemProp="name">{step.name}</h6>}

                                <p itemProp="text">{step.text}</p>
                                {step.substeps.map((substep, subIndex) => (
                                    <p key={subIndex}>{substep}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default HowTo;
