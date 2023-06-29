import * as C from './style';

interface IProps {
  type: string;
  name?: string;
  placeholder: string;
  value?: string;
  required?: boolean
}

function Input({ type, name, placeholder, value, required }: IProps) {
  const props = {
    value,
    name,
    type,
    placeholder,
    ...(required ? { required: true } : {})
  };

  return <C.Input {...props} />;
}


export default Input;
