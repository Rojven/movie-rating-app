import { useState } from 'react'
import { Button, Loader } from 'semantic-ui-react'
import { useQuery } from '@tanstack/react-query'
import ColumnDisplay from './ColumnDisplay'
import { fetchMovies, fetchTvShows } from './query'

export enum DisplayType {
    Movies = 'movies',
    TvShows = 'tvshows',
}

const Home = () => {

    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies)

    const { data: movieDate, isLoading: isLoadingMovies } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies
    })

    const { data: tvShowDate, isLoading: isLoadingTvShows } = useQuery({
        queryKey: ['tvshows'],
        queryFn: fetchTvShows
    })

    return (
        <div style={{ marginTop: 50, height: 'auto' }}>
            <Button.Group>
                <Button color={displayType === DisplayType.Movies ? 'teal' : undefined} onClick={() => setDisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button color={displayType === DisplayType.TvShows ? 'teal' : undefined} onClick={() => setDisplayType(DisplayType.TvShows)}>
                TvShows
                </Button>
            </Button.Group>
            {
                isLoadingMovies || isLoadingTvShows ? (
                    <Loader active />
                )
                :
                (
                    <div style={{ marginTop: 20 }}>
                        {
                            displayType === DisplayType.Movies ?
                            <ColumnDisplay data={movieDate.results} displayType={DisplayType.Movies}/>
                            :
                            <ColumnDisplay data={tvShowDate.results} displayType={DisplayType.TvShows}/>
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default Home