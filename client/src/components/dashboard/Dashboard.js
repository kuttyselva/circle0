import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';
import Spinner from '../common/Spinner';
class Dashboard extends Component{
    componentDidMount(){
        this.props.getCurrentProfile();
    }
    render(){
        const {user} =this.props.auth;
        const{profile,loading} =this.props.profile;

        let dashboardContent;
        if(profile===null || loading)
            dashboardContent= <Spinner/>
        else
            dashboardContent= <h4>hello</h4>
        return(
<div className="dashboard">
<div className="container">
<div className="row">
<div className="col-md-12">
<h1 className="display-4 text-center">Dashboard</h1>
{dashboardContent}

</div>
</div>
</div>
</div>
        );
    }
}
Dashboard.propTyper={
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired
};
const mapStateToProps= state =>({
    profile:state.profile,
    auth:state.auth
});
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);