const Withdraw = () =>  {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
  
    return (
      <Card
        bgcolor="success"
        header="Withdraw"
        // status={status}
        body={
          show ? (
            <WithdrawForm
              setShow={setShow}
              setStatus={setStatus}
              user={loggedInUser} // Pass the user data as a prop to the WithdrawForm component
            />
          ) : (
            <WithdrawMsg  user={loggedInUser} setShow={setShow} setStatus={setStatus}  />
          )
        }
      />
    );
  }
  const WithdrawMsg = ({setShow, setStatus, user }) => {
    return(<>
      <h5>Success {user.name}, your new balance is {user.balance} dollars</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          setShow(true);
          setStatus('');
        }}>
          Withdraw again
      </button>
    </>);
  }
  const WithdrawForm = ({user, setStatus, setShow}) => {
    const [amount, setAmount] = React.useState('');
  
    function handle() {
      fetch(`/account/update/${user.email}/-${amount}`) // Assuming the email is stored in user.email
        .then(response => response.text())
        .then(text => {
          try {
            const data = JSON.parse(text);
            setStatus(JSON.stringify(data.value));
            setShow(false);
            console.log('JSON:', data);
          } catch (err) {
            setStatus('Withdrawal failed');
            console.log('err:', text);
          }
        });
    }
  
    return (
      <>
        Welcome Back: {user.name} {/* Display the user's name */}
        <br />
        Amount<br />
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.currentTarget.value)}
        />
        <br />
  
        <button type="submit" className="btn btn-light" onClick={handle}>
          Withdraw
        </button>
      </>
    );
  }
  