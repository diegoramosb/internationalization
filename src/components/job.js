import React from 'react';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary}</td>
      			<td>{this.props.offer.city}</td>
      			<td>{this.props.offer.date}</td>
  			</tr>
  		);
	}
}