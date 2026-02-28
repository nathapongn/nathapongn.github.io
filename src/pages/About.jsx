// Components
import MediaBlock from "../components/primitives/MediaBlock/MediaBlock.jsx";
import Copy from "../components/primitives/Section/Copy.jsx";
import ColumnLayout from "../components/primitives/Section/ColumnLayout.jsx";

// Assets
import assets from "../../src/assets/site/index";

export default function About() {
    return(
        <>
            <main>
                <div className="About">
                        <MediaBlock 
                            title="A little about me"
                            description={`I'm Nat, a UX Designer based in Bangkok with a background in architecture with 4+ years of experience. 
                                
                            Currently at Agoda, designing for one of the world's leading digital travel platforms.`}
                            lightSrc={assets.about["1"]}
                        />

                        <MediaBlock 
                            title="What I value"
                            description={`Given my architecture background, I highly value organization and consistency. I believe a well-structured design system that is intuitive for designers and translatable to development is crucial for clarifying communication across teams, increasing efficiency, and minimizing discrepancies.
                            
                            To me, a strong design system follows a three-layer pyramid: Understanding, Flexibility, and Efficiency. With a solid understanding, components become clear and reusable; flexibility keeps them adaptable; and efficiency naturally follows.`
                            }
                            lightSrc={assets.about["2"]}
                            mirror={true}
                        />
                </div>
            </main> 
        </>
    )
}