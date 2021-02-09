import React, { useState, useRef } from 'react'
import { Card, Form, Button, FormLabel, Alert } from 'react-bootstrap'
import { useMutation, gql } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
const CREATE_PERSONA_MUTATION = gql`
    mutation createPersona(
        $nombre: String!
        $apellido: String!
        $extranjeria: String!
        $numero_ci: Int!
        $edad: Int!
    ) {
        createPersona(
            nombre: $nombre
            apellido: $apellido
            extranjeria: $extranjeria
            numero_ci: $numero_ci
            edad: $edad
        ) {
            nombre
            apellido
            extranjeria
            numero_ci
            edad
        }
    }
`
function PersonaForm() {
    const [createPersona, { loading }] = useMutation(CREATE_PERSONA_MUTATION)
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: 0,
        extranjería: '',
        numero_ci: 0,
    })
    const name = useRef()
    const lastName = useRef()
    const ci = useRef()
    const age = useRef()
    const venezuelan = useRef()
    const foreign = useRef()
    const handleChanges = (e) => {
        setFormData(e)
    }
    const handleSubmit = async (data) => {
        let origin = 'V'
        data.preventDefault()
        if (
            name.current.value.toString().length > 20 ||
            lastName.current.value.toString().length > 20
        ) {
            console.log('mayor a 20')
        } else if (age.current.value < 0) {
            console.log('edad neg')
        } else {
            if (!venezuelan.current.checked) {
                origin = 'E'
            }
            console.log(
                'name: ',
                name.current.value,
                'Apellidp: ',
                lastName.current.value,
                'Edad: ',
                age.current.value,
                'nacionalidad: ',
                origin,
                'Ci: ',
                ci.current.value
            )
            const formdata = {
                nombre: name.current.value,
                apellido: lastName.current.value,
                edad: parseInt(age.current.value),
                extranjeria: origin,
                ci: parseInt(ci.current.value),
            }
            console.log(formdata)
            await createPersona({
                variables: {
                    nombre: formdata.nombre,
                    apellido: formdata.apellido,
                    edad: formdata.edad,
                    extranjeria: formdata.extranjeria,
                    numero_ci: formdata.ci,
                },
            }).catch((err) => {
                console.log('caimos aqui')
                console.log(err)
            })
            console.log('something happened')
        }
    }
    return (
        <>
            <div className="wrapper">
                {' '}
                <Card className="Card">
                    <Card.Body>
                        {' '}
                        <h2 className="text-center mb4"> Crear Persona</h2>
                    </Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <FormLabel>Nombre </FormLabel>
                            <Form.Control type="text" required ref={name} />
                        </Form.Group>
                        <Form.Group id="lastName">
                            <FormLabel> Apellido </FormLabel>
                            <Form.Control type="text" required ref={lastName} />
                        </Form.Group>
                        <Form.Group id="ci">
                            <FormLabel>Cédula de Identidad </FormLabel>
                            <Form.Control
                                type="number"
                                placeholder="Cedula de identidad"
                                ref={ci}
                            />
                        </Form.Group>
                        <Form.Group id="age">
                            <FormLabel>Edad</FormLabel>
                            <Form.Control
                                type="number"
                                placeholder="Edad"
                                ref={age}
                            />
                        </Form.Group>
                        <Form.Group id="age">
                            <FormLabel>Venezolano</FormLabel>
                            <Form.Control
                                type="radio"
                                placeholder="Venezolano"
                                value="V"
                                name="formRadius"
                                id="option1"
                                ref={venezuelan}
                            />
                            <FormLabel>Extranjero</FormLabel>
                            <Form.Control
                                type="radio"
                                placeholder="Extranjero"
                                value="E"
                                name="formRadius"
                                id="option2"
                                ref={foreign}
                            />
                        </Form.Group>
                        <Button type="submit" className="w-100">
                            Generar Persona
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    )
}
export default PersonaForm
