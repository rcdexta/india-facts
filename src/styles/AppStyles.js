import styled, {injectGlobal} from 'styled-components'

const globals = injectGlobal`
  body {
  }

	* {
		font-family: Roboto, serif;
		font-weight: normal;
	}
	
	.fa {
	  margin-right: 3px;
	  vertical-align: middle
	}
`

export const RightContentDiv = styled.div`
	padding: 20px;
	
	p {
		font-family: Lato, serif;
	}
`

export default globals;