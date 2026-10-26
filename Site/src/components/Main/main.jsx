import './main.css'
function Main(){
    return(
        <main className='Card'>
            <div>
                <h1 className='Titulo'>
                    Qual é o seu próximo passo?
                </h1>
                <p>Escolha a modalidade e comece sua jornada de transformação 
                    profissional.</p>
                <ul>
                    <li className='Livres'>Cursos Livres</li>
                    <li className='Tecnicos'>Cursos Tecnicos</li>
                    <li className='Graduacao'>Graduacao</li>
                    <li className='Pos'>Pos Graduacao</li>
                    <li className='Certificado'>Certificados</li>
                </ul>
            </div>
        </main>
    )
}

export default Main