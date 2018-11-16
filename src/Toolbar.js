import { Flex } from 'rebass'
import styled from 'styled-components'
import { position, bottom, top } from 'styled-system'


const Toolbar = styled(Flex)`
${position}
${bottom}
${top}
`
Toolbar.displayName = 'Toolbar'
Toolbar.defaultProps = {
    alignItems: 'center',
    backgroundColor: 'black'
}

export default Toolbar