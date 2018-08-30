import * as React from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
    public render() {
        return (
            <div>
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                        <h1 style={{fontSize: "3.2rem"}}>TravelPedia</h1>
                        <h3 className="mb-5">
                            <em>Rencana perjalanan khusus buat kamu cuma ada disini</em>
                        </h3>
                        <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/destinations">Try Now</Link>
                    </div>
                    <div className="overlay"/>
                </header>

                <section className="content-section bg-light" id="about">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h2>TravelPedia asisten perjalanan terbaik untuk liburan kamu</h2>
                                <p className="lead mb-5">Renacana perjalanan kapanpun dan dimanapun</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
