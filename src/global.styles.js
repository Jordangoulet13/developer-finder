import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
	font-family: "Dela Gothic One", cursive;
	padding: 20px 60px;
	
	
		@media screen and (max-width: 850px) {
			padding: 10px;

			
		}
  }
  button {
	font-family: "Dela Gothic One", "Gill Sans MT", Calibri, "Trebuchet MS",
	  sans-serif;
  }
  textarea {
	font-family: "Dela Gothic One";
  }
  
  a {
	text-decoration: none;
	color: black;
  }
  
  * {
	box-sizing: border-box;
	
  }
`;
