import React from 'react';
import Total from "./total"
import Winer from "./winer"
import Gol from "./graeterorless"



class show extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      response:this.props.fah
    }
  };
  
  
  render() {
    
    const data = this.state.response;
    
    console.log( this.state.response)
    const data1 = data[0]
    var data2 = data[1]
    return (
      <div>

        <div className="card" >

 <img src={data1.avatar_url} alt="" className="card-img-top"/>

  <div className="card-body">

 <h4 className="card-title"> {data1.name}</h4>

  <ul className="list-group list-group-flush">
    <li className="list-group-item">  <p><b>following</b> : {data1.following}</p>
      </li>
      <li className="list-group-item">
        <p><b>follower</b> : {data1.followers}</p>
        </li>

    <li className="list-group-item">
    <p><b>public_repos</b> : {data1.public_repos}</p>
    </li>
    
    <li className="list-group-item">
    <p><b>public_gists</b> : {data1.public_gists}</p>
    </li>
    <p className='total'>
       <li className="list-group-item">
       The Total of all : 
       <Total data={data1} user="user1" />
       
         </li>
         </p> 
       </ul>

       </div>
        </div>
       
       
       
       <div className="card2">  <div className="card">
 <img src={data2.avatar_url} alt="" className="card-img-top"/>
 <div className="card-body">
 <h4 className="card-title"> {data2.name}</h4>

  <ul className="list-group list-group-flush">
    <li className="list-group-item">  <p><b>following</b> : {data2.following}</p>
      </li>
       
      <li className="list-group-item"> <p><b>follower</b> : {data2.followers}</p>
      </li>
    
    <li className="list-group-item">
    <p><b>public_repos</b> : {data2.public_repos}</p>
    </li>
    
    <li className="list-group-item">
    <p><b>public_gists</b> : {data2.public_gists}</p>
    </li>
 
    <p className='total'>
  <li className="list-group-item"> The Total of all : 

        <Total data={data2} user="user2" />
        </li>
        </p>
  </ul>
            
      
      
        </div>


        </div>
</div>
      
<div className='exter'>
<h4 className='vs' >VS</h4>
<Gol  user1={data1.following} user2={data2.following}  className='first'  />
<Gol  user1={data1.followers} user2={data2.followers}   className='hh' /> 
<Gol  user1={data1.public_repos}  user2={data2.public_repos}   className='kk' />
<Gol  user1={data1.public_gists} user2={data2.public_gists} className="equal" />
</div>



<div className='winner'><Winer user1={data1.name} user2={data2.name}  /></div>




      </div>
    );
    }
  }
  
  export default show;
  