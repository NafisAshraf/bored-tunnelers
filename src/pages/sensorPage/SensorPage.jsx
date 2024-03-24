import React, { useState } from 'react';
import { InfluxDB, Point, flux } from '@influxdata/influxdb-client'; // Ensure flux is imported
import styles from './SensorPage.module.css'; // Import the CSS module

const url = 'http://127.0.0.1:8086';
const token = 'akx-83Agbs3vfGhYHcgH6Ibca30jd6HlViHwfu7dxjflUrqv08ryeMsONMiceUyufhbZNhyq8C8qGdFupS7Mwg==';
const org = 'Bored Tunnelers';
const bucket = 'databuck3';

const client = new InfluxDB({ url, token });

const SensorPage = () => {
  const [dataWritten, setDataWritten] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const writeTemperatureData = async () => {
    const writeApi = client.getWriteApi(org, bucket);
    writeApi.useDefaultTags({ host: 'host1' });

    const temperatureData = [{
        sensorId: 'sensor1',
        temperature: Math.floor(Math.random() * 100),
        timestamp: new Date(),
    }];

    temperatureData.forEach(data => {
      const { sensorId, temperature, timestamp } = data;
      const point = new Point('temperature')
        .tag('sensorId', sensorId)
        .floatField('value', temperature)
        .timestamp(timestamp);

      writeApi.writePoint(point);
    });

    try {
      await writeApi.close();
      console.log('Finished writing data');
      setDataWritten(true);
      fetchTemperatureData(); // Fetch data after writing
    } catch (error) {
      console.error(`Error writing to InfluxDB: ${error}`);
    }
  };

  const fetchTemperatureData = async () => {
    const queryApi = client.getQueryApi(org);
    const query = flux`from(bucket:"${bucket}")
                      |> range(start: -1h)
                      |> filter(fn: (r) => r._measurement == "temperature")
                      |> filter(fn: (r) => r.sensorId == "sensor1")`;

    const queryData = [];
    queryApi.queryRows(query, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        queryData.push(`${o._time} ${o.sensorId}: ${o._value}`);
      },
      error(error) {
        console.error('Error fetching data:', error);
      },
      complete() {
        console.log('Completed fetching temperature data');
        setFetchedData(queryData); // Update state with the fetched data
      },
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={writeTemperatureData} className={styles.button}>Add Temperature Data</button>
      {dataWritten && <p>Data written to InfluxDB successfully.</p>}
      <div>
        {fetchedData.map((data, index) => (
          <p key={index}>{data}</p> // Display each fetched temperature record
        ))}
      </div>
    </div>
  );
};

export default SensorPage;
