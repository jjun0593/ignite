import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import Game from '../components/Game';
import { upcomingGamesURL } from '../api';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    const { popular, newGames, upcomingGames } = useSelector(state => state.games);

    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map(upcomingGame => {
                    return <Game
                        name={upcomingGame.name}
                        released={upcomingGame.released}
                        id={upcomingGame.id}
                        image={upcomingGame.background_image}
                        key={upcomingGame.id} />;
                })}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
 padding: 0rem 5rem;
 h2 {
 padding: 5rem 0rem;
 }
`;
const Games = styled(motion.div)`
 min-height: 80vh;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
 grid-column-gap: 3rem;
 grid-row-gap: 5rem;
`;

export default Home;