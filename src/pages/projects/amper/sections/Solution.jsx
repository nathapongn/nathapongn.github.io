// Components
import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";

// Patterns
import VisualBlock from "../../../../components/patterns/VisualBlock.jsx";
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx";
import ShowcaseBlock from "../../../../components/patterns/ShowcaseBlock.jsx";

// Assets
import assets from '../../../../assets/projects/amper/index.js';
import copy from '../../../../assets/projects/amper/copy.js';

export default function Solution() {
    return (
        <>
            <SectionHeader title={copy.design_solution} />
            <VisualBlock lightSrc={assets["showcase-1"].image} />
            <MediaBlock 
                mediaType="video"
                lightSrc=""
                darkSrc=""
                caption={copy.home.caption}
                title={copy.home.title}
                description={copy.home.description}
            />
        </>
    );
}