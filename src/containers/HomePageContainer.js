import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { fetchNews } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickGetNews: () => {
            dispatch(fetchNews())
                .then(() => 
                    console.log('a')
                )
        }
    }
}

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePageContainer