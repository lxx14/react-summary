import React from 'react';
import { connect } from 'react-redux';

const JobsList = (props) => {

  return (
    <div className='jobs-list'>
    <h2>List</h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobs: state.jobsContainer.jobs
})

export default connect(mapStateToProps)(JobsList);