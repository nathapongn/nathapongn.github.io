// Components
import SectionHeader from '../../../../components/patterns/SectionHeader.jsx'

// Assets
import copy from '../../../../assets/projects/nimbus/copy.js'

export default function Reflection() {
    return(
        <SectionHeader
            title={copy.reflection.title}
            description={copy.reflection.description}
            fullWidth={true}
            textAlign="left"
            className="section-header"
        />
    )
}