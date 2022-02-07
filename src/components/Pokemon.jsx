import Type from "./Type";

const Pokemon = (props) => {
  return (
    <div className="cardContainer">
      <h1 className="name">{props.name}</h1>
      <img src={props.img} alt="pokemon" className="img" />
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
};

export default Pokemon;
