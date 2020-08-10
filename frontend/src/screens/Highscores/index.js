import React from 'react'
import { MDBDataTable } from 'mdbreact';

import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Highscores = () => {
  const data = {
    columns: [
      {
        label: 'Rank',
        field: 'rank',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Vocation',
        field: 'vocation',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Level',
        field: 'level',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Points',
        field: 'points',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        rank: '1',
        name: 'Tiger Nixon',
        vocation: 'Sorcerer',
        office: 'Edinburgh',
        level: '61',
        date: '2011/04/25',
        points: '320'
      },
      {
        rank: '2',
        name: 'Garrett Winters',
        vocation: 'Sorcerer',
        office: 'Tokyo',
        level: '63',
        date: '2011/07/25',
        points: '170'
      },
      {
        rank: '3',
        name: 'Ashton Cox',
        vocation: 'Knight',
        office: 'San Francisco',
        level: '66',
        date: '2009/01/12',
        points: '86'
      },
      {
        rank: '4',
        name: 'Cedric Kelly',
        vocation: 'Paladin',
        office: 'Edinburgh',
        level: '22',
        date: '2012/03/29',
        points: '433'
      },
      {
        rank: '5',
        name: 'Airi Satou',
        vocation: 'Druid',
        office: 'Tokyo',
        level: '33',
        date: '2008/11/28',
        points: '162'
      },
      {
        rank: '6',
        name: 'Brielle Williamson',
        vocation: 'Knight',
        office: 'New York',
        level: '61',
        date: '2012/12/02',
        points: '372'
      },
      {
        rank: '7',
        name: 'Herrod Chandler',
        vocation: 'Paladin',
        office: 'San Francisco',
        level: '59',
        date: '2012/08/06',
        points: '137'
      },
      {
        rank: '8',
        name: 'Rhona Davidson',
        vocation: 'Paladin',
        office: 'Tokyo',
        level: '55',
        date: '2010/10/14',
        points: '327'
      }
  ]
};

return (
    <div className="mod-bg-1">
     <div className="page-wrapper">
        <div className="page-inner">
            <Menu />

            <div className="page-content-wrapper">
            <Header />

                <main id="js-page-content" role="main" className="page-content">
        
  <MDBDataTable striped bordered small order={['age', 'asc' ]} data={data} />

                 </main>
                 <Footer />
              </div>
          </div>
      </div>
  </div>
  );
}

export default Highscores;