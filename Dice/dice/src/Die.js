import react,{Component} from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
    render(){
        return(
        <i class={`Die fas fa-dice-${this.props.face} ${this.props.rolling? 'shaking':''}`}></i>
        )
    }
}

export default Die;