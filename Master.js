import C1 from './C1.js';
export default function Master(props) {
    return (<div className="style2">
      {props.liste.filter(x => x.categorie === 'A').map((e, index) => <C1 key={index} e={e}/>)}
    </div>)
}