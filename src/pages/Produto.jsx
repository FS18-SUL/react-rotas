import { useParams } from "react-router";

const Produto = () => {

    const { item } = useParams();

    function getProduto(item){
        switch(item){
            case '1':
                return "Tênis";
            case '2':
                return "Cafê";
            case '3':
                return "Picanha";
        }
    }

    return (
        <h1>Pagina do produto: {getProduto(item)}</h1>
    );
}
 
export default Produto;