import React from 'react';
import axios from 'axios'
import './main.css';

export class MainMenu extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = { 
            userName: 'github',
            user: {} ,
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange = event => {
        this.setState({
            loading: true
        }) 
        if(this.state.userName == ''){
            window.alert('Preencha o Campo')
        } else{
            axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
            .catch((e) => window.alert('Usuario não Encontrado'))
        }        
        }

    componentDidMount() {
        this.handleChange()
    }

    render(){
        return(
            <main>
            <div className="gitUser">
                <input type="text" 
                        placeholder="Digite seu Usuario Github" 
                        onChange={e => this.setState({
                            userName: e.target.value}) 
                        }                            
                        value={this.state.userName}/>
                <button onClick={this.handleChange}>Pesquisar</button>
            </div>
            <div className="user">
                <ul>
                    <li><img src={this.state.user.avatar_url } /></li>
                    <li>{this.state.user.name}</li>
                </ul>
                    <a href={this.state.user.html_url} target="_blanck">Repositorio: {this.state.user.login}</a>
            </div>
            </main>
        )
    }
}

export default class Resp extends React.Component{
    render(){ 
            return(
                <MainMenu />
            )
        }
    } 