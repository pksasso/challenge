import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
html{
  font-size: 62.5%; /* 1rem = 10px*/
  background-color: #f2f2f2;

  @media only screen and (max-width:770px) {
          font-size: 55%;
      }
  @media only screen and (max-width:500px) {
          font-size: 50%;
      }
  @media only screen and (max-width:400px) {
          font-size: 40%;
      }
      
}
`;
