import { Component } from "react";

export class Input extends Component{
    constructor(){
        super();

        this.state={
            textInput: '',
            list: []        
        }
    }
    changeText(e){
        this.setState({textInput:e})
    }

    addText(input){
        if(input === ''){
            alert ('Please enter an item')
        }
        else{
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, textInput: ''});
        console.log(listArray)
    }
}

    crosseWord(e){
        const li = e.target;
        li.classList.toggle('red')
    }

    allDelete(){
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.onFormSubmit}>
            <div>
                <input onChange={(e) => this.changeText(e.target.value)} type='text' placeholder='What do you want to do?' />
            </div>
            <div >    
                <button className="btnOne" onClick={() => this.addText(this.state.textInput)}>ADD</button>
            </div>
            <ul className="list">
                {this.state.list.map((item, index) => (<li onClick={this.crosseWord} key={index}>{item}</li>))}
            </ul> 
            <div>
                <button className="btnTwo" onClick={() => this.allDelete()}>DELETE</button>
            </div>
                </form>
            </div>
        )
    }
}