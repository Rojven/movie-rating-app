export const fetchMovies =async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQ0ZjgwMTUxZWM1YWI1MjY1OTcwMmQ3YzY4OTU2MyIsInN1YiI6IjY1NjE3NjhjN2RmZGE2NTkzMTc0MTA3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MN_sgMOgvr7G5BCDWDajSM5ExOYeIp0rWCTatQTtLts'
        },
    })

    return res.json()
}

export const fetchTvShows =async () => {
    const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=ru-RU&page=1', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQ0ZjgwMTUxZWM1YWI1MjY1OTcwMmQ3YzY4OTU2MyIsInN1YiI6IjY1NjE3NjhjN2RmZGE2NTkzMTc0MTA3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MN_sgMOgvr7G5BCDWDajSM5ExOYeIp0rWCTatQTtLts'
        },
    })

    return res.json()
}