interface Props {
  children: string;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <div className="error">{children}</div>;
};

export default ErrorMessage;
