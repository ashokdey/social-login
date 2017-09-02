import React, {Component} from 'react';
import {connect} from 'react-redux';

const Preloader = () => {
  return(
    <div className="row">
      <div className="col s6 offset-s5">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
    
          <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
    
          <div className="spinner-layer spinner-yellow">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
    
          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>        
    </div>
  );
}

const LoginTab = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3 l6 offset-l3">
        <div className="card">
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          
          <div className="card-content grey lighten-4">
            <div id="google">
              <div className="row">
                <div className="col s12 m6 l6 offset-m3 offset-l3">
                    <a href="auth/google" style={{background: '#dd4b39', color:'#fff', borderRadius: '2%', padding: '5%', minHeight: '45px', minWidth: '130px', display:'block'}}>
                        Login with Google
                    </a>
                </div>
              </div>
            </div>
            <br/>
            <div id="facebook">
              <div className="row">
                  <div className="col s12 m6 l6 offset-m3 offset-l3">
                      <a href="auth/facebook" style={{background: '#3b5998', color:'#fff', borderRadius: '2%', padding: '5%', minHeight: '45px', minWidth: '130px', display:'block'}}>
                          Login with Facebook
                      </a>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

class Landing extends Component{
  _renderContent(){
    switch(this.props.auth){
      case null: 
        return <Preloader/>
      
      case false:
        return <LoginTab/>
      
      default: 
        return <h2>Welcome {this.props.auth.name}</h2>
    }
  }

  render(){
    return(
      <div className="container" style={{marginTop:'15vh'}}>
        <div className="row center">
          <div className="col s6 offset-s3">
            <h2>React Tunes</h2>
            <p>Listen to your iTunes music</p>
          </div> 
        </div>
        {this._renderContent()}
      </div>
    );
  }
}

function mapStateToProps({auth}){
  // param is like state.auth written as {auth} using desctructuring
  return {auth} // similar to auth: auth
}


export default connect(mapStateToProps)(Landing);