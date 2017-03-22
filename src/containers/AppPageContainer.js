import { connect } from 'react-redux'
import AppPage from '../components/AppPage'
import { fetchNews } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        news: state.news,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: () => {
      dispatch(fetchNews());
    }
  }
}

const AppPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppPage);

export default AppPageContainer