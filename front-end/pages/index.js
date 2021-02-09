import React from 'react';
import PersonTable from '../components/PersonTable/PersonTable'
import styles from '../styles/Home.module.css'

const Home = (props) => {
  return (
    <PersonTable persons={props.persona} />
  )
}

Home.getInitialProps = () => {
  return (
    {
      persona: [
        {
          id: 1,
          nombre: 'Andrés',
          apellido: 'Betancourt',
          extranjeria: 'V',
          numero_ci: 30258079,
          edad: 19
        },
        {
          id: 2,
          nombre: 'Alberto',
          apellido: 'Carrillo',
          extranjeria: 'V',
          numero_ci: 27187468,
          edad: 20
        },
        {
          id: 3,
          nombre: 'Blaubach',
          apellido: 'Carrillo',
          extranjeria: 'V',
          numero_ci: 6941567,
          edad: 54
        },
        {
          id: 4,
          nombre: 'Carmen',
          apellido: 'Vaquero',
          extranjeria: 'V',
          numero_ci: 5975091,
          edad: 57
        },
        {
          id: 5,
          nombre: 'John',
          apellido: 'Doe',
          extranjeria: 'E',
          numero_ci: 99999999,
          edad: 80
        },
        {
          id: 6,
          nombre: 'Jane',
          apellido: 'Doe',
          extranjeria: 'E',
          numero_ci: 99999998,
          edad: 82
        },
      ]
    }
  )
}

export default Home;