import { Link } from 'react-router-dom';
import "./Landing.css";

const Landing = () => {
    return (
        <div className='container-landing'>
            {/* <img src="../../assets/mapa.webp" alt="" /> */}
            <h1>COUNTRIES</h1>
			<div className="card">
                <Link to='/app'><button>Play!</button></Link>
				<p>Embark on a global adventure</p>
			</div>
        </div>
    );
};

export { Landing };