import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme)=>({}));

const App= () =>{
   const classes = useStyles();
   return <div><NavBar /></div>
};
export default App;