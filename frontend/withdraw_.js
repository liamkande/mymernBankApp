const Withdraw = () => {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <WithdrawForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <WithdrawMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  )
}

const WithdrawMsg = ({ setShow, setStatus }) => {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          setShow(true)
          setStatus('')
        }}
      >
        Withdraw again
      </button>
    </>
  )
}

const WithdrawForm = ({ setStatus, setShow }) => {
  const [email, setEmail] = React.useState('')
  const [amount, setAmount] = React.useState('')

  function handle() {
    fetch(`/account/update/${email}/-${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text)
          setStatus(JSON.stringify(data.value))
          setShow(false)
          console.log('JSON:', data)
        } catch (err) {
          setStatus('Deposit failed')
          console.log('err:', text)
        }
      })
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Amount
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Withdraw
      </button>
    </>
  )
}
