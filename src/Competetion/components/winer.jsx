import React from 'react';


class total extends React.Component {

    render() {
        var user1 =localStorage.getItem("user1") 
    
        var user2 =localStorage.getItem("user2") 
        
        
        if(user1<user2){
          var f =  this.props.user1  + " is more active on Github than " + this.props.user2
        console.log("a") 
        }
          else if(user1>user2){
            var f =    this.props.user2  + " is more active on Github than " + this.props.user1
            console.log("b") 
            
        }
        else{ var f =  "Draw between " + this.props.user1   + this.props.user1
        console.log("c") 
    }

    return  <p> {f}</p>

        
    }
}

export default total;
