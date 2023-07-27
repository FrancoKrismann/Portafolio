import React from 'react'
import { Proyectscontainer, ProyectCard } from './Styles'
import { Proyectos } from './data'

export default function Proyects() {
  return (
    <Proyectscontainer id='Proyects'>
        <div className='container'>
        <div className='containerTitle'>
        <h3>Proyectos</h3>
        <div></div>
      </div>
            <div className='containerCards'>
                    {
                        Proyectos.map((el) => (
                            <ProyectCard key={el.id}>
                                <div className='container-img'>
                                    <a href={el.URL} target='_blank' rel='noopener noreferrer'>
                                <img src={el.image} alt={el.name}/>
                                </a>
                                </div>
                                <div className='container-Card-Title'>
                                <h3>{el.name}</h3>
                                
                                </div>
                                
                            </ProyectCard>
                        ))
                    }
            </div>
        </div>
    </Proyectscontainer>
  )
}
