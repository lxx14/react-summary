import React from 'react';
import { connect } from 'react-redux';

const JobsList = (props) => {
  const renderList = props.jobs.map(item=><div key={item.id}><h2>{item.func}</h2><p className='date'>{item.date}</p><h4>{item.name}</h4><p>{item.duties}</p></div>)
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