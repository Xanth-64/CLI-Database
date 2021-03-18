import PersonTable from '../components/PersonTable/PersonTable'
import BuildingTable from '../components/BuildingTable/BuildingTable'
import SpaceTable from '../components/SpaceTable/SpaceTable'
import { useQuery, gql } from '@apollo/client'
const GET_PEOPLE = gql`
    query getPersonas {
        getPersonas {
            nombre
            apellido
            extranjeria
            numero_ci
            fecha_nac
        }

        getEdificios {
            nombre_conjunto
            numero
        }

        getAreas {
            estado
            tipo
            numero
        }
    }
`

function readCRUD(props) {
    const { loading, error, data } = useQuery(GET_PEOPLE)
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
