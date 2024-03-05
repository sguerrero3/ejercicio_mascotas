import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function Detail() {

    const [mascota, setMascota] = useState(null);
    const {mascotaId} = useParams();


    useEffect(()=> {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

        fetch(URL).then(data => data.json()).then(data => {

            const mascotaEncontrada = data.find(obj => obj.id === parseInt(mascotaId));
            setMascota(mascotaEncontrada);
            });
    }, [mascotaId]);


 return (
    <div className='container'>
    {mascota ? (
        <Col>
            <Row>
                <h1> {mascota.nombre}</h1>
            </Row>
            <Row>
                <img src={mascota.foto} alt={mascota.descripcion} />
            </Row>
            <Row>
                <h3> {mascota.raza}</h3>
            </Row>
            
        </Col>
    ): 
    
    (<h1>Cargando...</h1>)}
    
   </div>
 );
}

export default Detail;