import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
/*
function Title (props) {
  return <h1> {props.children} </h1>
}*/

const BackgroundImage = styled.div`
  background-image: url( ${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  `;  
  
  
  
  
const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
      margin: auto;
      padding: 15px;
    }
  `;




         /* <Widget.header>
          </Widget.header>*/
          
export default function Home() {
            return (
              <BackgroundImage>
      < QuizContainer>
        <Widget>
        <Widget.Content>

      <Widget.Header>
         <h1> teste</h1>
       </Widget.Header>

          <p>texto para o pargrafor que sera aprensentado</p>
        </Widget.Content>
        </Widget>
      </QuizContainer>

      < QuizContainer>
        <Widget>
        <Widget.Content>

          <p>texto para o pargrafor que sera aprensentado</p>
        </Widget.Content>
        </Widget>
      </QuizContainer>





    </BackgroundImage>

  )


}
