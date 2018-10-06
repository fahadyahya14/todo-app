import React from 'react';


class Gol extends React.Component {
    render() {
        
        var user1 = this.props.user1 
        var user2 = this.props.user2 
if(user1<user2){
    var i = "<"
}
else if(user1>user2){
    var i = ">"
}
else{
    var i = "="

}


return (<p  className={this.props.className}>{i}</p>) 
        
        
    }
}

export default Gol;
