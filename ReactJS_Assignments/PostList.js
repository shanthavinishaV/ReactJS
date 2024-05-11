import react, { Component, useState } from 'react';
import './PostList.css';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loadStatus: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Failed to fetch data.');

                }

            })
            .then(data => this.setState({ list: data, loadStatus: false }))
            .catch(error => this.setState({ error: error.message, loadStatus: false }));
    }

    render() {
        const { list, loadStatus, error } = this.state;
        if (loadStatus) return <p>Post Loading ...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div>
                <h1 className="heading">Post List</h1>
                <table>
                    <tr>
                        <th>Post ID</th>
                        <th>Post Title</th>
                    </tr>
                    {list.map(list => (
                        <tr>
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                        </tr>

                    ))}
                </table>
            </div>
        );
    }
}

export default PostList;