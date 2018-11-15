import { Flex } from 'rebass'
import styled from 'styled-components'
import {position } from 'styled-system'


const Toolbar = styled(Flex)`
${position}
`
Toolbar.displayName = 'Toolbar'
Toolbar.defaultProps = {
    alignItems: 'center',
    backgroundColor: 'black'
}

export default Toolbar