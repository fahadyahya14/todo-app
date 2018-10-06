import React from 'react';


class total extends React.Component {
    render() {
        
        var g = this.props.data 
        var i = 0 
       i  =  g.following + g.followers +  g.public_repos +  g.public_gists;
      
       localStorage.setItem(this.props.user,i)
console.log(i)
    return i 
        
        
    }
}

export default total;
