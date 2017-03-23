import { connect } from 'react-redux'
import AppPage from '../components/AppPage'
import { fetchNews, editSite, saveSite } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        news: state.news,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: () => {
        dispatch(fetchNews());
    },
    onClickEdit: (index) => {
        dispatch(editSite(index));
    },
    onClickSave: (index, site) => {
        console.log('save', index, site);
        dispatch(saveSite(index, site));
    }
  }
}

const AppPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppPage);

export default AppPageContainer