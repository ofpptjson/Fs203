import C2 from "./C2";
import C6 from "./C6";
import employees from "./data";
import Exp1 from "./Exp1";
import Tableau from "./Tableau";

function App() {
  let T1=employees.filter(x => x.grade.trim() === "Technicien");
let T2=employees.filter(x => x.echelle.trim() === "B2");
let T3=employees.filter(x => x.salaire >= 30000);
let somme3=T3.reduce((total, x) => total + x.salaire, 0);
let somme2=T2.reduce((total, x) => total + x.salaire, 0);
let somme1=T1.reduce((total, x) => total + x.salaire, 0);
let somme=employees.reduce((total, x) => total + x.salaire, 0);
return(<div>
  <Exp1 />

  <C6 liste={employees}/>
  <Tableau liste={employees}/>
  
    <hr/>  <h1>Les employés ayant plus que 30000  Somme salaire : {somme3} DH Moyenne : {somme3/T3.length} DH</h1>   <hr/>
<C2 liste={T3}/>

 <hr/>  <h1>Les Techniciens Somme salaire : {somme1} DH Moyenne : {somme1/T1.length} DH</h1>   <hr/>
<C2 liste={T1}/>
  
<hr/><h1>Les employés de l'échelle B2 Somme salaire : {somme2} DH Moyenne : {somme2/T2.length} DH</h1><hr/>
<C2 liste={T2}/>

<hr/><h1>Tous les employés Somme salaire : {somme} DH Moyenne : {somme/employees.length} DH</h1><hr/>
<C2 liste={employees}/>

</div>);
}
export default App;
