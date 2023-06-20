import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Paises</h1>
			<div className="card">
                <Link to='/app'><button>Play!</button></Link>
				<p>
					Llenar después
				</p>
			</div>
        </div>
    );
};

export { Landing };