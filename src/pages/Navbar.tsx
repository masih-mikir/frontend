import * as React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

import './navbar.css';

export default class Example extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    public render() {
        return (
            <div>
                <Navbar expand="md">
                    <NavbarBrand href="/"><h3>TravelPedia</h3></NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
