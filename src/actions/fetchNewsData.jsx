const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST
});

const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news
});

const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error
});

export const fetchNewsData = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());
        try {
            const apiKey = 'adIUJJMWg4nfnv4tqzP138kuiBROSGBH';
            const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            dispatch(fetchNewsSuccess(data));
        } catch (error) {
            dispatch(fetchNewsFailure(error.message));
        }
    };
};

