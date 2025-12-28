// Components
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx"

// Copy
import copy from "../../../../assets/projects/amper/copy.js"

export default function Reflection() {
    return (
        <>
            <SectionHeader 
                    title={copy.reflection.title}
                    description={copy.reflection.description}
                    fullWidth
                    textAlign="left"
                    withWrapper={true}
            />
        </>
    )
}