const Login = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [user, setUser] = React.useState(null);
  
  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={
        show ? (
          <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser} />
        ) : (
          <LoginMsg setShow={setShow} setStatus={setStatus} user={user} />
        )
      }
    />
  );
}
 

const LoginMsg = ({user, setShow}) => {
  return (
    <>
      <h5>Welcome: {user ? user.name : 'Guest'}</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}
const LoginForm = ({setStatus, setShow, setUser}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    function handle() {
      fetch(`/account/login/${email}/${password}`)
        .then(response => response.text())
        .then(text => {
          try {
            const data = JSON.parse(text);
            // Assuming the server response includes user data like id, name, etc.
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Balance:', data.balance);
            console.log('User:', data.name);
            setStatus('');
            setShow(false);
            setUser(data);
            console.log('JSON:', data);
          } catch(err) {
            setStatus(text);
            console.log('err:', text);
          }
        });
    }
  
    return (
      <>
        Email<br/>
        <input type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
        Password<br/>
        <input type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
        <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
      </>
    );
  }
  