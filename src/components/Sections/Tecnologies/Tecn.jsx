import React from 'react'
import { Tencology } from './array'
import {Tencnologycontainer, CardContainer, Container} from "./Styles"
export default function Tecn() {
  return (
    <Tencnologycontainer id='Tech'>
      <div className='container'>
        <div className='containerTitle'>
        <h3>Tecnologias</h3>
        <div></div>
      </div>
        <Container>
            {
                Tencology.map((el) => (
                     <CardContainer key={el.id}>
                        <img src={el.image} alt={el.name}/>
                        <div className="card-text">
                        <span >{el.name}</span>
                        </div>
                    </CardContainer> 
                )
                   
                    
                    
                )
            }
        </Container>
      </div>
      
    </Tencnologycontainer>
  )
}
