import React from "react";
import {Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as PlayerRepoActions from "../../actions/repositoryactions/Players";
import {connect} from "react-redux";
import './PlayersTable.css'

class PlayersTable extends React.Component {

    componentDidMount() {
        // this.props.onGetAllPlayers();
    }


    options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        // showTotal: true,
        // paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '10', value: 10
        }, {
            text: '15', value: 15
        },
            //     {
            //     text: 'All', value: this.props.players.length
            // }
        ] // A numeric array is also available. the purpose of above example is custom the text
    };

    render() {
        return (
            <ToolkitProvider
                keyField="id"
                data={this.props.players}
                columns={Columns}
                search
            >
                {
                    props => (
                        <div>
                            <Row className="pt-3">
                                <Col xs={12} md={12} className="px-2 py-0">
                                    <SearchBar
                                        {...props.searchProps}
                                        placeholder={"Search for a player..."}
                                        delay={100}
                                    />
                                </Col>
                            </Row>
                            <div className="py-0">
                                <BootstrapTable
                                    {...props.baseProps}
                                    hover
                                    striped
                                    condensed
                                    // rowClasses={rowClasses}
                                    wrapperClasses="table-responsive"
                                    pagination={paginationFactory(this.options)}
                                />
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>
        )
    }
}

// const customTotal = (from, to, size) => (
//     <span className="react-bootstrap-table-pagination-total">
//         Showing {from} to {to} of {size} players
//     </span>
// );


export const Columns = [{
    dataField: "name",
    text: "Player Name",
    classes: "name"
}, {
    dataField: "seasons",
    text: "Seasons",
    classes: "seasons"
}, {
    dataField: "matches",
    text: "Appearances",
    classes: "appearances"
}
]

const {SearchBar} = Search;


const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetAllPlayers: () => dispatch(PlayerRepoActions.getAllPlayerAppearances())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable)