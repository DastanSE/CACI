import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Row, Col, Carousel, Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import JobDiscription from '../JobsPage/JobDiscription';

class JoinUs extends Component {

  componentDidMount() {
    this.props.fetchJobs();
  }

  render() {
    return (
      <div className='skill-wrap clearfix' id='join-us'>
        <div className='center wow fadeInDown'>
          <h2>加入我們</h2>
          <p className='lead'>
            CACI-藝文創薈是一座服務於公眾，獨立的公益性藝術機構，總部設於香港，同時於台北、澳門、北京設有辦事處，由一群來自兩岸，熱愛藝術、科創的青年發起，致力於透過各項不同類型的活動積極推廣現當代藝文創作、科技創新的最新發展，同時通過對傳統文化的研習、傳承、發展，為現當代藝術提供吸養，遂步促進兩岸之間的藝文、科創交流和跨領域的對話。
          </p>
        </div>
        <Table hover responsive>
          <thead>
            <tr>
              <th>職位名稱</th>
              <th>工作經驗</th>
              <th>類型</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.jobs.data.map((data, index) => (
              <tr key={ index }>
                <td>{data.job_title}</td>
                <td>{data.job_experience}</td>
                <td>{data.job_type}</td>
                <td>
                  <JobDiscription data={ data } />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan='4' className='center'>
                <Button bsSize='xsmall' bsStyle='danger'>
                  <NavLink style={ { color: '#fff' } } activeClassName='' to={ routeCodes.JOBSPAGE }>
                    查看更多职位
                  </NavLink>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs };
}

export default connect(mapStateToProps, actions)(JoinUs);
