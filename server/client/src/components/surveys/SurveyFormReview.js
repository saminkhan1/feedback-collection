import React from 'react'
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="waves-effect orange btn left" onClick={onCancel}>
                Back
                <i className="material-icons left">keyboard_backspace</i>
            </button>
            <button className="waves-effect green btn right" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons left">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
