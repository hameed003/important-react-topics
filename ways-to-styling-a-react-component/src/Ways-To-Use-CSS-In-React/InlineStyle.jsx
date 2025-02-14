function InlineComponent() {
  const divStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    margin: "20px",
    fontSize: "24px",
    fontWeight: 600,
  };

  return (
    <>
      {/* <div style={{
        color: "blue",
        backgroundColor: "lightgray",
        padding: "10px",
        margin: "20px",
        fontSize: "24px",
        fontWeight: 600,
      }}>I am an Inline CSS Styel in React Js</div> */}

      {/* we can write the above code like below */}
      <div style={divStyle}>I am an Inline CSS Styel in React Js</div>
    </>
  )
}

export default InlineComponent;
