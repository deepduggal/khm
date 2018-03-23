import React, { Component } from 'react';
import '../styles/Navbar.css';
import 'material-design-icons';

import { Typography } from 'rmwc/Typography';
import { Button, ButtonIcon  } from 'rmwc/Button';
import {
    Drawer,
    DrawerHeader,
    DrawerContent
} from 'rmwc/Drawer';
import {
    ListItem,
    ListItemText
} from 'rmwc/List';
import { Elevation } from 'rmwc/Elevation';

class Navbar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            active: this.props.active || false,
            navItems: [
                {
                    label: 'Work',
                    href: '#work'
                },
                {
                    label: 'Services',
                    href: '#services'
                },
                {
                    label: 'Contact',
                    href: '#contact'
                }
            ]
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(e) {
        e.preventDefault();
        this.setState(prevState => ({
           active: !prevState.active
        }));
    }

    render() {
        return (
            <div id="navbar">
                <Elevation z={24}>
                    <Button raised className="navTrigger" onClick={this.toggleNav}>
                        <ButtonIcon use="menu"/>
                        <Typography use="subheading2">Menu</Typography>
                    </Button>
                </Elevation>
                <Drawer
                    temporary
                    open={this.state.active}
                    onClose={() => this.setState({active: false})}
                >
                    <DrawerHeader>
                        Kamel Handy Man
                    </DrawerHeader>
                    <DrawerContent>
                        {this.state.navItems.map((navItem) => {
                            return (
                                <a href={navItem.href} className="navItem">
                                    <ListItem>
                                        <ListItemText>{navItem.label}</ListItemText>
                                    </ListItem>
                                </a>
                            );
                        })}
                    </DrawerContent>
                </Drawer>
            </div>
        );
    }
}

export default Navbar;
