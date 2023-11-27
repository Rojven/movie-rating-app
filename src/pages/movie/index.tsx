import { Segment, Header, Loader, Grid, Image, List } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetails } from './query'

const Movie = () => {

    const { id } = useParams<string>()

    const { data, isLoading } = useQuery({
        queryKey: ['movie'],
        queryFn: () => fetchMovieDetails(id)
    })

    if (!id) {
        return(
            <div>Invalid Movie ID</div>
        )
    }
    if (isLoading) {
        return (
            <Loader active/>
        )
    }

    return(
        <div style={{ marginTop: 50 }}>
            <Segment>
                <Header>
                    {data?.title}
                </Header>
                <Grid columns={2} divided textAlign='left' style={{ marginTop: 20 }}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Image size='medium' centered src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} />
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <List>
                                <List.Item>
                                    <List.Header>
                                        Возрастное ограничение 18+: 
                                    </List.Header>
                                    {data.adult ? 'Да' : 'Нет'}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Бюджет: 
                                    </List.Header>
                                    {data.budget}$
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Прибыль: 
                                    </List.Header>
                                    {data.revenue}$
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Жанр: 
                                    </List.Header>
                                    {data.genres.map((genre: any) => genre.name).join(', ')}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        IMDB ID: 
                                    </List.Header>
                                    {data.imdb_id}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Производство: 
                                    </List.Header>
                                    {data.production_companies.map((company: any) => company.name).join(', ')}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Страна: 
                                    </List.Header>
                                    {data.production_countries.map((country: any) => country.name).join(', ')}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Дата выхода: 
                                    </List.Header>
                                    {data.release_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Рейтинг: 
                                    </List.Header>
                                    {data.vote_average}/10 IMDB
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        Описание: 
                                    </List.Header>
                                    {data.overview}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default Movie