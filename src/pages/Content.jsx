function Paragrafo({ text, children }) {
  return (
    <>
      <p>Seu texto</p>
      <p>{text}</p>
      <p>{children}</p>
    </>
  );
}

function Content() {
  return (
    <div>
      <h1>CONTENT</h1>
      <Paragrafo text="OLA MUNDAO" />
      <Paragrafo>
        <button>Botao</button>
      </Paragrafo>
      <Paragrafo />
    </div>
  );
}

export default Content;
