import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Bhavik",
        location: "jaipur",
        contact: "abcd@gamil.com",
        avatar_url: "http://dummy.jpg",
      },
    };
  }

  // Define a function to handle the button click
  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/harish953");
    const data = await response.json();
    console.log(data);
    this.setState({ userInfo: data });
  }

  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <img className="profile-image" src={avatar_url} alt="profile-pic" />
        {/* Use an arrow function to pass the function reference */}
        <button onClick={this.handleButtonClick}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
