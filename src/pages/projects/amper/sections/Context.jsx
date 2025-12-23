// Components
import MediaBlock from '../../../../components/primitives/MediaBlock/MediaBlock.jsx';
import ColumnLayout from '../../../../components/primitives/Section/ColumnLayout.jsx';
import Copy from '../../../../components/primitives/Section/Copy.jsx';
import Divider from '../../../../components/primitives/Divider/Divider.jsx';

// Patterns
import VisualBlock from '../../../../components/patterns/VisualBlock.jsx';

// Assets
import assets from '../../../../assets/projects/amper/index.js';
import copy from '../../../../assets/projects/amper/copy.js';
import SectionHeader from '../../../../components/patterns/SectionHeader.jsx';

export default function Context() {
    return (
        <>
            <MediaBlock
                lightSrc={assets.problem.image}
                caption={copy.problem.caption}
                title={copy.problem.title}
                description={copy.problem.description}
            />
            <ColumnLayout
                showLabel={true}
                title={copy.stats.title}
            >
                <Copy
                    media={true}
                    mediaSrc={assets["icon-1"].image}
                    titleSize="text-xxl"
                    title={copy.stats.items[0].value}
                    description={copy.stats.items[0].description}
                    textAlign='left'
                    background={true}
                    cols={"4"}
                />
                <Copy
                    media={true}
                    mediaSrc={assets["icon-2"].image}
                    titleSize="text-xxl"
                    title={copy.stats.items[1].value}
                    description={copy.stats.items[1].description}
                    textAlign='left'
                    background={true}
                    cols={"4"}
                />
                <Copy
                    media={true}
                    mediaSrc={assets["icon-3"].image}
                    titleSize="text-xxl"
                    title={copy.stats.items[2].value}
                    description={copy.stats.items[2].description}
                    textAlign='left'
                    background={true}
                    cols={"4"}
                />
            </ColumnLayout>
            <MediaBlock
                mirror
                lightSrc={assets.objective.image}
                caption={copy.objective.caption}
                title={copy.objective.title}
                description={copy.objective.description}
            />
            <SectionHeader
                title={copy.providerStudy.title}
            />
            <VisualBlock
                showLabel={false}
                lightSrc={assets["provider-1"].light.image}
                darkSrc={assets["provider-1"].dark.image}
            />
            <VisualBlock
                showLabel={false}
                lightSrc={assets["provider-2"].light.image}
                darkSrc={assets["provider-2"].dark.image}
            />
            <ColumnLayout
                showLabel={true}
                title={copy.pricing.title}
                description={copy.pricing.description}
            >
                <Copy
                    media={true}
                    mediaSrc={assets["pricing-1"].image}
                    titleSize='text-l strong'
                    title={copy.pricing.items[0].title}
                    description={copy.pricing.items[0].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                >
                    <Divider margin />
                    <Copy
                        orientation='vertical'
                        textAlign='left'
                        titleSize="text-m strong"
                        title={copy.pricing.provider}
                        descriptionSize="text-m"
                        description={copy.pricing.items[0].providers.join(", ")}
                    />
                </Copy>
                <Copy
                    media={true}
                    mediaSrc={assets["pricing-2"].image}
                    titleSize='text-l strong'
                    title={copy.pricing.items[1].title}
                    description={copy.pricing.items[1].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                >
                    <Divider margin />
                    <Copy
                        orientation='vertical'
                        textAlign='left'
                        titleSize="text-m strong"
                        title={copy.pricing.provider}
                        descriptionSize="text-m"
                        description={copy.pricing.items[1].providers.join(", ")}
                    />
                </Copy>
                <Copy
                    media={true}
                    mediaSrc={assets["pricing-3"].image}
                    titleSize='text-l strong'
                    title={copy.pricing.items[2].title}
                    description={copy.pricing.items[2].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                >
                    <Divider margin />
                    <Copy
                        orientation='vertical'
                        textAlign='left'
                        titleSize="text-m strong"
                        title={copy.pricing.provider}
                        descriptionSize="text-m"
                        description={copy.pricing.items[2].providers.join(", ")}
                    />
                </Copy>
                <Copy
                    media={true}
                    mediaSrc={assets["pricing-4"].image}
                    titleSize='text-l strong'
                    title={copy.pricing.items[3].title}
                    description={copy.pricing.items[3].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                >
                    <Divider margin />
                    <Copy
                        orientation='vertical'
                        textAlign='left'
                        titleSize="text-m strong"
                        title={copy.pricing.provider}
                        descriptionSize="text-m"
                        description={copy.pricing.items[2].providers.join(", ")}
                    />
                </Copy>
            </ColumnLayout>
            <ColumnLayout
                showLabel={true}
                title={copy.oper.title}
                description={copy.oper.description}
            >
                <Copy
                    media={true}
                    mediaSrc={assets["oper-1"].image}
                    titleSize='text-l strong'
                    title={copy.oper.items[0].title}
                    description={copy.oper.items[0].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                />
                <Copy
                    media={true}
                    mediaSrc={assets["oper-2"].image}
                    titleSize='text-l strong'
                    title={copy.oper.items[1].title}
                    description={copy.oper.items[1].description}
                    textAlign='left'
                    background={true}
                    cols={"6"}
                />
            </ColumnLayout>
            <VisualBlock
                lightSrc={assets.wireframe.light.image}
                darkSrc={assets.wireframe.dark.image}
            />
        </>
    )
}