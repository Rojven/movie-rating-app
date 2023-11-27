import { Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { DisplayType } from './'

interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date: string;
}

interface IColumnDisplayProps {
    data: DisplayData[];
    displayType: DisplayType;
}

const ColumnDisplay = ({ data, displayType }: IColumnDisplayProps) => {
    return (
        <Grid columns={5} stackable centered verticalAlign='top' padded='vertically'>
            {
                data.map(({ id, poster_path, title, name, release_date, vote_average, overview }: DisplayData) => {
                    return (
                        <Grid.Column key={id}>
                            <Card.Group>
                                <Link to={`/${displayType === DisplayType.Movies ? 'movie' : 'tvshow'}/${id}`}>
                                    <Card 
                                        fluid 
                                        image={`https://image.tmdb.org/t/p/original/${poster_path}`} 
                                        header={displayType === DisplayType.Movies ? title : name} 
                                        meta={`Дата выхода: ${release_date} | Оценка: ${vote_average}/10`} 
                                        description={overview.length >= 150 ? `${overview.slice(0, 150)}...` : overview}
                                    />
                                </Link>
                            </Card.Group>
                        </Grid.Column>
                    )
                })
            }
        </Grid>
    )
}

export default ColumnDisplay