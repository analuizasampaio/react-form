import { useState } from "react";

function Form() {
  let [data, setData] = useState({
    name: "",
    email: "",
  });

  let { email, name } = data;

  const onInputChange = (event) => {
    let eventName = event.target.name;
    let eventValue = event.target.value;
    console.log(eventName, eventValue);
    console.log(data);
    setData({
      ...data,
      [eventName]: eventValue,
    });
  };

  const [showResult, setShowResult] = useState(false);

  const enviar = (event) => {
    event.preventDefault();
    setShowResult(true);
  };

  return (
    <>
      <h1>FORMULARIO</h1>
      <form onSubmit={enviar}>
        <label>Nome</label>
        <input type="text" name="name" value={name} onChange={onInputChange} />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {showResult && (
        <section>
          <p>nome: {name}</p>
          <p>email: {email}</p>
        </section>
      )}
    </>
  );
}

export default Form;
