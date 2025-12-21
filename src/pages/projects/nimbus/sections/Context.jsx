import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";
import Copy from "../../../../components/primitives/Section/Copy.jsx";

// Assets
import assets from '../../../../assets/projects/nimbus/index.js';
import copy from '../../../../assets/projects/nimbus/copy.js';

export default function Context() {
    return (
        <>
            <MediaBlock 
                    caption={copy.context.caption}
                    title={copy.context.title}
                    description={copy.context.description}
                    lightSrc={assets.problem.light.image}
                    darkSrc={assets.problem.dark.image}
                />
                <ColumnLayout
                    showLabel={true}
                    title={copy.user_research.header.title}
                    description={copy.user_research.header.description}
                >
                    <Copy
                        title={copy.user_research.item[0].title}
                        description={copy.user_research.item[0].description}
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title={copy.user_research.item[1].title}
                        description={copy.user_research.item[1].description}
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title={copy.user_research.item[2].title}
                        description={copy.user_research.item[2].description}
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                 </ColumnLayout>
                 <MediaBlock
                    title={copy.objective.title}
                    description={copy.objective.description}
                    lightSrc={assets.obj.light.image}
                    darkSrc={assets.obj.dark.image}
                 />
                <MediaBlock showLabel={false} lightSrc={assets.wireframe.light.image} darkSrc={assets.wireframe.dark.image} />
                <MediaBlock showLabel={false} lightSrc={assets.sitemap.light.image} darkSrc={assets.sitemap.dark.image} />
        </>
    )
}