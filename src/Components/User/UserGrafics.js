import React from "react";
import styles from "./UserGrafics.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";


const UserGrafics = ({ data }) => {
  const [grafic, setGrafic] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if(data === 0) {
      const graficData = data.map((post) => {
        return {
          x: post.title,
          y: Number(post.acessos),
        };
      });
      setGrafic(graficData);
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    } else setTotal('Não há acessos.')
    
  }, [data]);

  return (
    <section className={`${styles.grafic} animeTop`}>
      <div className={`${styles.total} ${styles.graficItem}`}>
        <p className={styles.text}>Acessos: <span>{total}</span></p>
      </div>
      <div className={styles.graficItem}>
        <VictoryPie
          data={grafic}
          innerRadius={68}
          labelRadius={100}
          padding={{ top: 10, bottom: 20, left: 80, right: 80}}
          width={500} 
          height={350}
          style={{ 
            data: { 
              fillOpacity: 0.9, 
              stroke: "#282A2D", 
              strokeWidth: 3 
            },
            labels: {
              fontSize: 14,
              fill:'#eee'
            } 
          }}
        />
      </div>
      <div className={styles.graficItem}>
          <VictoryChart>
            <VictoryBar data={grafic} alignment="start" style={{
            data: { 
              fill: "#fff",
              width: 15 ,
              opacity:1
            },
          }} 
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                fill: "#ffffff02",
              })
            }
          }}/>
          </VictoryChart>
      </div>
    </section>
  );
};

export default UserGrafics;
