import { connect } from 'react-redux'
import HomePage from '../components/HomePage'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}


const HomePageContainer = connect(
    mapStateToProps,    
)(HomePage);

export default HomePageContainer