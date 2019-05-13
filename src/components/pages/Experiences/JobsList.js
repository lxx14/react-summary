import React from 'react';
import { connect } from 'react-redux';

const JobsList = (props) => {

  const renderJobs = props.jobs.map(item=>
  <div>
  <h2>{item.func}</h2>
  <p className='date'>{item.date}</p>
  <h4>{item.name}</h4>
  <p>{item.duties}</p>
  </div>)

  return (
    <div className='jobs-list'>
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobs: state.jobsContainer.jobs
})

export default connect(mapStateToProps)(JobsList);