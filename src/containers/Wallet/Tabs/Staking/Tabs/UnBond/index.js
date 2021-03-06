import * as PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import variables from '../../../../../../dummy/variables';
import '../Delegate/index.css';
import Dialog from './Dialog';
import Search from './Search';
import SuccessDialog from './SuccessDialog';
import Table from './Table';

const UnBond = (props) => {
    return (
        <div className="delegate">
            <div className="filters">
                <p className="heading_text">{variables[props.lang].validators_list}</p>
                <Search/>
            </div>
            <Table/>
            <Dialog/>
            <SuccessDialog/>
        </div>
    );
};

UnBond.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps)(UnBond);
