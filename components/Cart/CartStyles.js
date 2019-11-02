import styled from 'styled-components';

const CartStyles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
    border-right: 1px solid #ccc;
  }

  table td,th {
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    padding: 10px 5px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  table th {
    background: teal;
    color: white;
  }

  table td {
    height: 100px;
  }

  table td:nth-child(5) a {
    color: #393939;
  }

  table td:nth-child(5) a:hover{
    color: teal;
    cursor: pointer;
  } 

  table td:nth-child(6) i:hover{
    color: teal;
    cursor: pointer;
  } 

  table td img{
    max-width: 100px;
  }

  table td button {
    outline: none;
    border: none;
    padding: 10px;
    font-size: 15px;
    width: 40px;
  }

  table td button:hover {
    cursor: pointer;
    background: teal;
    color: white;
  }
`;

export default CartStyles;
