import Wrapper from '../../../../components/primitives/Wrapper/Wrapper.jsx';
import Copy from '../../../../components/primitives/Section/Copy.jsx';

// Assets
import copy from '../../../../assets/projects/nimbus/copy.js'

export default function Reflection() {
    return(
        <Wrapper>
            <Copy
                title={copy.reflection.title}
                description={copy.reflection.description}
                fullWidth={true}
                textAlign="left"
                className="section-header"
            />
        </Wrapper>
    )
}