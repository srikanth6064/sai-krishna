import React from 'react'
import Paginate from 'react-js-pagination'
import usersData from '../data.json'
import ClickCounter from '../Hoc/clickCounter.js';
import ClickHover from '../Hoc/clickHover.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: usersData.user,
            activePage: 1,
            itemsCountPerPage: 4,
            loader: false,
            search:""

        }
    }
    handlePageChange = (pagesCount) => {
        this.setState({ activePage: pagesCount })
    }
    searchHandler = (e) => {
        if(e.target.value === ""){
       
        }
       this.setState({search:e.target.value})
       var data2 = this.state.data.filter((val)=>{
        for (let value of Object.entries(val)) {
            if (value.toString().includes(e.target.value)) {
                return val;
            }

        }

       })
       this.setState({data:data2})
    }


    render() {
        const { data, activePage, itemsCountPerPage } = this.state
        const indexOfLastTodo = activePage * itemsCountPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemsCountPerPage;

        const currentItems = data.slice(indexOfFirstTodo, indexOfLastTodo)

        return (

            <React.Fragment>
                <div>
                    <form>
                        <div style={{ position: 'relative', left: '907px', top: '31px' }}>
                            Selected Items  <input type="text"
                                name ="search"
                                value={this.state.search}
                                placeholder="Selected Items"
                                onChange={this.searchHandler}
                            />
                        </div>
                    </form>
                    <div className="container">
                        <div className="row">
                            <div className="card" style={{ width: '100%', marginTop: '50px' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>name</th>
                                            <th>age</th>
                                            <th>gender</th>
                                            <th>email</th>
                                            <th>phoneNo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems ? currentItems.map((val, key) => (
                                            <tr key={key}>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.age}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.email}</td>
                                                <td>{val.phoneNo}</td>
                                            </tr>
                                        )) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Paginate

                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.data.length}
                    onChange={this.handlePageChange}
                    linkClass="page-link"
                    itemClass="page-item"
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                />

                <ClickCounter name="hareesh" />
                <ClickHover name="yuva" />

            </React.Fragment>
        )
    }
}
export default Home;