import React from 'react';

export const Process = () => {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='center wow fadeInDown'>
            <div>
              <h2>制度流程</h2>
              <p className='lead'>Institution</p>
              <p className='lead'>
                每三個月為一季形成進階制度，從報名招募，到篩選入駐，最後進行作品呈現，由專業評委進行評估，淘汰較弱者，優秀者可在下一階段繼續駐紮，並在往後階段獲得專家指導、投資申請、商演運作等進一步的扶持，同時再招募新一季的扶持成員，如此形成滾動模式。
              </p>
            </div>
            <div className='row clearfix'>
              <div className='col-md-6 col-sm-6 ml'>
                <div
                  className='single-profile-top wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='300ms'
                >
                  <div className='media'>
                    <div className='fuchi-top'>
                      <img className='media-teac' src='https://res.cloudinary.com/cacicloud/image/upload/v1523629729/mainpage/ruzhu.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6 col-sm-6 ml'>
                <div
                  className='single-profile-top wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='300ms'
                >
                  <div className='media'>
                    <div className='fuchi-top'>
                      <img className='media-teac' src='https://res.cloudinary.com/cacicloud/image/upload/v1523629729/mainpage/zhidu.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='feature'>
        <div className='container'>
          <div className='col-md-6 col-sm-6'>
            <div className='center wow fadeInDown'>
              <div>
                <h2>相關規定</h2>
                <p className='lead'>Stipulation</p>
                <p className='lead'>
                  1、獲得扶持的隊伍需要全部成為藝文創匯的會員：享受參加培訓、觀看演出、使用場地免費，每人每年20元會費，全年享受會員福利。
                  <br />2、獲得扶持的團隊需要在入駐的三個月後進行一次公開的彙報呈現，形式包括演出、工作坊、微電影等。
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-sm-6'>
            <div className='center wow fadeInDown'>
              <div>
                <h2>時間安排</h2>
                <p className='lead'>Time</p>
                <p className='lead'>
                  4月25日——4月30日 計畫全面推廣
                  <br />5月1日——5月20日 遞交材料進行篩選
                  <br />5月21日——5月31日 面試
                  <br />6月正式入駐第一季扶持計畫
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
