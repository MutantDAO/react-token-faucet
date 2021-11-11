import Alert from 'react-bootstrap/Alert'

const Message = ({ balance }) => {
	return (
		<div style={{marginBottom: "24px", fontWeight:700, fontSize: "1.4rem"}}>
			Balance : {`${balance} $FISH`}
		</div>
	)
}

export default Message