import styled, {injectGlobal} from 'styled-components'

const globals = injectGlobal`
  body {
  }
  
  a {
    text-decoration: none;
    color: #b8b7ad;
    width: 100%;
  }

	* {
		font-family: Roboto, serif;
		font-weight: normal;
	}
`

export const RightContentDiv = styled.div`
	padding: 20px;
	
	p {
		font-family: Lato, serif;
	}
`

export default globals;