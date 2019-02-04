import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProfileHeader from './ProfileHeader';

import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
   
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  
      
  }

  render() {
    const { profile, loading } = this.props.profile;
    
   
    
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            
            <div className="col-md-6" />
          </div>
  
          <ProfileHeader profile={profile} />
          {/* <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          /> */}
          {profile.githubuser ? (
            <ProfileGithub username={profile.githubuser} />
          ) : null}
        </div>
      );
    }

    return (
      <div className="profile" style={{margin:'50px'}}>
       
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
          
          <br/><br/><br/><br/><br/>
        </div>
       
    
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,


};

const mapStateToProps = state => ({
  profile: state.profile,

 
  

});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
