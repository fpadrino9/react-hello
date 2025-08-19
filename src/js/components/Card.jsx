
const Card = ({imagen,titulo,descripcion}) => {

        return (
            <div className="card m-3" style={{width:"18rem"}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href="#" className="btn btn-primary">Pedir Ya !</a>
                </div>
            </div>
     );

}
export default Card ;