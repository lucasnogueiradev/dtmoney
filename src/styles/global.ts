import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
    --background: #f0f2f5;
    --red:#E52E4D;
    --blue:#5429CC;
    --blue-light:#6933FF;
    --text-title:#363F5f;
    --text-body: #969cb3;
    --shape:#ffffff;
    --green:#33cc95;

 }

 * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;

 }

 // font padrão 16px (Desktop)
 html {
    @media (max-width: 1080px){
        font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
        font-size: 87.75%; // 14px
    }
 }

 //REM : 1rem = font-size = 16px
 
 body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

 }

 body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
 }

 h1, h2, h3, h4, h5, h6, strong{
font-weight: 600;


 }
 button {
    cursor: pointer;
 }

 [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
 }


.react-modal{
background: rgba(0, 0, 0, 0.5);
position: fixed;
top:0;
left: 0;
right: 0;
bottom:0;
display: flex;
align-items: center;
justify-content: center;

}

.modal-content{

width: 100%;
max-width: 576px;
background: var(--background);
padding: 3rem;
position: relative;
border-radius: 0.25rem;

}
@media (max-width: 800px) {
   
   
   .modal-content{ 
    width: 90%;
    max-width: 356px;
    background: var(--background);
    padding: 1rem;
    position: fixed;
    border-radius: 0.25rem;
   left: 0;
   margin-left: 10px;
   align-items: center;
   justify-content: center;
   top: 7rem;

  }


}



button[type="button"] {
   float: right;
   margin-top: 10px;
    border: 0;
  }



`;
