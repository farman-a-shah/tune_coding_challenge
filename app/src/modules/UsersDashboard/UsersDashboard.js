import React, { Component } from "react";
import Api	 from "../../api/api";
import CardComponent from "../../components/CardComponent";

class UsersDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      let response = await Api.get("/users/index.php");
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(`User data request failed: ${e}`);
    }
  };

  render() {
    const { data } = this.state;
	return(
		<React.Fragment>
		  {Object.keys(data).length > 0 && 
			<CardComponent data={data} />
		  }
		</React.Fragment>
	);
  }
}

export default UsersDashboard;
