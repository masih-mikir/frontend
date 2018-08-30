import * as React from 'react';
import { Link } from 'react-router-dom';

export interface InterfaceProductItem {
    img: string;
    title: string;
}

export class ProductItem extends React.Component<InterfaceProductItem, {}> {
    public render() {
        const { img, title } = this.props;
        return (
            <div className="col-lg-6">
                <Link className="portfolio-item" to={`/destinations/${title}`}>
                    <span className="caption">
                        <span className="caption-content">
                            <p style={{ fontWeight: "bold", color: "white", backgroundColor: "teal", fontSize: "2rem" }} className="mb-0" >{title}</p>
                        </span>
                    </span>
                    <img className="img-fluid" src={img} alt={title} />
                </Link>
            </div>
        )
    }
}
