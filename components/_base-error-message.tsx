interface BaseErrorMessageProps {
  message: string
}

const BaseErrorMessage: React.FC<BaseErrorMessageProps> = (props) => {
  return (
    <p className="bg-red-400 p-5 mt-16 mx-auto max-w-sm min-w-min text-center text-lg text-white font-semibold rounded">
      {props.message}
    </p>
  )
}

export default BaseErrorMessage
