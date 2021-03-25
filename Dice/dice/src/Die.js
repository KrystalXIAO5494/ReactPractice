import react,{Component} from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
    render(){
        return(
        <i class={`Die fas fa-dice-${this.props.face}`}></i>
        )
    }
}

export default Die;