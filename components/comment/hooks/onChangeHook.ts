export const onChange = (
  event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  setState(event.currentTarget.value);
};
