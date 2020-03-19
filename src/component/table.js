import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';
import Modal from 'react-awesome-modal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            tables: [],
            visible: false,
            id: ''
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        axios.get('https://react-redux1-2cfe9.firebaseio.com/userdata.json')
            .then((res) => {
                const copyData = []
                for (let keys in res.data) {
                    copyData.push({ ...res.data[keys], key: keys })
                    console.log(res)
                }
               
                this.setState({ tables: copyData })
            })

    }


    closeModal = () => {
        this.setState({
            visible: false
        });
    }
    handleUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updateTable = (data1) => {
        this.setState({ visible: true, email: data1.email, password: data1.password, id: data1.key })
        

    }
    deleteTable = (data1)=>{
        this.setState({ visible: true, email: data1.email, password: data1.password, id: data1.key })
    }
    submit = () => {
        const data2 = {
            email: this.state.email,
            password: this.state.password
        }
        axios.put(`https://react-redux1-2cfe9.firebaseio.com/userdata/${this.state.id}.json`, data2)
            .then(res => {
                this.setState({
                    visible: false, id: null
                });
                this.getData();
            })
         axios.delete(`https://react-redux1-2cfe9.firebaseio.com/userdata/${this.state.id}.json`)   
            .then(res=>{
                this.setState({
                    visible:false
                })
            })
    }
    render() {
        const { tables } = this.state
        return (
            <div >
                <section>
                    <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClick={() => this.closeModal()}>
                        
                    <div style={{ padding: "20px" }}>
                            <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleUpdate} /><br/><br/>
                            <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleUpdate} /><br/>
                            <button type="sumbit" className="btn btn-success" onClick={this.submit}>Sumbit</button>
                            <button type="sumbit" className="btn btn-warning" onClick={this.closeModal}>close</button>
                        </div>
                    </Modal>
                </section>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tables && tables.map((value, index) => {
                                return (
                                    <TableRow update={this.updateTable}  delete = {this.deleteTable} key={value.key} data={value} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table
