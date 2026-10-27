import C1 from './C1.js';
export default function Equipe2(props) {
    return (<div className="style2">
      {props.liste.map((e, index) => <C1 key={index} e={e}/>)}
      <h3> liste des employes en categorie A</h3>
      {props.liste.filter(x=>x.categorie==='A').map((e, index) => <C1 key={index} e={e}/>)}
    </div>)
}