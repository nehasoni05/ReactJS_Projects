import React from 'react';
import data from './data.js';
import './index.css';
class Search extends React.Component 
{
    state = 
    {
        restaurants:[],
         view_list:[],
         search:""
    }

    
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({
                restaurants:data,
                view_list:data
            })
        },1000);
    }

    handleChange=(event)=>
    {
        const value=event.target.value;
        console.log(value);
        const details=this.state.restaurants;
        const view_list=this.state.view_list;
        const new_list=details.filter((employee)=>
        {
            let lower_case_emp = employee.Name.toLowerCase();
            let lower_case_value = value.toLowerCase();
            return lower_case_emp.includes(lower_case_value);
        })
        this.setState({ search: value, view_list: new_list })
    }

    render() 
    {
      const { restaurants, search, view_list } = this.state;
        console.log(restaurants);
		return (
            <>
                <input 
                placeholder="Enter some text"
                value={search} 
                onChange={this.handleChange}
                />
                <div className="container">
                <div className="name">Name</div>
                <div className="loc"> Location </div>
                {
                    restaurants.length === 0 ? <div>Loading</div>
                    :
                    <div>
                    {
                    view_list.map((restaurants)=>
                    {
                        
                        return(
                        <div>  
                        <div className="empname">
                        {restaurants.Name}
                        </div>
                        <div className="emploc">
                        {restaurants.Location}
                        </div> 
                        </div>
                        )
                    })
                    }
                    </div>
                }
                </div>
            </>
        )
 }
}
export default Search;
