function Footer() {
  // DATA
  let title = "Footer Again";
  let mystyle = {
    color: "white",
    backgroundColor: "black",
  };
  let paragraph = "This is a paragraph";
  let person = {
    name: "Abhivanv",
    age: 20,
  };

  // VIEW
  return (
    <div>
      <h1 style={mystyle}>{title}</h1>
      <p>{paragraph}</p>
      <p>
        {person.name} is {person.age} years old
      </p>
    </div>
  );
}

export default Footer;
