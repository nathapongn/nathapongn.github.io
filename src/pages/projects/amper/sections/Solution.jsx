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
            <ColumnLayout>
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-2"].image}
                    darkSrc={assets["showcase-2"].image}
                    description={copy.home.states[1]}
                    cols={6}
                    withWrapper={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-3"].image}
                    darkSrc={assets["showcase-3"].image}
                    description={copy.home.states[1]}
                    cols={6}
                    withWrapper={false}
                />
            </ColumnLayout>
            <MediaBlock 
                mediaType="video"
                mirror
                lightSrc=""
                darkSrc=""
                caption={copy.map.caption}
                title={copy.map.title}
                description={copy.map.description}
            />
            <MediaBlock 
                mediaType="video"
                lightSrc=""
                darkSrc=""
                caption={copy.station.caption}
                title={copy.station.title}
                description={copy.station.description}
            />
            <MediaBlock 
                mediaType="video"
                mirror
                lightSrc=""
                darkSrc=""
                caption={copy.addVehicle.caption}
                title={copy.addVehicle.title}
                description={copy.addVehicle.description}
            />
        </>
    );
}