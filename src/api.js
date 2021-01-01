const base_url = "https://api.rawg.io/api/";

//getting date 
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const currentYear = new Date().getUTCFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
    return `${base_url}${popular_games}`;
};
export const upcomingGamesURL = () => {
    return `${base_url}${upcoming_games}`;
};
export const newGamesURL = () => {
    return `${base_url}${new_games}`;
};
export const gameDetailsURL = (gameId) => {
    return `${base_url}games/${gameId}`;
};
export const gameScreenshotsURL = (gameId) => {
    return `${base_url}games/${gameId}/screenshots`;
};
export const searchGameURL = (gameName) => {
    return `${base_url}games?search=${gameName}&page_size=9`;
};