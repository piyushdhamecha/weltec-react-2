import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin: 10px;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
	border: 1px solid black;
	text-align: center;
	vertical-align: middle;

  th, td {
    border: 1px solid black;
    padding: 8px;
  }
  
  tbody th {
    background-color: #36c;
    color: #fff;
    text-align: left;
  }

  tbody tr:nth-child(even) th {
    background-color: #25c;
  }

  tbody tr:nth-child(even) {
    background-color: #eee;
  }
`