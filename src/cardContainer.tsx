import * as React from 'react'

interface CardContainerProps {
  align?: string
  bgcolor?: string
  txtcolor?: string
  opacity?: string
  header: React.ReactNode
  title?: React.ReactNode
  text?: React.ReactNode
  body?: React.ReactNode
  status?: React.ReactNode
}

const CardContainer: React.FC<CardContainerProps> = ({
  align,
  bgcolor,
  txtcolor,
  opacity,
  header,
  title,
  text,
  body,
  status,
}) => {
  const classes = () => {
    const alignClass = align ? ' text-' + align : ''
    const bgClass = bgcolor ? ' bg-' + bgcolor : ''
    const txtClass = txtcolor ? ' text-' + txtcolor : ''
    const opacityClass = opacity ? ' bg-opacity-' + opacity : ''
    return 'card mb-3' + alignClass + bgClass + txtClass + opacityClass
  }

  return (
    <div
      className={classes()}
      style={{
        maxWidth: '30rem',
        margin: 'auto',
        marginTop: '5rem',
      }}
    >
      <h5
        className="card-header"
        style={{ backgroundColor: '#cae9ed', textAlign: 'center' }}
      >
        {header}
      </h5>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {body}
        {status && (
          <div id="createStatus" style={{ marginTop: '1rem' }}>
            {status}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardContainer
