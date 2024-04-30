import { useRef } from "react";
import "./styles.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
			className="input">
			<input
				ref={inputRef}
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Enter a task"
				className="input__box"
			/>

			<button
				type="submit"
				className="input_submit">
				GO
			</button>
		</form>
	);
};

export default InputField;
