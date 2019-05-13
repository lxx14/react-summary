import React from 'react';
import { connect } from 'react-redux';

const JobsList = (props) => {
  const renderList = props.jobs.map(item=><div>{item.id}</div>)
  return (
    <div className='jobs-list'>
    {renderList}
    </div>
  )
}

const mapStateToProps = (state) => ({
  jobs: state.jobsContainer.jobs
})

export default connect(mapStateToProps)(JobsList);