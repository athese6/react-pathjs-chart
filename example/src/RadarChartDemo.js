import React from 'react';
import {Pie,Tree,SmoothLine,SmoothLineVivus,Radar,Bar,Scatterplot} from 'react-pathjs-chart';
import genie from 'genie'
import {ChartDemo} from './ChartOptions.js';

export class RadarDemo {
    get dataTemplate() {
        return {
            speed: {
                min: 10,
                max: 100
            },
            balance: {
                min: 10,
                max: 100
            },
            explosives: {
                min: 10,
                max: 100
            },
            energy: {
                min: 10,
                max: 100
            },
            flexibility: {
                min: 10,
                max: 100
            },
            agility: {
                min: 10,
                max: 100
            },
            endurance: {
                min: 10,
                max: 100
            }
        }
    }
    get options() {
        return {
            width:600,
            height:600,
            margin:{top:20,left:20,right:20,bottom:20},
            r:300,
            max:150,
            fill:"#2980B9",
            stroke:"#2980B9"
        }
    }
    get props(){
        return {}
    }
    generateData(dataTemplate){
        return [genie(dataTemplate)];
    }
}

export default class RadarChartDemo extends ChartDemo {
    constructor(props) {
        super(props, Radar, new RadarDemo());
    }
};
