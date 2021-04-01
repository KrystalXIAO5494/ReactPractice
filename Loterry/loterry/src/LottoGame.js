import react,{Component} from 'react';
import './LottoGame.css';
import LottoBall from "./LottoBall.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LottoGame extends Component{
    static defaultProps={
        title:"lotto",
        maxBalls:6,
        maxNum:40
    }
    constructor(props){
		super(props);
		this.state ={nums:Array.from({length:this.props.maxBalls})};
        this.handleClick = this.handleClick.bind(this);
        
	
	}
   generate(){
    this.setState(curState =>{
        nums:curState.nums.map(n =>{
            Math.floor(Math.random()*this.props.maxNum)+1
        })
    })
   }


    handleClick(){
    this.generate();
    }

    render(){
        return(
            <div className="LottoGame">
            <div>
            <h1>{this.props.title}</h1>
            </div>
            <div>
            {this.state.nums.map(n=>{
                <Ball num={n} />
            })}
                
            </div>
            <button onClick={this.handleClick}>Gnerate</button>
            </div>
        
        )
        }
export default LottoGame;