new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: 'Piñon Fijo Rosca', value: 200 },
    { year: 'Plato OTA Black', value: 100 },
    { year: 'Uniforme Mavic', value: 50},
    { year: 'Tuercas Manzanas', value: 100},
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']

});