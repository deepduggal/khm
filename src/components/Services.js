import React, {Component} from 'react';
import '../styles/Services.css';
import ServicesData from '../store/services.js';
import { Typography } from 'rmwc/Typography';
import {
    GridList,
    GridTile,
    GridTilePrimary,
    GridTilePrimaryContent,
    GridTileSecondary,
    GridTileTitle
} from 'rmwc/GridList';

export default class Services extends Component {

    constructor () {
        super();

        this.state = {
            header: ServicesData.header,
            services: ServicesData.items
        };
    }

    render () {
        return (
            <div id="services" className="services">
                <Typography use="display3">{this.state.header}</Typography>

                <GridList
                    tileAspect={'1x1'}
                >
                    {this.state.services.map((item, i) => (
                        <GridTile key={i} style={{width: '21rem'}}>

                            <GridTilePrimary>
                                <GridTilePrimaryContent>
                                    <img src={process.env.PUBLIC_URL + item.images[0]} alt={item.title} />
                                </GridTilePrimaryContent>
                            </GridTilePrimary>

                            <GridTileSecondary>
                                <GridTileTitle>{item.title}</GridTileTitle>
                            </GridTileSecondary>

                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}