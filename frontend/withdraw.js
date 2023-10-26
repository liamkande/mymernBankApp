const Withdraw = ()  =>{
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [loggedInUser, setLoggedInUser] = React.useState(JSON.parse(localStorage.getItem('user')));
  
    const updateUserBalance = (newBalance) => {
      setLoggedInUser(prevUser => ({ ...prevUser, balance: newBalance }));
    };
  
    return (
      <Card
        bgcolor="success"
        header="Withdraw"
        body={
          show ? (
            <WithdrawForm
              setShow={setShow}
              setStatus={setStatus}
              user={loggedInUser}
              updateUserBalance={updateUserBalance}
            />
          ) : (
            <WithdrawMsg user={loggedInUser} setShow={setShow} setStatus={setStatus} />
          )
        }
      />
    );
  }
  
  const WithdrawMsg = ({setShow,setStatus, user, updateUserBalance}) => {
    return (
      <>
        <h5>Success {user.name}, your new balance is {updateUserBalance} dollars</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => {
            setShow(true);
            setStatus('');
          }}>
          Withdraw again
        </button>
      </>
    );
  }
  
const WithdrawForm = ({user,setStatus, setShow, updateUserBalance }) => {
    const [amount, setAmount] = React.useState('');
  
    function handle() {
      fetch(`/account/update/${user.email}/-${amount}`)
        .then(response => response.text())
        .then(text => {
          try {
            const data = JSON.parse(text);
            setStatus(JSON.stringify(data.value));
            setShow(false);
            updateUserBalance(data.newBalance); // Update user balance after successful withdrawal
            console.log('JSON:', data);
          } catch (err) {
            setStatus('Withdrawal failed');
            console.log('err:', text);
          }
        });
    }
  
    return (
      <>
        Welcome Back: {user.name} <br />
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
  