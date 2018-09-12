import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import background from './images/login-bg.jpg';
import loginLogo from './images/login-icon-logo.png';


class App extends Component {

    state = {
        username: 'Guest'
    };

    handleChange = (e) => {
        this.setState({username: e.target.value}, () => {

            if (this.state.username !== '') {
                document.querySelector('.get-started').classList.add('active');
            } else {
                document.querySelector('.get-started').classList.remove('active');
            }
        });
    };

    render() {
        return (
            <div className="App" style={{backgroundImage: `url(${background})`}}>
                <header className="header">
                    <img src={loginLogo} alt="#" className={'logo'}/>
                    <div className="h1 app-name">
                        Chat
                    </div>
                </header>

                <form className="auth">
                    <div className="input-group">
                        <label htmlFor="username"> username</label>
                        <input type="text" required={true} id={'username'} onChange={e => {
                            this.handleChange(e);
                        }}/>
                    </div>

                    <Link to={{pathname: '/chat', state: {username: this.state.username}}} className={'get-started'}
                          onClick={(e) => {
                              for (let i = 0; i < this.props.users.length; i++) {
                                  if (this.props.users[i].username === this.state.username) {
                                      document.querySelector('.get-started').classList.remove('active');
                                      e.preventDefault();
                                      return false;
                                  }
                              }

                              this.props.onAddUser(this.state.username)
                          }}>

                        Get Started
                        <span className="icon">▶</span>
                    </Link>

                </form>
            </div>
        );
    }
}

export default App;