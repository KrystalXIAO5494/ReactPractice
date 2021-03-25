import react,{Component} from 'react';
import Die from './Die';
import './RollDice.css';


class RollDice extends Component{
    render(){
        return(
        <div>
        <h1>RollDice game</h1>
        <Die/>
        <Die/>
        <button>RollDice</button>
        </div>
        
        )}
}

export default RollDice;