//TODO: set message to list component


import React, {Component} from 'react';

class ListItem extends Component {

  // expensive way??
  // test(){
  //   return fetch(
  //   `https://www.eventbriteapi.com/v3/events/51666654354/?token=${process.env.TOKEN}`
  //   )
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //        return  data;
  //   }); 
  // }

  render() {
  
    return (

      // vertical layout
      // <div className="listItem">
      //    <div className="card">
      //       <div className="card-body">
      //        <img className="img-fluid mb-0" src={this.props.listItem.event.logo_url} />
      //       </div>
      //       <div className="card-text">
      //        {this.props.listItem.event.name}
      //       </div>
      //     </div>
      // </div>

      //horizontal layout
      <div className="listItem">
         <div className=" row">
            <div className="col-md-5">
             <img className="img-fluid mb-0" src={this.props.listItem.event.logo_url} />
            </div>
            <div className="col-md-7">
             {this.props.listItem.event.name}
            </div>
          </div>
      </div>
    );
  }
}

export default ListItem;
