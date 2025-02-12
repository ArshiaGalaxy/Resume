import { useContext } from "react";
import { Light } from "./light";

function Main(props){
    const theme = useContext(Light);
    return(
        <div className={(theme.light === 'false' ? 'dark' : '')+" bg-white pt-20 lg:pt-0 dark:bg-slate-800 w-full"}>
            <div className="lg:overflow-y-auto">
                {props.children}
            </div>
        </div>
    );
}

export default Main;