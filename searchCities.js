exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rentalPrices')
    .del()
    .then(function () {
      return knex('rentalPrices').insert([
        {
          id: '1',
          city: 'Hackensack',
          state: 'New Jersey',
          population: '44,339',
          latitude: '74.0435',
          longitude: '40.8859',
          schoolScore: '1',
          numberOfSunnyDays: '210',
          unemploymentRate: '8.6%',
          avgRentalPrice: '$1385',
          safetyRanking: '150',
          dangerousRanking: '45/50',
          rec1: 'Worcester',
          rec2: 'Alexandria',
          rec3: 'Durham',
          rec4: 'Richmond',
          rec5: 'New-York',
          rec6: 'Reno',
        },
        {
          id: '2',
          city: 'Worcester',
          state: 'Massachusetts',
          population: '185,174',
          latitude: '71.8023',
          longitude: '42.2626',
          schoolScore: '2',
          numberOfSunnyDays: '197',
          unemploymentRate: '7.6%',
          avgRentalPrice: '$1178',
          safetyRanking: '22',
          dangerousRanking: '26/50',
          rec1: 'Hackensack',
          rec2: 'Alexandria',
          rec3: 'Durham',
          rec4: 'Richmond',
          rec5: 'New-York',
          rec6: 'Reno',
        },

        {
          id: '3',
          city: 'Alexandria',
          state: 'Virginia',
          population: '159,200',
          latitude: '77.0469',
          longitude: '38.8048',
          schoolScore: '3',
          numberOfSunnyDays: '201',
          unemploymentRate: '4.8%',
          avgRentalPrice: '$1288',
          safetyRanking: '61',
          dangerousRanking: '47/50',
          rec1: 'Alexandria',
          rec2: 'Worcester',
          rec3: 'Durham',
          rec4: 'Richmond',
          rec5: 'New-York',
          rec6: 'Reno',
        },
        {
          id: '4',
          city: 'Durham',
          state: 'North Carolina',
          population: '287,865',
          latitude: '78.8986',
          longitude: '35.9940',
          schoolScore: '4',
          numberOfSunnyDays: '220',
          unemploymentRate: '5.2%',
          avgRentalPrice: '$1075',
          safetyRanking: '28',
          dangerousRanking: '23/50',
          rec1: 'Hackensack',
          rec2: 'Worcester',
          rec3: 'Alexandria',
          rec4: 'Richmond',
          rec5: 'New-York',
          rec6: 'Reno',
        },
        {
          id: '5',
          city: 'Richmond',
          state: 'virginia',
          population: '232,866',
          latitude: '77.4360',
          longitude: '37.5407',
          schoolScore: '5',
          numberOfSunnyDays: '210',
          unemploymentRate: '5.0%',
          avgRentalPrice: '$1242',
          safetyRanking: '83',
          dangerousRanking: '47/50',
          rec1: 'Hackensack',
          rec2: 'Worcester',
          rec3: 'Alexandria',
          rec4: 'Durham',
          rec5: 'New-York',
          rec6: 'Reno',
        },
        {
          id: '6',
          city: 'New-York',
          state: 'New York',
          population: '8,700,000',
          latitude: '74.0060',
          longitude: '40.7128',
          schoolScore: '6',
          numberOfSunnyDays: '224',
          unemploymentRate: '8.7%',
          avgRentalPrice: '$3475',
          safetyRanking: '129',
          dangerousRanking: '25/50',
          rec1: 'Hackensack',
          rec2: 'Worcester',
          rec3: 'Alexandria',
          rec4: 'Durham',
          rec5: 'Richmond',
          rec6: 'Reno',
        },
        {
          id: '7',
          city: 'Reno',
          state: 'Nevada',
          population: '504,000',
          latitude: '119.8138',
          longitude: '39.5296',
          schoolScore: '7',
          numberOfSunnyDays: '252',
          unemploymentRate: '5.0%',
          avgRentalPrice: '$1351',
          safetyRanking: '101',
          dangerousRanking: '5/50',
          rec1: 'Hackensack',
          rec2: 'Worcester',
          rec3: 'Alexandria',
          rec4: 'Durham',
          rec5: 'Richmond',
          rec6: 'New-York',
        },
        {
          id: '8',
          city: 'Santa-Barbara',
          state: 'California',
          population: '91,686',
          latitude: '119.6982',
          longitude: '34.4208',
          schoolScore: '62',
          numberOfSunnyDays: '283',
          unemploymentRate: '7.6%',
          avgRentalPrice: '$2191',
          safetyRanking: '71',
          dangerousRanking: '14/50',
          rec1: 'Salinas',
          rec2: 'San-Diego',
          rec3: 'San-Francisco',
          rec4: 'San-Jose',
          rec5: 'Honolulu',
          rec6: 'Los-Angeles',
        },
        {
          id: '9',
          city: 'Salinas',
          state: 'California',
          population: '155,101',
          latitude: '121.6555',
          longitude: '36.6777',
          schoolScore: '142',
          numberOfSunnyDays: '259',
          unemploymentRate: '11.4%',
          avgRentalPrice: '$1832',
          safetyRanking: '56',
          dangerousRanking: '14/50',
          rec1: 'Santa-Barbara',
          rec2: 'San-Diego',
          rec3: 'San-Francisco',
          rec4: 'San-Jose',
          rec5: 'Honolulu',
          rec6: 'Los-Angeles',
        },
        {
          id: '10',
          city: 'San Diego',
          state: 'California',
          population: '1,540,000',
          latitude: '117.1611',
          longitude: '32.7157',
          schoolScore: '20',
          numberOfSunnyDays: '146',
          unemploymentRate: '8.0%',
          avgRentalPrice: '$2216',
          safetyRanking: '42',
          dangerousRanking: '14/50',
          rec1: 'Santa-Barbara',
          rec2: 'Salinas',
          rec3: 'San-Francisco',
          rec4: 'San-Jose',
          rec5: 'Honolulu',
          rec6: 'Los-Angeles',
        },
        {
          id: '11',
          city: 'San-Francisco',
          state: 'California',
          population: '870,887',
          latitude: '122.4194',
          longitude: '37.7749',
          schoolScore: '5',
          numberOfSunnyDays: '259',
          unemploymentRate: '6.3%',
          avgRentalPrice: '$2901',
          safetyRanking: '123',
          dangerousRanking: '14/50',
          rec1: 'Santa-Barbara',
          rec2: 'Salinas',
          rec3: 'San-Diego',
          rec4: 'San-Jose',
          rec5: 'Honolulu',
          rec6: 'Los-Angeles',
        },
        {
          id: '12',
          city: 'San-Jose',
          state: 'California',
          population: '1,009,340',
          latitude: '121.8863',
          longitude: '37.3382',
          schoolScore: '2',
          numberOfSunnyDays: '257',
          unemploymentRate: '5.5%',
          avgRentalPrice: '$2504',
          safetyRanking: '56',
          dangerousRanking: '14/50',
          rec1: 'Santa-Barbara',
          rec2: 'Salinas',
          rec3: 'San-Diego',
          rec4: 'San-Francisco',
          rec5: 'Honolulu',
          rec6: 'Los-Angeles',
        },
        {
          id: '13',
          city: 'Honolulu',
          state: 'Hawaii',
          population: '341,302',
          latitude: '157.8583',
          longitude: '21.3069',
          schoolScore: '29',
          numberOfSunnyDays: '271',
          unemploymentRate: '9.1%',
          avgRentalPrice: '$1725',
          safetyRanking: '119',
          dangerousRanking: '37/50',
          rec1: 'Santa-Barbara',
          rec2: 'Salinas',
          rec3: 'San-Diego',
          rec4: 'San-Francisco',
          rec5: 'San-Jose',
          rec6: 'Los-Angeles',
        },
        {
          id: '14',
          city: 'Los-Angeles',
          state: 'California',
          population: '3,979,576',
          latitude: '118.2437',
          longitude: '34.0522',
          schoolScore: '92',
          numberOfSunnyDays: '284',
          unemploymentRate: '11.5%',
          avgRentalPrice: '$2353',
          safetyRanking: '172',
          dangerousRanking: '14/50',
          rec1: 'Santa-Barbara',
          rec2: 'Salinas',
          rec3: 'San-Diego',
          rec4: 'San-Francisco',
          rec5: 'San-Jose',
          rec6: 'Honolulu',
        },
        {
          id: '15',
          city: 'South-Burlington',
          state: 'Vermont',
          population: '19,761',
          latitude: '73.1710',
          longitude: '44.4670',
          schoolScore: '46',
          numberOfSunnyDays: '160',
          unemploymentRate: '2.8%',
          avgRentalPrice: '$1278',
          safetyRanking: '2',
          dangerousRanking: '49/50',
          rec1: 'Columbia',
          rec2: 'Virginia Beach',
          rec3: 'Salt-Lake-City',
          rec4: 'Boise',
          rec5: 'Scottsdale',
          rec6: 'Chesapeake',
        },
        {
          id: '16',
          city: 'Columbia',
          state: 'Maryland',
          population: '103,467',
          latitude: '76.8610',
          longitude: '39.2037',
          schoolScore: '22',
          numberOfSunnyDays: '212',
          unemploymentRate: '3.2%',
          avgRentalPrice: '$1716',
          safetyRanking: '1',
          dangerousRanking: '11/50',
          rec1: 'South-Burlington',
          rec2: 'Virginia-Beach',
          rec3: 'Salt-Lake-City',
          rec4: 'Boise',
          rec5: 'Scottsdale',
          rec6: 'Chesapeake',
        },
        {
          id: '17',
          city: 'Virginia-Beach',
          state: 'Virginia',
          population: '449,974',
          latitude: '75.9780',
          longitude: '36.8529',
          schoolScore: '36',
          numberOfSunnyDays: '213',
          unemploymentRate: '5.1%',
          avgRentalPrice: '$1292',
          safetyRanking: '8',
          dangerousRanking: '47/50',
          rec1: 'South-Burlington',
          rec2: 'Columbia',
          rec3: 'Salt-Lake-City',
          rec4: 'Boise',
          rec5: 'Scottsdale',
          rec6: 'Chesapeake',
        },
        {
          id: '18',
          city: 'Salt- Lake-City',
          state: 'Utah',
          population: '200,567',
          latitude: '111.8910',
          longitude: '40.7608',
          schoolScore: '40',
          numberOfSunnyDays: '222',
          unemploymentRate: '3.8%',
          avgRentalPrice: '$1263',
          safetyRanking: '76',
          dangerousRanking: '39/50',
          rec1: 'South-Burlington',
          rec2: 'Columbia',
          rec3: 'Virginia-Beach',
          rec4: 'Boise',
          rec5: 'Scottsdale',
          rec6: 'Chesapeake',
        },
        {
          id: '19',
          city: 'Boise',
          state: 'Idaho',
          population: '240,380',
          latitude: '116.2023',
          longitude: '43.6150',
          schoolScore: '55',
          numberOfSunnyDays: '206',
          unemploymentRate: '2.4%',
          avgRentalPrice: '$1324',
          safetyRanking: '18',
          dangerousRanking: '40/50',
          rec1: 'South-Burlington',
          rec2: 'Columbia',
          rec3: 'Virginia-Beach',
          rec4: 'Salt-Lake-City',
          rec5: 'Scottsdale',
          rec6: 'Chesapeake',
        },
        {
          id: '20',
          city: 'Scottsdale',
          state: 'Arizona',
          population: '258,069',
          latitude: '111.9261',
          longitude: '33.4942',
          schoolScore: '80',
          numberOfSunnyDays: '299',
          unemploymentRate: '4.0%',
          avgRentalPrice: '$1655',
          safetyRanking: '20',
          dangerousRanking: '10/50',
          rec1: 'South-Burlington',
          rec2: 'Columbia',
          rec3: 'Virginia-Beach',
          rec4: 'Salt Lake-City',
          rec5: 'Boise',
          rec6: 'Chesapeake',
        },
        {
          id: '21',
          city: 'Chesapeake',
          state: 'Virginia',
          population: '244,835',
          latitude: '76.2875',
          longitude: '36.7682',
          schoolScore: '36',
          numberOfSunnyDays: '211',
          unemploymentRate: '3.0%',
          avgRentalPrice: '$1331',
          safetyRanking: '13',
          dangerousRanking: '47/50',
          rec1: 'South-Burlington',
          rec2: 'Columbia',
          rec3: 'Virginia-Beach',
          rec4: 'Salt Lake-City',
          rec5: 'Boise',
          rec6: 'Scottsdale',
        },
        {
          id: '22',
          city: 'New-York',
          state: 'New York',
          population: '8336817',
          latitude: '40.7128',
          longitude: '74.0060',
          schoolScore: '26',
          numberOfSunnyDays: '224',
          unemploymentRate: '12.6',
          avgRentalPrice: '4333',
          safetyRanking: '129',
          dangerousRanking: '7.7',
          rec1: 'Los-Angeles',
          rec2: 'Chicago',
          rec3: 'Houston',
          rec4: 'Phoenix',
          rec5: 'Philadelphia',
          rec6: 'San-Antonio',
        },
        {
          id: '23',
          city: 'Los-Angeles',
          state: 'California',
          population: '3979576',
          latitude: '34.0522',
          longitude: '118.2437',
          schoolScore: '30',
          numberOfSunnyDays: '284',
          unemploymentRate: '10.6',
          avgRentalPrice: '3200',
          safetyRanking: '172',
          dangerousRanking: '6.8',
          rec1: 'New-York',
          rec2: 'Chicago',
          rec3: 'Houston',
          rec4: 'Phoenix',
          rec5: 'Philadelphia',
          rec6: 'San-Antonio',
        },
        {
          id: '24',
          city: 'Chicago',
          state: 'Illinois',
          population: '2,693,976',
          latitude: '41.8781',
          longitude: '87.6298',
          schoolScore: '41',
          numberOfSunnyDays: '189',
          unemploymentRate: '9.1',
          avgRentalPrice: '2395',
          safetyRanking: '145',
          dangerousRanking: '1.6',
          rec1: 'New-York',
          rec2: 'Los-Angeles',
          rec3: 'Houston',
          rec4: 'Phoenix',
          rec5: 'Philadelphia',
          rec6: 'San Antonio',
        },
        {
          id: '25',
          city: 'Houston',
          state: 'Texas',
          population: '2,320,268',
          latitude: '29.7604',
          longitude: '95.3698',
          schoolScore: '89',
          numberOfSunnyDays: '204',
          unemploymentRate: '8.2',
          avgRentalPrice: '1631',
          safetyRanking: '127',
          dangerousRanking: '2.1',
          rec1: 'New-York',
          rec2: 'Chicago',
          rec3: 'Los-Angeles',
          rec4: 'Phoenix',
          rec5: 'Philadelphia',
          rec6: 'San-Antonio',
        },
        {
          id: '26',
          city: 'Phoenix',
          state: 'Arizona',
          population: '1,680,992',
          latitude: '33.4484',
          longitude: '112.0740',
          schoolScore: '80',
          numberOfSunnyDays: '299',
          unemploymentRate: '5.1',
          avgRentalPrice: '1376',
          safetyRanking: '104',
          dangerousRanking: '6.8',
          rec1: 'New-York',
          rec2: 'Chicago',
          rec3: 'Los-Angeles',
          rec4: 'Houston',
          rec5: 'Philadelphia',
          rec6: 'San-Antonio',
        },
        {
          id: '27',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          population: '1,584,064',
          latitude: '39.9526',
          longitude: '75.1652',
          schoolScore: '35',
          numberOfSunnyDays: '207',
          unemploymentRate: '7.3',
          avgRentalPrice: '2146',
          safetyRanking: '166',
          dangerousRanking: '5.7',
          rec1: 'New-York',
          rec2: 'Chicago',
          rec3: 'Los-Angeles',
          rec4: 'Houston',
          rec5: 'Phoenix',
          rec6: 'San-Antonio',
        },
        {
          id: '28',
          city: 'San-Antonio',
          state: 'Texas',
          population: '1,547,253',
          latitude: '29.2141',
          longitude: '98.4936',
          schoolScore: '108',
          numberOfSunnyDays: '220',
          unemploymentRate: '6.7',
          avgRentalPrice: '1132',
          safetyRanking: '94',
          dangerousRanking: '6.2',
          rec1: 'New-York',
          rec2: 'Chicago',
          rec3: 'Los-Angeles',
          rec4: 'Houston',
          rec5: 'Phoenix',
          rec6: 'Philadelphia',
        },
        {
          id: '29',
          city: 'South-Burlingtion',
          state: 'Virginia',
          population: '19,162',
          latitude: '44.4670',
          longitude: '73.1710',
          schoolScore: '36',
          numberOfSunnyDays: '160',
          unemploymentRate: '2.9',
          avgRentalPrice: '1588',
          safetyRanking: '2',
          dangerousRanking: '6.8',
          rec1: 'Plano',
          rec2: 'Nashua',
          rec3: 'Lewiston',
          rec4: 'Salem',
          rec5: 'Gilbert',
          rec6: 'Raleigh',
        },

        {
          id: '30',
          city: 'Plano',
          state: 'Texas',
          population: '287,064',
          latitude: '33.0198',
          longitude: '96.6989',
          schoolScore: '3',
          numberOfSunnyDays: '229',
          unemploymentRate: '11.6',
          avgRentalPrice: '1380',
          safetyRanking: '3',
          dangerousRanking: '5.9',
          rec1: 'South-Burlington',
          rec2: 'Nashua',
          rec3: 'Lewiston',
          rec4: 'Salem',
          rec5: 'Gilbert',
          rec6: 'Raleigh',
        },
        {
          id: '31',
          city: 'Nashua',
          state: 'New Hampshire',
          population: '88,815',
          latitude: '42.7654',
          longitude: '74.4676',
          schoolScore: '72',
          numberOfSunnyDays: '201',
          unemploymentRate: '4.2',
          avgRentalPrice: '1440',
          safetyRanking: '4',
          dangerousRanking: '5.0',
          rec1: 'South-Burlington',
          rec2: 'Plano',
          rec3: 'Lewiston',
          rec4: 'Salem',
          rec5: 'Gilbert',
          rec6: 'Raleigh',
        },
        {
          id: '32',
          city: 'Lewiston',
          state: 'Maine',
          population: '36,095',
          latitude: '44.1004',
          longitude: '70.2148',
          schoolScore: '18',
          numberOfSunnyDays: '197',
          unemploymentRate: '5',
          avgRentalPrice: '811',
          safetyRanking: '5',
          dangerousRanking: '6.4',
          rec1: 'South-Burlington',
          rec2: 'Plano',
          rec3: 'Nashua',
          rec4: 'Salem',
          rec5: 'Gilbert',
          rec6: 'Raleigh',
        },
        {
          id: '33',
          city: 'Salem',
          state: 'Oregon',
          population: '169,259',
          latitude: '44.9429',
          longitude: '123.0351',
          schoolScore: '115',
          numberOfSunnyDays: '154',
          unemploymentRate: '4.7',
          avgRentalPrice: '1133',
          safetyRanking: '4.3',
          dangerousRanking: '4.3',
          rec1: 'South-Burlington',
          rec2: 'Plano',
          rec3: 'Nashua',
          rec4: 'Lewiston',
          rec5: 'Gilbert',
          rec6: 'Raleigh',
        },
        {
          id: '34',
          city: 'Raleigh',
          state: 'North Carolina',
          population: '464,485',
          latitude: '35.7796',
          longitude: '78.6382',
          schoolScore: '12',
          numberOfSunnyDays: '213',
          unemploymentRate: '6.7',
          avgRentalPrice: '1269',
          safetyRanking: '9',
          dangerousRanking: '6.6',
          rec1: 'South-Burlington',
          rec2: 'Plano',
          rec3: 'Nashua',
          rec4: 'Salem',
          rec5: 'Gilbert',
          rec6: 'Lewiston',
        },
        {
          id: '35',
          city: 'St.-Louis',
          state: 'Missouri',
          population: '308,174',
          latitude: '38.6270',
          longitude: '90.1994',
          schoolScore: '42',
          numberOfSunnyDays: '202',
          unemploymentRate: '4.5',
          avgRentalPrice: '965',
          safetyRanking: '181',
          dangerousRanking: '1.2',
          rec1: 'Detroit',
          rec2: 'Memphis',
          rec3: 'Baltimore',
          rec4: 'Danville',
          rec5: 'Scranton',
          rec6: 'San-Bernardino',
        },
        {
          id: '36',
          city: 'Detroit',
          state: 'Michigan',
          population: '674,841',
          latitude: '44.3314',
          longitude: '83.0458',
          schoolScore: '82',
          numberOfSunnyDays: '183',
          unemploymentRate: '9.3',
          avgRentalPrice: '1105',
          safetyRanking: '178',
          dangerousRanking: '1.1',
          rec1: 'St.-Louis',
          rec2: 'Memphis',
          rec3: 'Baltimore',
          rec4: 'Danville',
          rec5: 'Scranton',
          rec6: 'San-Bernardino',
        },
        {
          id: '37',
          city: 'Memphis',
          state: 'Tennessee',
          population: '651,932',
          latitude: '35.1495',
          longitude: '90.0490',
          schoolScore: '110',
          numberOfSunnyDays: '218',
          unemploymentRate: '7.0',
          avgRentalPrice: '882',
          safetyRanking: '175',
          dangerousRanking: '1.4',
          rec1: 'Detroit',
          rec2: 'St.-Louis',
          rec3: 'Baltimore',
          rec4: 'Danville',
          rec5: 'Scranton',
          rec6: 'San-Bernardino',
        },
        {
          id: '38',
          city: 'Baltimore',
          state: 'Maryland',
          population: '609,032',
          latitude: '39.2904',
          longitude: '76.6122',
          schoolScore: '22',
          numberOfSunnyDays: '213',
          unemploymentRate: '6.2',
          avgRentalPrice: '1466',
          safetyRanking: '172',
          dangerousRanking: '1.6',
          rec1: 'Detroit',
          rec2: 'Memphis',
          rec3: 'St.-Louis',
          rec4: 'Danville',
          rec5: 'Scranton',
          rec6: 'San-Bernardino',
        },
        {
          id: '39',
          city: 'Scranton',
          state: 'Pennsylvania',
          population: '77,054',
          latitude: '41.4090',
          longitude: '75.6624',
          schoolScore: '92',
          numberOfSunnyDays: '174',
          unemploymentRate: '5.6',
          avgRentalPrice: '1237',
          safetyRanking: '146',
          dangerousRanking: '5.2',
          rec1: 'Detroit',
          rec2: 'Memphis',
          rec3: 'Baltimore',
          rec4: 'Danville',
          rec5: 'St.-Louis',
          rec6: 'San-Bernardino',
        },
        {
          id: '40',
          city: 'Danville',
          state: 'Illinois',
          population: '31,246',
          latitude: '40.1245',
          longitude: '87.6300',
          schoolScore: '167',
          numberOfSunnyDays: '190',
          unemploymentRate: '6.5',
          avgRentalPrice: '635',
          safetyRanking: '128',
          dangerousRanking: '1.8',
          rec1: 'Detroit',
          rec2: 'Memphis',
          rec3: 'Baltimore',
          rec4: 'St.-Louis',
          rec5: 'Scranton',
          rec6: 'San-Bernardino',
        },
        {
          id: '41',
          city: 'San-Bernardino',
          state: 'California',
          population: '243,254',
          latitude: '33.3528',
          longitude: '111.7890',
          schoolScore: '137',
          numberOfSunnyDays: '296',
          unemploymentRate: '4.7',
          avgRentalPrice: '650',
          safetyRanking: '180',
          dangerousRanking: '1.6',
          rec1: 'Detroit',
          rec2: 'Memphis',
          rec3: 'Baltimore',
          rec4: 'Danville',
          rec5: 'Scranton',
          rec6: 'St.-Louis',
        },

        {
          id: '42',
          city: 'Gilbert',
          state: 'Arizona',
          population: '243,254',
          latitude: '33.3528',
          longitude: '111.7890',
          schoolScore: '92',
          numberOfSunnyDays: '296',
          unemploymentRate: '4.7',
          avgRentalPrice: '650',
          safetyRanking: '10',
          dangerousRanking: '5.2',
          rec1: 'South-Burlington',
          rec2: 'Plano',
          rec3: 'Nashua',
          rec4: 'Lewiston',
          rec5: 'Salem',
          rec6: 'Raleigh',
        },
      ]);
    });
};
