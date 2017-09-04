import React from 'react';

const LoginTab = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3 l6 offset-l3">
        <div className="card">
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sit consequatur delectus, eum molestiae vel sunt necessitatibus sapiente sint quibusdam laudantium eius architecto porro assumenda quis qui. Dolores, eveniet numquam!</p>
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

export default LoginTab;