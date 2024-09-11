import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { fData } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';
import { fontWeight } from '@mui/system';

// ----------------------------------------------------------------------

export default function FileDataActivity({ title, subheader, chart, ...other }) {
  const { labels, colors, series, options } = chart;

  const [seriesData, setSeriesData] = useState('Month');

  const chartOptions = useChart({
    chart: {
      stacked: true,
    },
    colors,
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          fontWeight: "800",
        },
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => fData(value),
      },
    },
    plotOptions: {
      bar: {
        borderRadius: (seriesData === 'Week' && 8) || (seriesData === 'Month' && 6) || 10,
        columnWidth: '40%',
      },
    },
    ...options,
  });


  return (
    <>
      <Card {...other}>
        <CardHeader
          title={title}
          subheader={subheader}
        />

        {series.map((item) => (
          <Box key={item.type} sx={{ mt: 3, mx: 3 }}>
            {item.type === seriesData && (
              <Chart
                dir="ltr"
                type="bar"
                series={item.data}
                options={chartOptions}
                width="100%"
                height={500}
              />
            )}
          </Box>
        ))}
      </Card>

    </>
  );
}

FileDataActivity.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
