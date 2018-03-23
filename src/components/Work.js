import React, {Component} from 'react';
import '../styles/Work.css';
import WorkData from '../store/work.js';
import { Typography } from 'rmwc/Typography';
import {
    GridList,
    GridTile,
    GridTilePrimary,
    GridTilePrimaryContent,
    GridTileSecondary,
    GridTileTitle
} from 'rmwc/GridList';

export default class Work extends Component {

    constructor () {
        super();

        this.state = {
            header: WorkData.header,
            work: WorkData.items
        };
    }

    render () {
        return (
            <div id="work" className="work">
                <Typography use="display3">{this.state.header}</Typography>

                <GridList
                    tileAspect={'1x1'}
                >
                    {this.state.work.map((item, i) => (
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