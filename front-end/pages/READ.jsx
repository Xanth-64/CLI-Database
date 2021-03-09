import PersonTable from '../components/PersonTable/PersonTable'
import BuildingTable from '../components/BuildingTable/BuildingTable'
import SpaceTable from '../components/SpaceTable/SpaceTable'
// import { useQuery, gql } from '@apollo/client'
// const GET_PEOPLE = gql`
//     query getPersonas {
//         getPersonas {
//             id
//             nombre
//             apellido
//             extranjeria
//             numero_ci
//             edad
//         }

//         getEdificios {
//             id
//             nombre_conjunto
//             numero
//         }

//         getAreas {
//             id
//             estado
//             tipo
//             numero
//             personaID
//             momento
//         }
//     }
// `

function readCRUD(props) {
    //const { loading, error, data } = useQuery(GET_PEOPLE)
    const data = {
        getPersonas: [],
        getEdificios: [],
        getAreas: [],
    }
    const loading = false
    const error = false
    console.log(data)
    if (loading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>Error</h1>
    }
    return (
        <article>
            <section>
                <PersonTable persons={data.getPersonas}></PersonTable>
            </section>
            <section>
                <BuildingTable buildings={data.getEdificios}></BuildingTable>
            </section>
            <section>
                <SpaceTable spaces={data.getAreas}></SpaceTable>
            </section>
        </article>
    )
}

// export async function getStaticProps() {
//     return {
//         props: {
//             persons,
//         },
//     }
// }

export default readCRUD
