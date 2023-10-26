const Home = () => {
  return (
    <Card
      txtcolor="black"
      header="My MIT Bank Landing Module"
      title="Welcome to the bank"
      text="you can use this bank to deposit and withdraw money!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
