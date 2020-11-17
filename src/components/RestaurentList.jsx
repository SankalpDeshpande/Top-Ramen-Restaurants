import React from 'react';
import Restaurant from './Restaurant';

class RestaurentList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.list.map((restaurent, index) => (
                    <Restaurant key={index} restaurent={restaurent}/>
                ))}
            </div>
        );
      };
}
export default RestaurentList;