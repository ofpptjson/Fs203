import './c1.css';
export default function C1(props) {
    return (<div className="style1">
       <img src={props.e.photo} alt={props.e.nom}/>
       <h3>{props.e.nom} {props.e.prenom}</h3>
        <h3>Salaire: {props.e.salaire} DH</h3> 
        <h3>Grade: {props.e.grade}</h3>
        <h3>Echelle: {props.e.echelle}</h3>
    </div>)
}