const Home = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />

            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse fuga at nemo voluptas quas
                        obcaecati aut animi, dolorem necessitatibus itaque doloremque fugiat? Perspiciatis fuga eos velit
                        suscipit repellat consequatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam autem beatae doloribus
                        blanditiis aperiam reprehenderit minima. Recusandae earum deserunt amet neque consectetur dolor
                        blanditiis, dicta, sint accusamus nobis minima.</p>

                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita"> Simplemente exelente</span>
                        <span className="autor"> Juan Perez - zapatos.com</span>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home;