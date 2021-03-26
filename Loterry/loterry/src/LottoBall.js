import react,{Component} from 'react';
import './LottoBall.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LottoBall extends Component{
    render(){
        return(
            <div className="LottoBall">{this.props.num}</div>
        
        )
    }
}

export default LottoBall;