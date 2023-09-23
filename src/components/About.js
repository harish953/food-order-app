import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <User />
      <UserClass name={"Harish"} location={"Jaipur"} />
    </div>
  );
};

export default About;
