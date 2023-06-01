import SubSection1 from './SubSection1';
import SubSection2 from './Subsection2';

const Section1 = () => {
    return (
        <div className="section1">
            <h1>Sección 1</h1>
            <p>Contenido de la Sección 1...</p>
            <SubSection1 />
            <SubSection2 />
        </div>
    );
}

export default Section1;