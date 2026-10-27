import C1 from './C1.js';
export default function C2(props) {
    return (<div className="style2">
      {props.liste.map((e, index) => <C1 key={index} e={e}/>)}
    </div>)
}