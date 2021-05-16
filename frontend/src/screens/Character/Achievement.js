import React from 'react';
import { achievements, base } from '../../config/Achievement';

const Achievement = ({ playerAchieve }) => {
  const [achievementList, setAchievementList] = React.useState([]);

  React.useEffect(() => {
    const getAchieves = playerAchieve.rows?.map(({ key, value }) => {
      return {
        key: key - base,
        value,
      };
    });

    if (getAchieves && getAchieves.length > 0) {
      let sereliazedAchievements = [];
      achievements.forEach((item) => {
        for (const achieve of getAchieves) {
          if (achieve.key === item.id) {
            sereliazedAchievements.push({ ...item, value: achieve.value });
          }
        }
      });
      setAchievementList(sereliazedAchievements);
    }
  }, [playerAchieve]);

  return (
    <table className="tab_table table table-striped table-condensed">
      <thead>
        <tr>
          <td id="nameWidth">Name</td>

          <td>Points</td>
        </tr>
      </thead>
      <tbody className="ach">
        {achievementList.map((arch) => {
          return (
            <tr key={arch.id} style={{ display: 'table-row' }}>
              <td>{arch.name}</td>
              <td>{arch.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Achievement;
