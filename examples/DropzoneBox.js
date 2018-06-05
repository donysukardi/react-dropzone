// eslint-disable-next-line
import styled from 'styled-components'

const DropzoneBox = styled.div`
  width: 200px;
  height: 200px;
  padding: 8px;
  border-width: 2px;
  border-color: rgb(102, 102, 102);
  border-style: dashed;
  border-radius: 5px;

  ${props => props.isDragReject && `border-color: red`};
  ${props => props.isDragAccept && `border-color: green`};
`

export default DropzoneBox
