import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { mutationLogin } from './mutation'

const Auth = () => {

    const navigate = useNavigate()

    const { mutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: mutationLogin,
        onSuccess: (data) => {
          localStorage.setItem('guest_session_id', data?.guest_session_id)
          navigate('/')
        },
        onError: (error) => {
            throw new Error(`Ошибка мутации: ${error}`)
        }
    })

    const handleLogin = () => {
        mutate()
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Login as a Guest below
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Button color='teal' size='large' fluid onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Auth