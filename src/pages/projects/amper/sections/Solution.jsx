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
                lightSrc={assets.home.light.video}
                darkSrc={assets.home.dark.video}
                caption={copy.home.caption}
                title={copy.home.title}
                description={copy.home.description}
                padding="roomy"
            />
            <ColumnLayout>
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-2"].image}
                    description={copy.home.states[0]}
                    cols={6}
                    withWrapper={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-3"].image}
                    description={copy.home.states[1]}
                    cols={6}
                    withWrapper={false}
                />
            </ColumnLayout>
            <MediaBlock 
                mediaType="video"
                mirror
                lightSrc={assets.map.light.video}
                darkSrc={assets.map.dark.video}
                caption={copy.map.caption}
                title={copy.map.title}
                description={copy.map.description}
            />
            <MediaBlock 
                mediaType="video"
                lightSrc={assets.station.light.video}
                darkSrc={assets.station.dark.video}
                caption={copy.station.caption}
                title={copy.station.title}
                description={copy.station.description}
            />
            <MediaBlock 
                mediaType="video"
                mirror
                lightSrc={assets.vehicle.light.video}
                darkSrc={assets.vehicle.dark.video}
                caption={copy.addVehicle.caption}
                title={copy.addVehicle.title}
                description={copy.addVehicle.description}
            />
            <SectionHeader 
                title={copy.chargeJourney.title}
                description={copy.chargeJourney.description}
            />
            <VisualBlock
                lightSrc={assets.providers.image}
            />
            <MediaBlock 
                mediaType="video"
                lightSrc={assets["sam-1"].light.video}
                darkSrc={assets["sam-1"].dark.video}
                caption={copy.chargeJourney.samples[0].caption}
                title={copy.chargeJourney.samples[0].title}
                description={copy.chargeJourney.samples[0].description}
                padding="roomy"
            />
            <MediaBlock 
                mediaType="video"
                lightSrc={assets["sam-2"].light.video}
                darkSrc={assets["sam-2"].dark.video}
                caption={copy.chargeJourney.samples[1].caption}
                title={copy.chargeJourney.samples[1].title}
                description={copy.chargeJourney.samples[1].description}
                padding="roomy"
            />
            <MediaBlock 
                mediaType="video"
                lightSrc={assets["sam-3"].light.video}
                darkSrc={assets["sam-3"].dark.video}
                caption={copy.chargeJourney.samples[2].caption}
                title={copy.chargeJourney.samples[2].title}
                description={copy.chargeJourney.samples[2].description}
                padding="roomy"
            />
            <MediaBlock 
                mediaType="video"
                lightSrc={assets["sam-4"].light.video}
                darkSrc={assets["sam-4"].dark.video}
                caption={copy.chargeJourney.samples[3].caption}
                title={copy.chargeJourney.samples[3].title}
                description={copy.chargeJourney.samples[3].description}
                padding="roomy"
            />
            <ColumnLayout>
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-4"].image}
                    description={copy.chargeJourney.showcase[0]}
                    cols={6}
                    withWrapper={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["showcase-5"].image}
                    description={copy.chargeJourney.showcase[1]}
                    cols={6}
                    withWrapper={false}
                />
            </ColumnLayout>
            <VisualBlock 
                lightSrc={assets["sheet-1"].light.image}
                darkSrc={assets["sheet-1"].dark.image}
            />
            <VisualBlock 
                lightSrc={assets["sheet-2"].light.image}
                darkSrc={assets["sheet-2"].dark.image}
            />
            <VisualBlock 
                lightSrc={assets["sheet-3"].light.image}
                darkSrc={assets["sheet-3"].dark.image}
            />
            <VisualBlock 
                lightSrc={assets["sheet-4"].light.image}
                darkSrc={assets["sheet-4"].dark.image}
            />
        </>
    );
}