const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link
const HashRouter = ReactRouterDOM.HashRouter
const UserContext = React.createContext(null)

const Card = ({ bgcolor, txtcolor, header, title, text, body, status }) => {
  const classes = () => {
    const bg = bgcolor ? ' bg-' + bgcolor : ' '
    const txt = txtcolor ? ' text-' + txtcolor : ' text-white'
    return 'card mb-3 ' + bg + txt
  }

  return (
    <div className={classes()} style={{ maxWidth: '18rem' }}>
      <div className="card-header">{header}</div>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {body}
        {status && <div id="createStatus">{status}</div>}
      </div>
    </div>
  )
}
