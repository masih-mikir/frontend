import * as React from 'react';
import { Button, Popover as PopoverBootstrap, PopoverBody, PopoverHeader } from 'reactstrap';

export interface InterfacePopover {
    title: string;
    content: string;
    idKey: string;
    toggleText: string;
}

export default class Popover extends React.Component<InterfacePopover, any> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    public toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    public render() {
        const { content, title, idKey, toggleText } = this.props;
        return (
            <div>
                <Button id={idKey} onClick={this.toggle}>
                    {toggleText}
                </Button>
                <PopoverBootstrap placement="bottom" isOpen={this.state.popoverOpen} target={idKey} toggle={this.toggle}>
                    <PopoverHeader>{title}</PopoverHeader>
                    <PopoverBody>{content}</PopoverBody>
                </PopoverBootstrap>
            </div>
        );
    }
}