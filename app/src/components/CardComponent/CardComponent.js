import PropTypes from "prop-types";
import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Chart from '../Charts';
import Avatar from 'react-avatar';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
       <Card.Group itemsPerRow={3}>
	       {
			Object.keys(data).map(
			  (el, i) => (
				<Card key={i}>
				  <Card.Content>
					{data[el].user.avatar ?
						<Image
						  floated='left'
						  size='mini'
						  src={data[el].user.avatar}
						/>
						:
						<Avatar name={data[el].user.name} size="30" style={{float: "left"}} />
					}
					<Card.Header floated='left'>{data[el].user.name}</Card.Header>
					<Card.Description>
						{data[el].user.occupation}
					</Card.Description>
					<Chart data={data[el].conversionGraph}/>
					
				  </Card.Content>
				  <Card.Content extra>
					<div>
						Impressions: <strong>{data[el].impressions}</strong>
					</div>
					<div>
						Conversions: <strong>{data[el].conversions}</strong>
					</div>
					<div>
						Revenue: <strong>${data[el].revenue}</strong>
					</div>
				  </Card.Content>
				</Card>)
		    )
		  }
	  </Card.Group>
    );
  }
}

CardComponent.propTypes = {
  data: PropTypes.object
};

export default CardComponent;
