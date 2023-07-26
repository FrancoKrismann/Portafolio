import React from 'react'
import { Tencology } from './array'
import {Tencnologycontainer, CardContainer, Container} from "./Styles"
export default function Tecn() {
  return (
    <Tencnologycontainer id='Tech'>
      <div className='containerTitle'>
        <h3>Tecnologias</h3>
      </div>
        <Container>
            {
                Tencology.map((el) => (
                     <CardContainer key={el.id}>
                        <img src={el.image} alt={el.name}/>
                        <span class="card-text">{el.name}</span>
                    </CardContainer> 
                )
                   
                    
                    
                )
            }
        </Container>
    </Tencnologycontainer>
  )
}
