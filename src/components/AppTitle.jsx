import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const myStyles = theme => ({
    root: {
        marginLeft: 30,
    },
    search: {
        marginLeft: 50
    },
    dropdown: {
        marginLeft: 50
    }
});



class AppTitle extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            selectValue:"",
            list: []
        };
    }
    handleChange(e){
        this.setState({selectValue:e.target.value});
        this.props.onChangeDropdown(e);
    };
    componentDidMount() {
        fetch('http://starlord.hackerearth.com/TopRamen')
        .then((response) => response.json())
        .then(restaurentList => {
            this.setState({ list: restaurentList });
        });
    }

    render() {
        const classes = myStyles;
        const countrieslist = this.state.list.reduce((acc, obj)=>{
            var exist = acc.find(({Country}) => obj.Country === Country);
            if(!exist){
             acc.push(obj);
            }
            return acc;
         },[]);
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h4" color="inherit" className={classes.root} >
                            Top Ramen Restaurents
                        </Typography>
                        <div className="dropdown">
                        <label >Search by country</label>
                            <select
                                value={this.state.selectValue}
                                onChange={this.handleChange} 
                            >
                                <option value="">Select One</option>
                                {countrieslist.map((obj,i) =>
                                    <option key={i} value={obj.Country}>{obj.Country}</option>
                                )}
                            </select>
                        </div>
                        <div className="search">
                            <label >Search by Name</label>
                            <input type="text" value={this.props.query} onChange={this.props.onChangeSearch}></input>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    };
}

export default withStyles(myStyles, { theme: true })(AppTitle);