import react,{createContext,useState} from 'react'
export const MovieContext = createContext();
export const MovieProvider =(props)=>{
    const [movies,setMovies]=useState([
        {
            name:"thunivu",
            price:"244",   
            id:"1",
        },
        {
            name:"varisu",
            price:"244",
            id:"2",
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
        </MovieContext.Provider>
    );
};
export default MovieContext