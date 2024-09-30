interface FormProps {
  setLabel: React.Dispatch<
    React.SetStateAction<{ [k: string]: FormDataEntryValue } | undefined>
  >;
}

export default function Form({ setLabel }: FormProps) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        setLabel(data);
        form.reset();
      }}
    >
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        name="label"
      />
    </form>
  );
}
