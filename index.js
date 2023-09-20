const fullName = (user) => {
  return user.firstName + " " + user.lastName;
};
const user = { firstName: "Nitishkumar", lastName: "C" };
const className = "greeting";
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!</h1>
    <p>Good to see you.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
